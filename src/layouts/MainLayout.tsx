import { Outlet, useLocation } from "react-router-dom";

import { Header } from "@/components/common/Header";

export function MainLayout() {
    const location = useLocation();

    const isHomePage = location.pathname === "/";

    return (
        <div
            className={`
                flex
                min-h-dvh
                flex-col
                bg-white
                ${isHomePage ? "h-dvh overflow-hidden" : ""}
            `}
        >
            <Header />

            <main
                className={`
                    min-h-0
                    flex-1
                    ${isHomePage ? "overflow-hidden" : ""}
                `}
            >
                <Outlet />
            </main>
        </div>
    );
}