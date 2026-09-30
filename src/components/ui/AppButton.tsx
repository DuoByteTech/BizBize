import type { ButtonHTMLAttributes, ReactNode } from "react";

type AppButtonVariant =
    | "primary"
    | "outline";

type AppButtonProps = {
    children: ReactNode;
    variant?: AppButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<AppButtonVariant, string> = {
    primary:
        "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-hover",

    outline:
        "border border-primary/20 bg-white text-primary hover:bg-primary/5",
};

export function AppButton({
    children,
    variant = "primary",
    className = "",
    ...props
}: AppButtonProps) {
    return (
        <button
            className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        px-6
        py-3
        text-sm
        font-semibold
        transition
        ${variantClasses[variant]}
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
}