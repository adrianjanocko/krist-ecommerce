"use server";

import { loginSchema, registerSchema } from "@/util/schemas";
import { revalidatePath } from "next/cache";
import { Category, LoginData, RegisterData } from "../util/types";
import { createClient } from "./supabase/server";

/////////////
// SUPABASE

export async function registerUser(formData: RegisterData) {
  const validate = registerSchema.safeParse(formData);

  if (!validate.success)
    return { success: false, message: "Form must be valid" };

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email: validate.data.email,
    password: validate.data.password,
    options: {
      data: {
        first_name: validate.data.firstName,
        last_name: validate.data.lastName,
      },
    },
  });

  if (error) {
    console.error(error);

    return { success: false, message: "Registration failed" };
  }

  revalidatePath("/");

  return { success: true, message: "Registration successful" };
}

export async function loginUser(formData: LoginData) {
  const validate = loginSchema.safeParse(formData);

  if (!validate.success)
    return { success: false, message: "Form must be valid" };

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: validate.data.email,
    password: validate.data.password,
  });

  if (error) {
    console.error(error);

    return { success: false, message: "Login failed" };
  }

  revalidatePath("/");

  return { success: true, message: "Login successful" };
}

export async function logoutUser() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);

    return { success: false, message: "Logout failed" };
  }

  revalidatePath("/");

  return { success: true, message: "Logout successful" };
}

/////////////
// SUPABASE - GET
export async function getCategories(): Promise<Category[]> {
  const supabase = await createClient();

  const { data: categories, error } = await supabase
    .from("categories")
    .select("*");

  if (error) {
    console.error(error);

    throw new Error("Failed to fetch categories.");
  }

  return categories;
}
