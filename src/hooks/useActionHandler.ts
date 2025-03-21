import { ResponseMessage } from "@/util/types";
import { redirect } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";

export default function useActionHandler() {
  const [isPending, startTransition] = useTransition();

  async function processAction(
    promise: Promise<ResponseMessage>,
    onSuccess?: (() => void) | string
  ) {
    startTransition(async () => {
      await handleResponseMessage(promise, () => {
        if (typeof onSuccess === "string") {
          redirect(onSuccess);
        } else if (typeof onSuccess === "function") {
          onSuccess();
        }
      });
    });
  }

  return { isPending, processAction };
}

async function handleResponseMessage(
  promise: Promise<ResponseMessage>,
  onSuccess?: () => void
): Promise<void> {
  const response = await promise;

  if (response.success) {
    if (onSuccess) onSuccess();

    toast.success(response.message);
  } else toast.error(response.message);
}
