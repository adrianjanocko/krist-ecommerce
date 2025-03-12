import Link from "next/link";
import React, { ReactNode, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

// Base button properties
interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "icon";
  variant?: "black";
  icon?: ReactNode;
}

// Type for link props excluding button-specific attributes
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string; // Allow custom class name
}

interface ButtonProps extends BaseButtonProps {
  href?: string; // Optional href
}

// Use forwardRef to allow ref forwarding
const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  (
    { size, variant = "black", children, className, href, icon, ...props },
    ref
  ) => {
    // Build Tailwind CSS classes
    const classes = twMerge(
      "w-full px-6 py-3 text-white rounded-md hover:bg-gray-600 duration-300 disabled:bg-grey",
      size === "sm" && "py-2 px-6",
      size === "icon" && "p-3",
      variant === "black" && "bg-black",
      icon && "flex items-center gap-4",
      className
    );

    // When rendering as a link
    if (href) {
      return (
        <Link href={href} className={classes} {...(props as LinkProps)}>
          <span ref={ref as React.Ref<HTMLSpanElement>}>{children}</span>
          {icon && <span className="size-5">{icon}</span>}
        </Link>
      );
    }

    // When rendering as a button
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...props}
      >
        {children}
        {icon && <span className="size-5">{icon}</span>}
      </button>
    );
  }
);

// Set a display name for better debugging
Button.displayName = "Button";

export default Button;
