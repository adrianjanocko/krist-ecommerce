import { FieldError } from "react-hook-form";

export default function ErrorMessage({ error }: { error?: FieldError }) {
  if (!error || !error.message) return null;

  return <p className="text-red-500 text-sm mt-1">{error.message}</p>;
}
