"use client";

import ErrorMessage from "@/components/error-message";
import Input from "@/components/input";
import SubmitButton from "@/components/submit-button";
import useActionHandler from "@/hooks/use-action-handler";
import { registerUser } from "@/lib/actions";
import { registerSchema } from "@/util/schemas";
import { RegisterData } from "@/util/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import AuthLayout from "../components/auth-layout";

const inputConfig: Array<{
  id: keyof RegisterData;
  label: string;
  type: string;
  placeholder: string;
}> = [
  {
    id: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Robert",
  },
  {
    id: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Fox",
  },
  {
    id: "email",
    label: "Email Address",
    type: "text",
    placeholder: "robertfox@example.com",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Password",
  },
];

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });
  const { isPending, processAction } = useActionHandler();

  function onSubmit(data: RegisterData) {
    processAction(registerUser(data), "/");
  }

  return (
    <AuthLayout
      heading="Create New Account"
      subheading="Please enter details"
      onSubmit={handleSubmit(onSubmit)}
    >
      {inputConfig.map(({ id, label, type, placeholder }) => (
        <Input
          key={id}
          id={id}
          label={label}
          type={type}
          placeholder={placeholder}
          {...register(id)}
          error={errors[id]}
          disabled={isPending}
        />
      ))}

      <div className="grid gap-1 mb-4">
        <div className="flex items-center gap-2">
          <Input
            id="terms"
            type="checkbox"
            {...register("acceptTerms")}
            disabled={isPending}
          />
          <label htmlFor="terms">
            I agree to the{" "}
            <Link href="/terms-and-conditions" className="font-bold">
              Terms & Conditions
            </Link>
          </label>
        </div>

        <ErrorMessage error={errors.acceptTerms} />
      </div>

      <SubmitButton disabled={isPending}>Signup</SubmitButton>
    </AuthLayout>
  );
}
