import { AccessibilityData } from "./action";
import { calculateScore } from "./logic";
import { BusinessData, Repository } from "./repository";

export type AccessibilityDataWithId = {
  businessId: string;
  ramp: string;
  doors: string;
  parking: string;
  dimension: string;
  grabRails: string;
  emergencyButton: string;
  showerBed: string;
  ceilingLift: string;
  space: string;
  restroomAccess: string;
  insideStairs: string;
  tables: string;
  dog: string;
  score: number;
};

export function createBusinessService(repository: Repository) {
  return {
    async getAllBusinesses() {
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
      const business: BusinessData = {
        name: name,
        description: description,
        address: address,
       contact_mobile: telephone,
       contact_email: email,
       category: category,
        image: "/restaurant2.jpg",
      };
      repository.addBusiness(business);
    },
    async getBusinessById(id: string){
      return await repository.getBusinessById(id);
    },
    async createAccessibilityIndex(accessibilityData: AccessibilityData, businessId:string){
      const score = calculateScore(accessibilityData);
      const accessibilityIndex: AccessibilityDataWithId = {
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
        score: score,
      };

      repository.createIndex(accessibilityIndex);
    },
    async getAccessibilityIndexById(businessId: string){
      return await repository.getAccessibilityIndexById(businessId);
    }
  };
}
