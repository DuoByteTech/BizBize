import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";

type AppLinkVariant =
    | "default"
    | "nav"
    | "primaryButton";

type AppLinkProps = {
    to: string;
    children: ReactNode;
    variant?: AppLinkVariant;
    className?: string;
};

const variantClasses: Record<AppLinkVariant, string> = {
    default:
        "text-heading transition hover:text-primary",

    nav:
        "text-sm font-medium text-heading/70 transition hover:text-primary",

    primaryButton:
        "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition hover:bg-primary-hover",
};

export function AppLink({
    to,
    children,
    variant = "default",
    className = "",
}: AppLinkProps) {
    if (variant === "nav") {
        return (
            <NavLink
                to={to}
                className={({ isActive }) =>
                    `${variantClasses.nav} ${isActive ? "text-primary" : ""
                    } ${className}`
                }
            >
                {children}
            </NavLink>
        );
    }

    return (
        <Link
            to={to}
            className={`${variantClasses[variant]} ${className}`}
        >
            {children}
        </Link>
    );
}