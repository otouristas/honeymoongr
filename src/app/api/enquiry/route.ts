import { NextResponse } from "next/server";
import { SITE } from "@/content/site";

export const runtime = "nodejs";

export type EnquiryPayload = {
  firstName: string;
  lastName: string;
  email: string;
  weddingDate?: string;
  travelDate?: string;
  nights?: string;
  destinations?: string;
  budget?: string;
  message: string;
  website?: string;
};

const BUDGET_BANDS = new Set([
  "under-250",
  "250-500",
  "500-900",
  "900-plus",
  "unsure",
]);

function fail(message: string, field?: string) {
  return NextResponse.json({ ok: false, message, field }, { status: 400 });
}

export async function POST(request: Request) {
  let body: Partial<EnquiryPayload>;

  try {
    body = await request.json();
  } catch {
    return fail("Δεν μπορέσαμε να διαβάσουμε το μήνυμα. Δοκιμάστε ξανά.");
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const firstName = (body.firstName ?? "").trim();
  const lastName = (body.lastName ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (firstName.length < 2) return fail("Γράψτε το όνομά σας.", "firstName");
  if (lastName.length < 2) return fail("Γράψτε το επώνυμό σας.", "lastName");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    return fail("Αυτό το email δεν φαίνεται σωστό.", "email");
  if (message.length < 20)
    return fail(
      "Δύο προτάσεις για το πώς θέλετε να νιώθουν οι μέρες μάς βοηθούν να απαντήσουμε σωστά.",
      "message",
    );
  if (message.length > 4000) return fail("Το μήνυμα είναι λίγο μακρύ.", "message");
  if (body.budget && !BUDGET_BANDS.has(body.budget))
    return fail("Επιλέξτε μία από τις ζώνες προϋπολογισμού.", "budget");

  const enquiry = {
    receivedAt: new Date().toISOString(),
    firstName,
    lastName,
    email,
    weddingDate: body.weddingDate?.trim() || null,
    travelDate: body.travelDate?.trim() || null,
    nights: body.nights?.trim() || null,
    destinations: body.destinations?.trim() || null,
    budget: body.budget || null,
    message,
  };

  const resendKey = process.env.RESEND_API_KEY;

  if (resendKey) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.ENQUIRY_FROM ?? "enquiries@myhoneymoon.gr",
          to: [process.env.ENQUIRY_TO ?? SITE.email],
          reply_to: email,
          subject: `Ενδιαφέρον γαμήλιου ταξιδιού — ${firstName} ${lastName}`,
          text: [
            `${firstName} ${lastName} <${email}>`,
            `Ημερομηνία γάμου: ${enquiry.weddingDate ?? "δεν δόθηκε"}`,
            `Ταξίδι: ${enquiry.travelDate ?? "δεν δόθηκε"}`,
            `Νύχτες: ${enquiry.nights ?? "δεν δόθηκε"}`,
            `Προορισμοί: ${enquiry.destinations ?? "δεν δόθηκε"}`,
            `Προϋπολογισμός: ${enquiry.budget ?? "δεν δόθηκε"}`,
            "",
            message,
          ].join("\n"),
        }),
      });

      if (!response.ok) throw new Error(`Resend responded ${response.status}`);
      return NextResponse.json({ ok: true, delivered: "email" });
    } catch (error) {
      console.error("Enquiry email failed", error);
    }
  }

  const subject = encodeURIComponent(
    `Ενδιαφέρον γαμήλιου ταξιδιού — ${firstName} ${lastName}`,
  );
  const lines = [
    `Ημερομηνία γάμου: ${enquiry.weddingDate ?? "δεν δόθηκε"}`,
    `Ταξίδι: ${enquiry.travelDate ?? "δεν δόθηκε"}`,
    `Νύχτες: ${enquiry.nights ?? "δεν δόθηκε"}`,
    `Προορισμοί: ${enquiry.destinations ?? "δεν δόθηκε"}`,
    `Προϋπολογισμός: ${enquiry.budget ?? "δεν δόθηκε"}`,
    "",
    message,
  ].join("\n");

  console.info("Enquiry received", enquiry);

  return NextResponse.json({
    ok: true,
    delivered: "mailto",
    mailto: `mailto:${SITE.email}?subject=${subject}&body=${encodeURIComponent(lines)}`,
  });
}
