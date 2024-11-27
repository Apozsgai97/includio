import { AccessibilityData } from "./action";
import { AccessibilityIndex, Business, Repository } from "./repository";
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
    async getBusinessById(id: string){
      return await repository.getBusinessById(id);
    },
    async createAccessibilityIndex(accessibilityData: AccessibilityData, businessId:string){
      const id = uuidv4();
      const accessibilityIndex: AccessibilityIndex = {
        id: id,
        businessId: businessId,
        ramp: accessibilityData.ramp,
        doors: accessibilityData.doors,
        parking: accessibilityData.parking,
        dimension: accessibilityData.dimension,
        grabRails: accessibilityData.grabRails,
        emergencyButton: accessibilityData.emergencyButton,
        showerBed: accessibilityData.showerBed,
        ceilingLift: accessibilityData.ceilingLift,
        space: accessibilityData.space,
        restroomAccess: accessibilityData.restroomAccess,
        insideStairs: accessibilityData.insideStairs,
        tables: accessibilityData.tables,
        dog: accessibilityData.dog,
      };

      repository.createIndex(accessibilityIndex);
    }
  };
}
