import { db } from "@/db/index";
import { accessibilityIndexTable, businessTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { AccessibilityDataWithId } from "./service";

export type Business = {
  id: string;
  name: string;
  description: string | null;
  address: string;
  contact_mobile: string;
  contact_email: string;
  category: string | null;
  image: string | null;
};
export type BusinessData = {
  name: string;
  description: string | null;
  address: string;
  contact_mobile: string;
  contact_email: string;
  category: string | null;
  image: string | null;
};

export type AccessibilityIndex = {
  id: string;
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

export function createBusinessRepository() {
  return {
    async getAllBusinesses() {
      return await db.select().from(businessTable);
    },
    async addBusiness(business: BusinessData) {
      await db.insert(businessTable).values(business);
    },
    async getBusinessById(id: string) {
      const business = await db
        .select()
        .from(businessTable)
        .where(eq(businessTable.id, id));

      return business[0];
    },
    async createIndex(accessibilityIndex: AccessibilityDataWithId) {
      const currentAccessibilityIndex = await db
        .select()
        .from(accessibilityIndexTable)
        .where(
          eq(accessibilityIndexTable.businessId, accessibilityIndex.businessId)
        );

      if (currentAccessibilityIndex.length === 0) {
        await db.insert(accessibilityIndexTable).values(accessibilityIndex);
      } else {
        await db
          .update(accessibilityIndexTable)
          .set({
            ramp: accessibilityIndex.ramp,
            doors: accessibilityIndex.doors,
            parking: accessibilityIndex.parking,
            dimension: accessibilityIndex.dimension,
            grabRails: accessibilityIndex.grabRails,
            emergencyButton: accessibilityIndex.emergencyButton,
            showerBed: accessibilityIndex.showerBed,
            ceilingLift: accessibilityIndex.ceilingLift,
            space: accessibilityIndex.space,
            restroomAccess: accessibilityIndex.restroomAccess,
            insideStairs: accessibilityIndex.insideStairs,
            tables: accessibilityIndex.tables,
            dog: accessibilityIndex.dog,
            score: accessibilityIndex.score,
          })
          .where(
            eq(
              accessibilityIndexTable.businessId,
              accessibilityIndex.businessId
            )
          );
      }
    },
    async getAccessibilityIndexById(businessId: string) {
      const accessibilityIndex = await db
        .select()
        .from(accessibilityIndexTable)
        .where(eq(accessibilityIndexTable.businessId, businessId));

      return accessibilityIndex[0];
    },
  };
}

export type Repository = ReturnType<typeof createBusinessRepository>;
