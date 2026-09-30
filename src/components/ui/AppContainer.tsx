import type { ReactNode } from "react";

type AppContainerProps = {
    children: ReactNode;
    className?: string;
};

export function AppContainer({
    children,
    className = "",
}: AppContainerProps) {
    return (
        <div
            className={`
                mx-auto
                w-full
                max-w-[1600px]
                px-6
                sm:px-8
                lg:px-10
                xl:px-12
                ${className}
            `}
        >
            {children}
        </div>
    );
}