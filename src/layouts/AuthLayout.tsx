import { Outlet } from "react-router-dom";

export function AuthLayout() {
    return (
        <main className="min-h-screen bg-[#f7f3ff]">
            <Outlet />
        </main>
    );
}