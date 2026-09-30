import { Outlet } from "react-router-dom";

import { DashboardHeader } from "@/components/common/DashboardHeader";

export function DashboardLayout() {
    return (
        <div className="min-h-screen bg-[#fbf8ff]">
            <DashboardHeader />

            <main>
                <Outlet />
            </main>
        </div>
    );
}