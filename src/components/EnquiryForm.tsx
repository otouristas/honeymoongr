"use client";

import { useState } from "react";
import { SITE } from "@/content/site";

const FIELD =
  "mt-1.5 w-full border border-brand-teal/25 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-brand-teal";
const LABEL = "text-xs uppercase tracking-[0.18em] text-brand-ink/45";

const BUDGETS = [
  { value: "", label: "Προτιμώ να μην πω ακόμη" },
  { value: "under-250", label: "Κάτω από €250 τη βραδιά" },
  { value: "250-500", label: "€250 – €500 τη βραδιά" },
  { value: "500-900", label: "€500 – €900 τη βραδιά" },
  { value: "900-plus", label: "€900+ τη βραδιά" },
  { value: "unsure", label: "Δεν έχουμε ιδέα ακόμη" },
];

type Status = "idle" | "sending" | "sent" | "error";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    const data = Object.fromEntries(new FormData(event.currentTarget));

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        setError(result.message ?? "Κάτι πήγε στραβά. Δοκιμάστε ξανά.");
        setStatus("error");
        return;
      }

      if (result.mailto) window.location.href = result.mailto;
      setStatus("sent");
    } catch {
      setError(
        "Δεν μπορέσαμε να φτάσουμε τον διακομιστή. Στείλτε μας απευθείας email.",
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-white/85 px-8 py-16 text-center">
        <p className="font-script text-4xl text-brand-teal">ευχαριστούμε</p>
        <h3 className="mt-4 font-display text-2xl tracking-wide text-brand-ink">
          Το μήνυμα είναι στην Αγγελική
        </h3>
        <p className="mx-auto mt-4 max-w-sm text-brand-ink/70">
          Θα απαντήσουμε εντός μίας εργάσιμης ημέρας, από άνθρωπο και όχι από
          αυτόματη απάντηση. Αν επείγει, καλέστε {SITE.phoneDisplay}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white/85 p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={LABEL}>Όνομα</span>
          <input required type="text" name="firstName" className={FIELD} />
        </label>
        <label className="block">
          <span className={LABEL}>Επώνυμο</span>
          <input required type="text" name="lastName" className={FIELD} />
        </label>
      </div>

      <label className="block">
        <span className={LABEL}>Email</span>
        <input required type="email" name="email" className={FIELD} />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={LABEL}>Ημερομηνία γάμου</span>
          <input type="date" name="weddingDate" className={FIELD} />
        </label>
        <label className="block">
          <span className={LABEL}>Πότε περίπου θα ταξιδέψετε</span>
          <input
            type="text"
            name="travelDate"
            placeholder="Τέλη Οκτωβρίου 2027"
            className={FIELD}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={LABEL}>Πόσες νύχτες</span>
          <input type="text" name="nights" placeholder="10 – 14" className={FIELD} />
        </label>
        <label className="block">
          <span className={LABEL}>Προϋπολογισμός ανά βραδιά, για δύο</span>
          <select name="budget" className={FIELD} defaultValue="">
            {BUDGETS.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className={LABEL}>Προορισμοί που σκέφτεστε</span>
        <input
          type="text"
          name="destinations"
          placeholder="Μαλδίβες ή κάτι με περισσότερο περπάτημα"
          className={FIELD}
        />
      </label>

      <label className="block">
        <span className={LABEL}>Πώς θέλετε να νιώθουν οι μέρες;</span>
        <textarea
          required
          name="message"
          rows={5}
          minLength={20}
          className={FIELD}
          placeholder="Θέλουμε νερό, λίγες μετακινήσεις, και δύο άδεια απογεύματα…"
        />
      </label>

      <div aria-hidden className="hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {error ? (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-solid w-full disabled:opacity-60"
      >
        {status === "sending" ? "Αποστολή…" : "Αποστολή μηνύματος"}
      </button>

      <p className="text-center text-xs text-brand-ink/45">
        Απαντάμε εντός μίας εργάσιμης ημέρας. Δεν μοιραζόμαστε τα στοιχεία σας και δεν
        υπάρχει λίστα newsletter για να ξεφύγετε.
      </p>
    </form>
  );
}
