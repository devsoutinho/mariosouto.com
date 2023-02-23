import { presentations } from "./content/presentations";
import { setup } from "./content/setup";
import { projects } from "./content/projects.js";

export function getCMSData() {
  return [
    ...projects,
    ...setup,
    ...presentations,
  ];
}