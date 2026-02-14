import { cookies } from "next/headers";
import { translations } from "./index";

export async function getLocale() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("language")?.value || "en";

  return translations[lang] || translations.en;
}
