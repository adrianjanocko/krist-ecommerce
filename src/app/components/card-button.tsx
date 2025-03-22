import Button from "@/components/button";

export default function CardButton({
  text,
  href,
}: {
  text: string;
  href?: string;
}) {
  return (
    <Button
      href={href}
      className="self-end bg-white text-black text-center font-medium hover:bg-gray-300"
    >
      {text}
    </Button>
  );
}
