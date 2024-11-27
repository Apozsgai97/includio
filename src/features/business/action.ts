"use server";

import { revalidatePath } from "next/cache";
import { businessFeature } from "./instance";
import { redirect } from "next/navigation";

export type AccessibilityData = {
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

export async function addBusiness(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const category = formData.get("category") as string;
  const address = formData.get("address") as string;
  const email = formData.get("email") as string;
  const telephone = formData.get("telephone") as string;

 await businessFeature.service.addBusiness(name, description, category, address, email, telephone )

  revalidatePath("/businesses");
  redirect("/businesses");
}

export async function createAccessibilityIndex(formData: FormData) {
  const businessId = formData.get("businessId") as string;
  const ramp = formData.get("ramp") as string;
  const doors = formData.get("doors") as string;
  const parking = formData.get("parking") as string;
  const dimension = formData.get("dimension") as string;
  const grabRails = formData.get("grab-rails") as string;
  const emergencyButton = formData.get("emergency-button") as string;
  const showerBed = formData.get("shower-bed") as string;
  const ceilingLift = formData.get("ceiling-lift") as string;
  const space = formData.get("space") as string;
  const restroomAccess = formData.get("restroom-access") as string;
  const insideStairs = formData.get("inside-stairs") as string;
  const tables = formData.get("tables") as string;
  const dog = formData.get("dog") as string;

  const accessibilityData: AccessibilityData = {
    ramp,
    doors,
    parking,
    dimension,
    grabRails,
    emergencyButton,
    showerBed,
    ceilingLift,
    space,
    restroomAccess,
    insideStairs,
    tables,
    dog,
  };

  await businessFeature.service.createAccessibilityIndex(accessibilityData, businessId)

  revalidatePath(`/businesses/${businessId}`);
  redirect(`/businesses/${businessId}`);
}
