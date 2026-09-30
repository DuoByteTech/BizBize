import {
    Heart,
    HeartHandshake,
    MessageCircleHeart,
    RefreshCw,
    Sparkles,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { AppContainer } from "@/components/ui/AppContainer";

export function GameResultPage() {
    const navigate = useNavigate();

    return (
        <section
            className="
                relative
                min-h-[calc(100vh-74px)]
                overflow-hidden
                bg-[radial-gradient(circle_at_top,#ffffff_0%,#fcf9ff_50%,#f7f1fc_100%)]
                py-8
                sm:py-10
            "
        >
            {/* Sol arka plan ışığı */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -left-36
                    top-24
                    h-[350px]
                    w-[350px]
                    rounded-full
                    bg-purple-200/20
                    blur-[110px]
                "
            />

            {/* Sağ arka plan ışığı */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -right-32
                    bottom-0
                    h-[380px]
                    w-[380px]
                    rounded-full
                    bg-pink-200/20
                    blur-[110px]
                "
            />

            <AppContainer className="relative">
                <div className="mx-auto max-w-[1050px]">
                    {/* Başlık */}
                    <div className="relative text-center">
                        <h1
                            className="
                                text-[27px]
                                font-extrabold
                                tracking-[-0.035em]
                                text-[#30264a]
                                sm:text-[31px]
                            "
                        >
                            Oyun Sonucu
                        </h1>

                        <p
                            className="
                                mt-2
                                text-[14px]
                                font-medium
                                text-[#827a90]
                            "
                        >
                            Bu turu tamamladınız! İşte sonuçlarınız.
                        </p>
                    </div>

                    {/* Çift */}
                    <div
                        className="
                            mt-7
                            flex
                            items-center
                            justify-center
                            gap-5
                            sm:gap-7
                        "
                    >
                        {/* Kadın avatar */}
                        <div
                            className="
                                flex
                                h-[92px]
                                w-[92px]
                                items-center
                                justify-center
                                overflow-hidden
                                rounded-full
                                border-[5px]
                                border-[#efe8e1]
                                bg-[#f3ddd0]
                                shadow-[0_8px_25px_rgba(57,41,78,0.08)]
                            "
                        >
                            <span className="text-[54px] leading-none">
                                👩🏻
                            </span>
                        </div>

                        <Heart
                            size={38}
                            fill="currentColor"
                            strokeWidth={1.5}
                            className="text-[#e54568]"
                        />

                        {/* Erkek avatar */}
                        <div
                            className="
                                flex
                                h-[92px]
                                w-[92px]
                                items-center
                                justify-center
                                overflow-hidden
                                rounded-full
                                border-[5px]
                                border-[#ece5df]
                                bg-[#eadfd7]
                                shadow-[0_8px_25px_rgba(57,41,78,0.08)]
                            "
                        >
                            <span className="text-[54px] leading-none">
                                👨🏻
                            </span>
                        </div>
                    </div>

                    {/* Sol dekor */}
                    <div
                        aria-hidden="true"
                        className="
                            absolute
                            left-4
                            top-24
                            hidden
                            text-[#8565dd]
                            lg:block
                        "
                    >
                        <Sparkles
                            size={34}
                            strokeWidth={1.8}
                            className="-rotate-12"
                        />

                        <div className="mt-2 flex gap-2">
                            <span className="block h-7 w-[2px] rotate-[-38deg] rounded-full bg-[#8565dd]" />
                            <span className="block h-5 w-[2px] rotate-[-12deg] rounded-full bg-[#8565dd]" />
                            <span className="block h-6 w-[2px] rotate-[25deg] rounded-full bg-[#8565dd]" />
                        </div>
                    </div>

                    {/* Sağ dekoratif not */}
                    <div
                        className="
                            absolute
                            right-1
                            top-20
                            hidden
                            w-[150px]
                            rotate-[5deg]
                            text-center
                            lg:block
                        "
                    >
                        <p
                            className="
                                font-['Comic_Sans_MS',cursive]
                                text-[17px]
                                font-semibold
                                leading-[1.35]
                                text-[#d25389]
                            "
                        >
                            Farklı
                            <br />
                            cevaplar,
                            <br />
                            yeni
                            <br />
                            sohbetler
                        </p>

                        <Heart
                            size={20}
                            strokeWidth={2}
                            className="mx-auto mt-2 text-[#d25389]"
                        />
                    </div>

                    {/* Sonuç kartları */}
                    <div
                        className="
                            mx-auto
                            mt-7
                            grid
                            max-w-[1000px]
                            grid-cols-1
                            gap-5
                            md:grid-cols-3
                        "
                    >
                        {/* Aynı cevap */}
                        <div
                            className="
                                flex
                                min-h-[185px]
                                flex-col
                                items-center
                                justify-center
                                rounded-[18px]
                                border
                                border-white/70
                                bg-[linear-gradient(135deg,#ecf9f7_0%,#dff3ef_100%)]
                                px-6
                                text-center
                                shadow-[0_8px_28px_rgba(68,54,88,0.04)]
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                "
                            >
                                <HeartHandshake
                                    size={33}
                                    strokeWidth={2.1}
                                    className="text-[#319b94]"
                                />

                                <span
                                    className="
                                        text-[27px]
                                        font-extrabold
                                        text-[#2f2946]
                                    "
                                >
                                    12
                                </span>
                            </div>

                            <h2
                                className="
                                    mt-3
                                    text-[15px]
                                    font-extrabold
                                    text-[#3f3852]
                                "
                            >
                                Aynı Cevap
                            </h2>

                            <p
                                className="
                                    mt-5
                                    text-[13px]
                                    font-medium
                                    text-[#82798e]
                                "
                            >
                                Ne kadar da uyumlusunuz!
                            </p>

                            <Heart
                                size={16}
                                strokeWidth={1.8}
                                className="mt-2 text-[#65aaa6]"
                            />
                        </div>

                        {/* Farklı cevap */}
                        <div
                            className="
                                flex
                                min-h-[185px]
                                flex-col
                                items-center
                                justify-center
                                rounded-[18px]
                                border
                                border-white/70
                                bg-[linear-gradient(135deg,#fff8e8_0%,#ffefcf_100%)]
                                px-6
                                text-center
                                shadow-[0_8px_28px_rgba(68,54,88,0.04)]
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                "
                            >
                                <MessageCircleHeart
                                    size={31}
                                    strokeWidth={2}
                                    className="text-[#e4a229]"
                                />

                                <span
                                    className="
                                        text-[27px]
                                        font-extrabold
                                        text-[#2f2946]
                                    "
                                >
                                    5
                                </span>
                            </div>

                            <h2
                                className="
                                    mt-3
                                    text-[15px]
                                    font-extrabold
                                    text-[#3f3852]
                                "
                            >
                                Farklı Cevap
                            </h2>

                            <p
                                className="
                                    mt-5
                                    max-w-[190px]
                                    text-[13px]
                                    font-medium
                                    leading-5
                                    text-[#82798e]
                                "
                            >
                                Farklılıklar da güzel sohbetler başlatır.
                            </p>
                        </div>

                        {/* Genel uyum */}
                        <div
                            className="
                                flex
                                min-h-[185px]
                                flex-col
                                items-center
                                justify-center
                                rounded-[18px]
                                border
                                border-white/70
                                bg-[linear-gradient(135deg,#f2edff_0%,#e8e0ff_100%)]
                                px-6
                                text-center
                                shadow-[0_8px_28px_rgba(68,54,88,0.04)]
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                "
                            >
                                <Heart
                                    size={34}
                                    fill="currentColor"
                                    strokeWidth={1.5}
                                    className="text-[#7048dd]"
                                />

                                <span
                                    className="
                                        text-[27px]
                                        font-extrabold
                                        text-[#2f2946]
                                    "
                                >
                                    %71
                                </span>
                            </div>

                            <h2
                                className="
                                    mt-3
                                    text-[15px]
                                    font-extrabold
                                    text-[#6044b5]
                                "
                            >
                                Genel Uyum
                            </h2>

                            <p
                                className="
                                    mt-5
                                    text-[13px]
                                    font-medium
                                    text-[#82798e]
                                "
                            >
                                Harika gidiyorsunuz!
                            </p>

                            <Heart
                                size={16}
                                strokeWidth={1.8}
                                className="mt-2 text-[#886be0]"
                            />
                        </div>
                    </div>

                    {/* Butonlar */}
                    <div
                        className="
                            mt-9
                            flex
                            flex-col
                            items-center
                            justify-center
                            gap-4
                            sm:flex-row
                        "
                    >
                        <button
                            type="button"
                            onClick={() =>
                                navigate(
                                    "/oyunlar/birbirimizi-taniyalim",
                                )
                            }
                            className="
                                inline-flex
                                h-[52px]
                                min-w-[220px]
                                items-center
                                justify-center
                                gap-2
                                rounded-[12px]
                                bg-gradient-to-r
                                from-[#754fe8]
                                to-[#6840df]
                                px-7
                                text-[14px]
                                font-bold
                                text-white
                                shadow-[0_8px_20px_rgba(109,74,255,0.24)]
                                transition
                                duration-200
                                hover:-translate-y-0.5
                                hover:shadow-[0_11px_26px_rgba(109,74,255,0.30)]
                            "
                        >
                            <RefreshCw
                                size={16}
                                strokeWidth={2.2}
                            />

                            Tekrar Oyna
                        </button>

                        <button
                            type="button"
                            onClick={() => navigate("/oyunlar")}
                            className="
                                inline-flex
                                h-[52px]
                                min-w-[220px]
                                items-center
                                justify-center
                                rounded-[12px]
                                border
                                border-[#ded8e8]
                                bg-white
                                px-7
                                text-[14px]
                                font-bold
                                text-[#655d73]
                                shadow-sm
                                transition
                                hover:border-primary/30
                                hover:text-primary
                            "
                        >
                            Kategorilere Dön
                        </button>
                    </div>

                    {/* Mobil dekoratif not */}
                    <div
                        className="
                            mx-auto
                            mt-8
                            max-w-[280px]
                            rotate-[1deg]
                            text-center
                            lg:hidden
                        "
                    >
                        <p
                            className="
                                font-['Comic_Sans_MS',cursive]
                                text-[15px]
                                text-[#d25389]
                            "
                        >
                            Farklı cevaplar, yeni sohbetler ♡
                        </p>
                    </div>
                </div>
            </AppContainer>
        </section>
    );
}