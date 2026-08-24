import { SiteMenu } from "@/components/SiteMenu";
import { SITE_MENU } from "@/content/nav";

/** Server component: the menu model is derived here so the content registries
 *  stay out of the client bundle. */
export function Header() {
  return <SiteMenu menu={SITE_MENU} />;
}
