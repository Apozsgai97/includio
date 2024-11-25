import { createBusinessRepository } from "./repository";
import { createBusinessService } from "./service";

export function createBusinessFeature() {
  const repository = createBusinessRepository();
  const service = createBusinessService(repository);

  return { service };
}
