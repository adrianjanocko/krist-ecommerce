import Button from "@/components/button";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <h1 className="font-medium text-xl">This page could not be found. 😭</h1>
      <Button className="max-w-fit" href="/" icon={<ArrowUturnLeftIcon />}>
        Go back
      </Button>
    </div>
  );
}
