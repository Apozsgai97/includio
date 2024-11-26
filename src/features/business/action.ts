"use server";

import { revalidatePath } from "next/cache";
import { businessFeature } from "./instance";
import { redirect } from "next/navigation";

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
