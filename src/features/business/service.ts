import { Repository } from "./repository";

export function createBusinessService(repository: Repository) {
  return {
    async getAllElections() {
      return await repository.getAllBusinesses();
    },
  };
}
