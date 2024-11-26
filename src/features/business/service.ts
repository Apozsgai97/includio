import { Business, Repository } from "./repository";
import { v4 as uuidv4 } from "uuid";

export function createBusinessService(repository: Repository) {
  return {
    async getAllElections() {
      return await repository.getAllBusinesses();
    },
    async addBusiness(
      name: string,
      description: string,
      category: string,
      address: string,
      email: string,
      telephone: string
    ) {
      const id = uuidv4();
      const business: Business = {
        id: id,
        name: name,
        description: description,
        address: address,
        contact: {
          mobile: telephone,
          email: email,
        },
        category: category,
        image: "/restaurant2.jpg",
      };
      repository.addBusiness(business);
    },
  };
}
