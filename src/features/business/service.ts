import { AccessibilityData } from "./action";
import { AccessibilityIndex, BusinessData, Repository } from "./repository";
import { v4 as uuidv4 } from "uuid";

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
      const id = uuidv4();
      const score = calculateScore(accessibilityData);
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
        score: score,
      };

      repository.createIndex(accessibilityIndex);
    },
    async getAccessibilityIndexById(businessId: string){
      return await repository.getAccessibilityIndexById(businessId);
    }
  };
}


export function calculateScore(accessibilityData: AccessibilityData){
  let score = 0;
  if(accessibilityData.ramp === "yes") score += 20;
  if (accessibilityData.doors === "yes") score += 10;
  if (accessibilityData.parking === "yes") score += 10;
  if (accessibilityData.dimension === "yes") score += 6;
  if (accessibilityData.grabRails === "yes") score += 4;
  if (accessibilityData.emergencyButton === "yes") score += 4;
  if (accessibilityData.ceilingLift === "yes") score += 4;
  if (accessibilityData.showerBed === "yes") score += 2;
  if (accessibilityData.space === "yes") score += 10;
  if (accessibilityData.restroomAccess === "yes") score += 5;
  if (accessibilityData.insideStairs === "yes") score += 5;
  if (accessibilityData.tables === "yes") score += 10;
  if (accessibilityData.dog === "yes") score += 10;

  return score;
  console.log(score)


}
