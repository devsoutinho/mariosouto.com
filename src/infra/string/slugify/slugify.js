import unidecode from "unidecode";

export function slugify(string) {
  const normalizedString = unidecode(string);
  return normalizedString
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}