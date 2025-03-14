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

export type LoginData = z.infer<typeof loginSchema>;
export type RegisterData = z.infer<typeof registerSchema>;
