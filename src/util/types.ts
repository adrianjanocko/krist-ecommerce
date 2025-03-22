import { ReactNode } from "react";
import { z } from "zod";
import { loginSchema, registerSchema } from "./schemas";

/////////////
// TYPES

export type ResponseMessage = {
  success: boolean;
  message: string;
};

export type LoginData = z.infer<typeof loginSchema>;
export type RegisterData = z.infer<typeof registerSchema>;

/////////////
// INTERFACES

export interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Review {
  id: number;
  stars: number;
  review: string;
  image_url: string;
  name: string;
  role: string;
}

export interface Product {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  reviews?: number;
  categorySubId: number;
  colors?: string[] | null;
  sizes?: string[] | null;
  inStock: number;
  createdAt?: Date;
  updatedAt?: Date;
  sold?: number;
  isBestseller?: boolean;
  slug: string;
}
