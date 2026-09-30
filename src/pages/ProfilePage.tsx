import {
    Clock3,
    Copy,
    Heart,
    HeartHandshake,
    LogOut,
    RefreshCw,
    Settings,
    UserRound,
} from "lucide-react";

import { useState } from "react";

import { AppContainer } from "@/components/ui/AppContainer";

const profileMenu = [
    {
        label: "Profilim",
        icon: UserRound,
    },
    {
        label: "Çiftimiz",
        icon: HeartHandshake,
    },
    {
        label: "Oyun Geçmişi",
        icon: Clock3,
    },
    {
        label: "Favori Sorularım",
        icon: Heart,
    },
    {
        label: "Ayarlar",
        icon: Settings,
    },
] as const;

export function ProfilePage() {
    const [inviteCode, setInviteCode] = useState("A7K3L9");
    const [copied, setCopied] = useState(false);

    const copyInviteCode = async () => {
        try {
            await navigator.clipboard.writeText(inviteCode);

            setCopied(true);

            window.setTimeout(() => {
                setCopied(false);
            }, 1600);
        } catch {
            setCopied(false);
        }
    };

    const createNewCode = () => {
        const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

        const newCode = Array.from(
            { length: 6 },
            () =>
                characters[
                Math.floor(
                    Math.random() *
                    characters.length,
                )
                ],
        ).join("");

        setInviteCode(newCode);
        setCopied(false);
    };

    return (
        <section
            className="
                relative
                min-h-[calc(100vh-74px)]
                overflow-hidden
                bg-[radial-gradient(circle_at_top,#ffffff_0%,#fcf9ff_52%,#f7f1fc_100%)]
                py-7
                sm:py-9
            "
        >
            {/* Arka plan efektleri */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -left-40
                    top-24
                    h-[360px]
                    w-[360px]
                    rounded-full
                    bg-purple-200/20
                    blur-[110px]
                "
            />

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    bottom-0
                    h-[380px]
                    w-[380px]
                    rounded-full
                    bg-pink-200/20
                    blur-[110px]
                "
            />

            <AppContainer className="relative">
                <div
                    className="
                        grid
                        items-start
                        gap-7
                        lg:grid-cols-[235px_minmax(0,1fr)]
                        xl:gap-10
                    "
                >
                    {/* Sol menü */}
                    <aside
                        className="
                            rounded-[18px]
                            border
                            border-[#eee9f4]
                            bg-white/65
                            p-3
                            shadow-[0_10px_35px_rgba(58,42,84,0.035)]
                            backdrop-blur-sm
                        "
                    >
                        <nav className="space-y-1.5">
                            {profileMenu.map((item) => {
                                const Icon = item.icon;

                                const active =
                                    item.label === "Çiftimiz";

                                return (
                                    <button
                                        key={item.label}
                                        type="button"
                                        className={[
                                            `
                                                flex
                                                h-[52px]
                                                w-full
                                                items-center
                                                gap-3
                                                rounded-[12px]
                                                px-4
                                                text-left
                                                text-[14px]
                                                font-semibold
                                                transition
                                            `,
                                            active
                                                ? `
                                                    bg-[#f0eaff]
                                                    text-[#6547cf]
                                                `
                                                : `
                                                    text-[#655d74]
                                                    hover:bg-[#f8f5fc]
                                                    hover:text-primary
                                                `,
                                        ].join(" ")}
                                    >
                                        <Icon
                                            size={19}
                                            strokeWidth={2}
                                        />

                                        {item.label}
                                    </button>
                                );
                            })}

                            <div className="my-3 h-px bg-[#eee9f4]" />

                            <button
                                type="button"
                                className="
                                    flex
                                    h-[52px]
                                    w-full
                                    items-center
                                    gap-3
                                    rounded-[12px]
                                    px-4
                                    text-left
                                    text-[14px]
                                    font-semibold
                                    text-[#655d74]
                                    transition
                                    hover:bg-[#fff0f2]
                                    hover:text-[#d85469]
                                "
                            >
                                <LogOut
                                    size={19}
                                    strokeWidth={2}
                                />

                                Çıkış Yap
                            </button>
                        </nav>
                    </aside>

                    {/* Sağ taraf */}
                    <main className="relative min-w-0">
                        {/* Başlık */}
                        <div>
                            <h1
                                className="
                                    text-[28px]
                                    font-extrabold
                                    tracking-[-0.035em]
                                    text-[#30264a]
                                    sm:text-[31px]
                                "
                            >
                                Çiftimiz
                            </h1>

                            <p
                                className="
                                    mt-1
                                    text-[14px]
                                    font-medium
                                    text-[#888092]
                                "
                            >
                                Birlikte daha iyi, daha mutlu,
                                daha Biz.
                            </p>
                        </div>

                        {/* Sağ el yazısı dekoru */}
                        <div
                            aria-hidden="true"
                            className="
                                absolute
                                right-2
                                top-16
                                hidden
                                rotate-[3deg]
                                text-center
                                lg:block
                            "
                        >
                            <p
                                className="
                                    font-['Comic_Sans_MS',cursive]
                                    text-[20px]
                                    leading-[1.2]
                                    text-[#9a6ad5]
                                "
                            >
                                İyi ki
                                <br />
                                <span className="text-[26px]">
                                    Biz
                                </span>
                            </p>

                            <Heart
                                size={24}
                                strokeWidth={2}
                                className="mx-auto mt-2 text-[#9a6ad5]"
                            />
                        </div>

                        {/* İçerik */}
                        <div
                            className="
                                mt-6
                                max-w-[720px]
                                overflow-hidden
                                rounded-[18px]
                                border
                                border-[#eee9f4]
                                bg-white
                                shadow-[0_12px_35px_rgba(62,42,91,0.055)]
                            "
                        >
                            {/* Partner bilgileri */}
                            <div className="p-6 sm:p-7">
                                <h2
                                    className="
                                        text-[16px]
                                        font-extrabold
                                        text-[#352b4d]
                                    "
                                >
                                    Partner Bilgileri
                                </h2>

                                <div
                                    className="
                                        mt-5
                                        flex
                                        flex-col
                                        items-center
                                        justify-between
                                        gap-6
                                        sm:flex-row
                                        sm:gap-4
                                    "
                                >
                                    {/* Sen */}
                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-4
                                        "
                                    >
                                        <div
                                            className="
                                                flex
                                                h-[72px]
                                                w-[72px]
                                                items-center
                                                justify-center
                                                overflow-hidden
                                                rounded-full
                                                border-[4px]
                                                border-[#eee6dd]
                                                bg-[#ebcbbd]
                                                shadow-sm
                                            "
                                        >
                                            <span
                                                className="
                                                    translate-y-1
                                                    text-[44px]
                                                    leading-none
                                                "
                                            >
                                                👨🏻
                                            </span>
                                        </div>

                                        <div>
                                            <p
                                                className="
                                                    text-[12px]
                                                    font-semibold
                                                    text-[#968da2]
                                                "
                                            >
                                                Sen
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    text-[16px]
                                                    font-extrabold
                                                    text-[#352c4a]
                                                "
                                            >
                                                Onur
                                            </p>
                                        </div>
                                    </div>

                                    {/* Kalp */}
                                    <div
                                        className="
                                            flex
                                            h-12
                                            w-12
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#fff0f3]
                                        "
                                    >
                                        <Heart
                                            size={25}
                                            fill="currentColor"
                                            strokeWidth={1.7}
                                            className="text-[#e74363]"
                                        />
                                    </div>

                                    {/* Partner */}
                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-4
                                        "
                                    >
                                        <div
                                            className="
                                                flex
                                                h-[72px]
                                                w-[72px]
                                                items-center
                                                justify-center
                                                overflow-hidden
                                                rounded-full
                                                border-[4px]
                                                border-[#eee6dd]
                                                bg-[#f1d4c7]
                                                shadow-sm
                                            "
                                        >
                                            <span
                                                className="
                                                    translate-y-1
                                                    text-[44px]
                                                    leading-none
                                                "
                                            >
                                                👩🏻
                                            </span>
                                        </div>

                                        <div>
                                            <p
                                                className="
                                                    text-[12px]
                                                    font-semibold
                                                    text-[#968da2]
                                                "
                                            >
                                                Partnerin
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    text-[16px]
                                                    font-extrabold
                                                    text-[#352c4a]
                                                "
                                            >
                                                Zeynep
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Ayraç */}
                            <div className="h-px bg-[#eee9f4]" />

                            {/* Davet kodu */}
                            <div className="p-6 sm:p-7">
                                <h2
                                    className="
                                        text-[16px]
                                        font-extrabold
                                        text-[#352b4d]
                                    "
                                >
                                    Davet Kodu
                                </h2>

                                <div
                                    className="
                                        mt-4
                                        flex
                                        flex-col
                                        gap-3
                                        sm:flex-row
                                        sm:items-center
                                    "
                                >
                                    {/* Kod */}
                                    <div
                                        className="
                                            flex
                                            h-[54px]
                                            min-w-[190px]
                                            items-center
                                            justify-center
                                            rounded-[12px]
                                            border
                                            border-[#e7e1ed]
                                            bg-[#faf8fc]
                                            px-6
                                            font-mono
                                            text-[20px]
                                            font-extrabold
                                            tracking-[0.18em]
                                            text-[#322945]
                                        "
                                    >
                                        {inviteCode}
                                    </div>

                                    {/* Kopyala */}
                                    <button
                                        type="button"
                                        onClick={copyInviteCode}
                                        className="
                                            flex
                                            h-[54px]
                                            w-[54px]
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-[12px]
                                            bg-gradient-to-br
                                            from-[#7b55e9]
                                            to-[#6943dd]
                                            text-white
                                            shadow-[0_7px_18px_rgba(109,74,255,0.24)]
                                            transition
                                            hover:-translate-y-0.5
                                        "
                                        title="Davet kodunu kopyala"
                                    >
                                        <Copy
                                            size={19}
                                            strokeWidth={2.1}
                                        />
                                    </button>

                                    {/* Yeni kod */}
                                    <button
                                        type="button"
                                        onClick={createNewCode}
                                        className="
                                            inline-flex
                                            h-[54px]
                                            items-center
                                            justify-center
                                            gap-2
                                            rounded-[12px]
                                            border
                                            border-[#ddd6e7]
                                            bg-white
                                            px-5
                                            text-[13px]
                                            font-bold
                                            text-[#655c74]
                                            shadow-sm
                                            transition
                                            hover:border-primary/30
                                            hover:text-primary
                                        "
                                    >
                                        <RefreshCw
                                            size={15}
                                            strokeWidth={2}
                                        />

                                        Yeni Kod Oluştur
                                    </button>
                                </div>

                                {copied && (
                                    <p
                                        className="
                                            mt-3
                                            text-[12px]
                                            font-semibold
                                            text-[#6d4aff]
                                        "
                                    >
                                        Davet kodu kopyalandı.
                                    </p>
                                )}

                                <div
                                    className="
                                        mt-5
                                        flex
                                        items-center
                                        gap-2
                                        text-[12px]
                                        font-medium
                                        text-[#91899d]
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            h-[18px]
                                            w-[18px]
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-[#aba3b6]
                                            text-[10px]
                                            font-bold
                                        "
                                    >
                                        i
                                    </div>

                                    <span>
                                        Bu kod yalnızca bir kez
                                        kullanılabilir.
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Mobil dekor */}
                        <div
                            className="
                                mt-7
                                text-center
                                lg:hidden
                            "
                        >
                            <p
                                className="
                                    font-['Comic_Sans_MS',cursive]
                                    text-[17px]
                                    text-[#9a6ad5]
                                "
                            >
                                İyi ki Biz ♡
                            </p>
                        </div>
                    </main>
                </div>
            </AppContainer>
        </section>
    );
}