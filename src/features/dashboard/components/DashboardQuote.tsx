import { Heart } from "lucide-react";

export function DashboardQuote() {
    return (
        <div className="flex min-h-[84px] items-center gap-4 rounded-[22px] bg-gradient-to-r from-[#fff4fb] to-[#f7f0ff] px-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                <Heart
                    size={20}
                    fill="#e35c9a"
                    className="text-[#e35c9a]"
                />
            </span>

            <p className="text-[15px] font-semibold italic text-[#8a6eb1]">
                “Küçük sorular, büyük anlamlar yaratır.”
            </p>
        </div>
    );
}