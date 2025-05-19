import { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

// Define base styles and variants using cva
const classes = cva("border h-12 rounded-full px-6 font-medium", {
  variants: {
    variant: {
      primary: "bg-[#D3D3D3] text-neutral-950 border-[#D3D3D3]",
      secondary: "border-white/10 text-white bg-transparent",
    },
    size: {
      sm: "h-10",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

// Define props interface with variant support
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof classes>;

export default function Button({
  variant,
  size,
  className,
  ...otherProps
}: ButtonProps) {
  return (
    <button
      className={classes({ variant, size, className })}
      {...otherProps}
    />
  );
}
