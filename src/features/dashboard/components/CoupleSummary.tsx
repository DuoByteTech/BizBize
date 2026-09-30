import { Heart } from "lucide-react";

export function CoupleSummary() {
    return (
        <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#f4e8f7] bg-[#f9dfe8] text-xl shadow-sm">
                👩🏻
            </div>

            <Heart
                size={22}
                fill="#ef5f87"
                className="text-[#ef5f87]"
            />

            <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#f4e8f7] bg-[#ead7f6] text-xl shadow-sm">
                👨🏻
            </div>

            <div className="ml-2 hidden -rotate-3 rounded-[18px] bg-gradient-to-br from-[#a06bea] to-[#7851d9] px-5 py-3 text-center text-[13px] font-semibold leading-5 text-white shadow-lg sm:block">
                Birlikte
                <br />
                daha güzel ♡
            </div>
        </div>
    );
}