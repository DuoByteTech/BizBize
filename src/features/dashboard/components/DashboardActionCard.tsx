import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type DashboardActionCardProps = {
    title: string;
    description: string;
    to: string;
    icon: ReactNode;
    iconClassName?: string;
};

export function DashboardActionCard({
    title,
    description,
    to,
    icon,
    iconClassName = "",
}: DashboardActionCardProps) {
    return (
        <Link
            to={to}
            className="group flex min-h-[230px] flex-col rounded-[24px] border border-[#eee8f5] bg-white p-6 shadow-[0_14px_35px_rgba(74,55,104,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(74,55,104,0.09)]"
        >
            <div
                className={`flex h-16 w-16 items-center justify-center rounded-[20px] ${iconClassName}`}
            >
                {icon}
            </div>

            <h3 className="mt-5 text-[20px] font-extrabold tracking-[-0.02em] text-heading">
                {title}
            </h3>

            <p className="mt-2 max-w-[220px] text-[14px] leading-6 text-[#8a8296]">
                {description}
            </p>

            <div className="mt-auto flex justify-end pt-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full text-[#4f4861] transition group-hover:bg-primary/10 group-hover:text-primary">
                    <ArrowRight size={20} />
                </span>
            </div>
        </Link>
    );
}