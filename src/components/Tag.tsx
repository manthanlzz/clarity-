import { HTMLAttributes, HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...otherProps} = props;
  return(
    <div className={twMerge("inline-flex border border-[#D3D3D3] gap-2 text-[#D3D3D3] px-3 py-1 rounded full uppercase items-center",className)} {...otherProps}>
      <span>&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  )
}