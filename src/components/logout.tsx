"use client";

import useActionHandler from "@/hooks/use-action-handler";
import { logoutUser } from "@/lib/actions";
import SubmitButton from "./submit-button";

export default function Logout() {
  const { isPending, processAction } = useActionHandler();

  function handleLogout() {
    processAction(logoutUser(), "/");
  }

  return (
    <SubmitButton size="sm" disabled={isPending} onClick={handleLogout}>
      Logout
    </SubmitButton>
  );
}
