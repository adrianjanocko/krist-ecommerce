import { ReactNode } from "react";
import { z } from "zod";
import { loginSchema, registerSchema } from "./schemas";

export type ResponseMessage = {
  success: boolean;
  message: string;
};

export interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export interface Category {
  id: number;
  name: string;
  image_url: string;
}

export interface Review {
  id: number;
  stars: number;
  review: string;
  image_url: string;
  name: string;
  role: string;
}

export type LoginData = z.infer<typeof loginSchema>;
export type RegisterData = z.infer<typeof registerSchema>;
