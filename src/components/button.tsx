import Link from "next/link";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm";
  variant?: "black";
  href?: string;
  icon?: ReactNode;
}

function Button({
  size,
  variant = "black",
  children,
  className,
  href,
  icon,
  ...props
}: ButtonProps) {
  const classes = twMerge(
    "w-full px-6 py-3 text-white rounded-md hover:bg-gray-600 duration-300 disabled:bg-grey",
    size === "sm" && "py-2 px-6",
    variant === "black" && "bg-black",
    icon && "flex items-center gap-4",
    className
  );

  return href ? (
    <Link href={href} className={classes}>
      {children}
      {icon && <span className="size-5">{icon}</span>}
    </Link>
  ) : (
    <button className={classes} {...props}>
      {children}
      {icon && icon}
    </button>
  );
}

export default Button;
