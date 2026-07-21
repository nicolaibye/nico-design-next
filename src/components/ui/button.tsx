import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define the base styles (shared by all button variants).
// We remove the global 'p-4' and 'border-transparent' here.
const baseClasses = 
  "group/button inline-flex shrink-0 items-center justify-center " +
  "rounded-lg border bg-clip-padding text-sm font-medium whitespace-nowrap " +
  "transition-all outline-none select-none " +
  "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 " +
  "active:not-aria-[haspopup]:translate-y-px " +
  "disabled:pointer-events-none disabled:opacity-50 " +
  "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 " +
  "dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 " +
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4";

const buttonVariants = cva(
  baseClasses,
  {
    variants: {
      variant: {
        // **Overwriting the default variant** (if we want every default button to use the CTA style):
        default:
          "border-black-Mirage dark:border-white-LinkWater bg-transparent " +
          "text-black-Mirage dark:text-white-LinkWater " +
          "hover:bg-black-Mirage hover:text-white-LinkWater " +
          "dark:hover:bg-white-LinkWater dark:hover:text-black-Mirage " +
          "uppercase font-lexend",
        outline: 
          // original outline style remains untouched
          "border-black-Mirage border-1 bg-white-LinkWater hover:bg-black-Mirage/15 aria-expanded:bg-muted aria-expanded:text-foreground dark:border-white-LinkWater dark:bg-white-LinkWater/10 dark:hover:bg-white-LinkWater/20",
        secondary: 
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: 
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive: 
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: 
          "text-primary underline-offset-4 hover:underline",
        // **New 'cta' variant** (alternative to changing default):
        cta: 
          "border-black-Mirage dark:border-white-LinkWater bg-transparent " +
          "text-black-Mirage dark:text-white-LinkWater " +
          "hover:bg-black-Mirage hover:text-white-LinkWater " +
          "dark:hover:bg-white-LinkWater dark:hover:text-black-Mirage " +
          "uppercase font-lexend",
      },
      size: {
        // Move padding into the default size:
        default: 
          "py-2 px-4 gap-1.5",     // matches the anchor's py-2 px-4
        xs: 
          "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: 
          "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: 
          "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: 
          "size-8",
        "icon-xs": 
          "size-6 rounded-[min(var(--radius-md),10px)] [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": 
          "size-7 rounded-[min(var(--radius-md),12px)]",
        "icon-lg": 
          "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = ButtonPrimitive.Props & VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

Button.displayName = "Button";