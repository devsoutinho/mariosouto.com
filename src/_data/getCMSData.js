import { presentations } from "./content/presentations";
import { setup } from "./content/setup";

export function getCMSData() {
  return [
    ...setup,
    ...presentations,
  ];
}