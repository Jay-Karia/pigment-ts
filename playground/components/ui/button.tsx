import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary hover:bg-slate-800 hover:cursor-pointer",
        glow: "relative overflow-hidden bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500  text-zinc-900 font-semibold hover:scale-[1.02] active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000 ",
        retro:
          "bg-yellow-400 text-black border-b-4 border-yellow-600 hover:border-b-0 hover:translate-y-1 active:bg-yellow-500 transition-all",
        retro2:
          "bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all",
        retro3:
          "bg-[#e0e0e0] text-black border border-gray-950 shadow-[inset_-2px_-2px_0px_0px_rgba(0,0,0,1),inset_2px_2px_0px_0px_rgba(255,255,255,1)] active:shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,1),inset_-2px_-2px_0px_0px_rgba(255,255,255,1)] transition-all",
        retroPixel:
          "bg-yellow-400 text-black border-2 border-black [image-rendering:pixelated] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 transition-all uppercase tracking-wide font-bold",
        retroNav:
          "bg-transparent  text-white/80 border border-white/20 shadow-[1px_1px_0px_0px_rgba(255,255,255,0.1)] hover:text-white hover:border-white/40 hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-[-1px] hover:translate-y-[-1px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all duration-200 backdrop-blur-sm uppercase tracking-wide text-xs font-medium",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
