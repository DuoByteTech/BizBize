import type { ElementType, ReactNode } from "react";

type AppTextVariant =
    | "hero"
    | "sectionTitle"
    | "body"
    | "small";

type AppTextProps = {
    children: ReactNode;
    variant?: AppTextVariant;
    as?: ElementType;
    className?: string;
};

const variantClasses: Record<AppTextVariant, string> = {
    hero:
        "text-5xl font-extrabold leading-[1.05] tracking-tight text-heading sm:text-6xl lg:text-7xl",

    sectionTitle:
        "text-3xl font-bold tracking-tight text-heading",

    body:
        "text-base leading-7 text-body sm:text-lg",

    small:
        "text-sm leading-6 text-body",
};

export function AppText({
    children,
    variant = "body",
    as: Component = "p",
    className = "",
}: AppTextProps) {
    return (
        <Component className={`${variantClasses[variant]} ${className}`}>
            {children}
        </Component>
    );
}