export type Business = {
  id: string;
  name: string;
  description: string;
  address: string;
  contact: {
    mobile: string;
    email: string;
  };
  category: string;
  image: string;
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
};

const businesses: Business[] = [
  {
    id: "a3f1d2c7-8b6e-45c3-b82d-1f1f1e1f1f1f",
    name: "Harmony Bites",
    description:
      "A contemporary dining destination blending global flavors with a touch of innovation. From expertly crafted appetizers to indulgent desserts, every dish is a celebration of taste and creativity. Perfect for casual dinners or special occasions.",
    address: "Storgatan 12, 114 51 Stockholm, Sweden",
    contact: {
      mobile: "+46 8 123 4567",
      email: "contact@harmonybites.se",
    },
    category: "Restaurants and Cafes",
    image: "/restaurant1.png",
  },
  {
    id: "b4e2c3d4-9c6f-46d4-a82e-2f2f2e2f2e2e",
    name: "Cozy Bean",
    description:
      "A delightful cafe where the aroma of freshly brewed coffee greets you at the door. Known for its rich espresso, flaky pastries, and cozy atmosphere, it’s the ideal spot for a quiet morning or catching up with friends over lattes.",
    address: "Kaffevägen 8, 111 22 Stockholm, Sweden",
    contact: {
      mobile: "+46 8 987 6543",
      email: "hello@cozybean.se",
    },
    category: "Restaurants and Cafes",
    image: "/cafe1.jpg",
  },
  {
    id: "c5f3d4e5-0d7a-47e5-b92f-3f3f3e3f3e3e",
    name: "The Green Fork",
    description:
      "A vibrant eatery focused on farm-to-table dining, offering fresh, organic ingredients in every dish. Enjoy a menu filled with healthy yet flavorful options in a relaxed, stylish environment.",
    address: "Gröna Gatan 20, 118 60 Stockholm, Sweden",
    contact: {
      mobile: "+46 8 654 3210",
      email: "info@thegreenfork.se",
    },
    category: "Restaurants and Cafes",
    image: "/restaurant2.jpg",
  },
];

const accessibilityIndexes: AccessibilityIndex[] = [
  {
    id: "c9d4a143-1cf3-4ef8-b91d-61b12b4e2290",
    businessId: "a3f1d2c7-8b6e-45c3-b82d-1f1f1e1f1f1f",
    ramp: "yes",
    doors: "no",
    parking: "yes",
    dimension: "no",
    grabRails: "yes",
    emergencyButton: "no",
    showerBed: "yes",
    ceilingLift: "no",
    space: "yes",
    restroomAccess: "no",
    insideStairs: "yes",
    tables: "yes",
    dog: "no",
  },
  {
    id: "927f7f67-8bc4-404c-b7d8-7e10cfb8db8e",
    businessId: "b4e2c3d4-9c6f-46d4-a82e-2f2f2e2f2e2e",
    ramp: "no",
    doors: "yes",
    parking: "no",
    dimension: "yes",
    grabRails: "no",
    emergencyButton: "yes",
    showerBed: "no",
    ceilingLift: "yes",
    space: "no",
    restroomAccess: "yes",
    insideStairs: "no",
    tables: "no",
    dog: "yes",
  },
  {
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    businessId: "c5f3d4e5-0d7a-47e5-b92f-3f3f3e3f3e3e",
    ramp: "yes",
    doors: "yes",
    parking: "yes",
    dimension: "yes",
    grabRails: "yes",
    emergencyButton: "yes",
    showerBed: "no",
    ceilingLift: "no",
    space: "yes",
    restroomAccess: "yes",
    insideStairs: "no",
    tables: "yes",
    dog: "yes",
  },
];

export function createBusinessRepository() {
  return {
    async getAllBusinesses() {
      return businesses;
    },
    async addBusiness(business: Business) {
      businesses.push(business);
    },
    async getBusinessById(id: string) {
      const business = businesses.find((business) => id === business.id);
      return business!;
    },
    async createIndex(accessibilityIndex: AccessibilityIndex) {
      const currentAccessibilityIndex = accessibilityIndexes.find(
        (currentAccessibilityIndex) =>
          accessibilityIndex.businessId === currentAccessibilityIndex.businessId
      );

      if (!currentAccessibilityIndex) {
        accessibilityIndexes.push(accessibilityIndex);
      } else {
        const index = accessibilityIndexes.findIndex(
          (currentAccessibilityIndex) =>
            accessibilityIndex.businessId === currentAccessibilityIndex.businessId
        );
        accessibilityIndexes[index] = accessibilityIndex;
      }
      console.log(accessibilityIndexes);
    },
    async getAccessibilityIndexById(businessId: string) {
      const accessibilityIndex: AccessibilityIndex | undefined =
        accessibilityIndexes.find(
          (accessibilityIndex) => accessibilityIndex.businessId === businessId
        );

      return accessibilityIndex;
    },
  };
}

export type Repository = ReturnType<typeof createBusinessRepository>;
