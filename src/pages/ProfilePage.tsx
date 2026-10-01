import {
    CalendarDays,
    Camera,
    Heart,
    HeartHandshake,
    KeyRound,
    LogOut,
    Mail,
    Pencil,
    Settings,
    UserRound,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import { AppContainer } from "@/components/ui/AppContainer";

const profileMenu = [
    {
        label: "Profilim",
        icon: UserRound,
        path: "/profil",
    },
    {
        label: "Çiftimiz",
        icon: HeartHandshake,
        path: "/profil/ciftimiz",
    },
    {
        label: "Ayarlar",
        icon: Settings,
        path: "/profil/ayarlar",
    },
] as const;

export function ProfilePage() {
    return (
        <section
            className="
                relative
                min-h-[calc(100vh-84px)]
                overflow-hidden
                bg-[radial-gradient(circle_at_top,#ffffff_0%,#fcf9ff_52%,#f7f1fc_100%)]
                py-8
                sm:py-10
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
                        mx-auto
                        grid
                        max-w-[1270px]
                        items-start
                        gap-7
                        lg:grid-cols-[235px_minmax(0,1fr)]
                        xl:gap-10
                    "
                >

                    {/* SOL MENÜ */}

                    <aside
                        className="
                            rounded-[18px]
                            border
                            border-[#eee9f4]
                            bg-white/70
                            p-3
                            shadow-[0_10px_35px_rgba(58,42,84,0.035)]
                            backdrop-blur-sm
                        "
                    >
                        <nav className="space-y-1.5">

                            {profileMenu.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        end={item.path === "/profil"}
                                        className={({ isActive }) =>
                                            [
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
                                                isActive
                                                    ? `
                                                        bg-[#f0eaff]
                                                        text-[#6547cf]
                                                    `
                                                    : `
                                                        text-[#655d74]
                                                        hover:bg-[#f8f5fc]
                                                        hover:text-[#6547cf]
                                                    `,
                                            ].join(" ")
                                        }
                                    >
                                        <Icon
                                            size={19}
                                            strokeWidth={2}
                                        />

                                        {item.label}
                                    </NavLink>
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

                    {/* SAĞ ALAN */}

                    <main className="min-w-0">

                        {/* Başlık */}

                        <div>
                            <h1
                                className="
                                    text-[31px]
                                    font-extrabold
                                    tracking-[-0.04em]
                                    text-[#352b4d]
                                    sm:text-[36px]
                                "
                            >
                                Profilim
                            </h1>

                            <p
                                className="
                                    mt-1.5
                                    text-[14px]
                                    font-medium
                                    text-[#8a8195]
                                "
                            >
                                Kişisel bilgilerini buradan
                                görüntüleyebilir ve düzenleyebilirsin.
                            </p>
                        </div>

                        {/* ANA PROFİL KARTI */}

                        <div
                            className="
                                mt-7
                                overflow-hidden
                                rounded-[22px]
                                border
                                border-[#ebe5f1]
                                bg-white/90
                                shadow-[0_15px_45px_rgba(63,44,92,0.045)]
                                backdrop-blur-sm
                            "
                        >

                            {/* ÜST ALAN */}

                            <div
                                className="
                                    flex
                                    flex-col
                                    gap-6
                                    p-6
                                    sm:p-8
                                    md:flex-row
                                    md:items-center
                                    md:justify-between
                                "
                            >

                                <div
                                    className="
                                        flex
                                        flex-col
                                        items-center
                                        gap-5
                                        sm:flex-row
                                    "
                                >

                                    {/* Avatar */}

                                    <div className="relative">

                                        <div
                                            className="
                                                flex
                                                h-[104px]
                                                w-[104px]
                                                items-center
                                                justify-center
                                                overflow-hidden
                                                rounded-full
                                                border-[5px]
                                                border-[#eee5dc]
                                                bg-[#f1d3c6]
                                                shadow-sm
                                            "
                                        >
                                            <span
                                                className="
                                                    translate-y-1
                                                    text-[62px]
                                                    leading-none
                                                "
                                            >
                                                👨🏻
                                            </span>
                                        </div>

                                        <button
                                            type="button"
                                            className="
                                                absolute
                                                bottom-0
                                                right-0
                                                flex
                                                h-9
                                                w-9
                                                items-center
                                                justify-center
                                                rounded-full
                                                border-[3px]
                                                border-white
                                                bg-[#744be6]
                                                text-white
                                                shadow-md
                                                transition
                                                hover:bg-[#6338d4]
                                            "
                                        >
                                            <Camera
                                                size={16}
                                                strokeWidth={2}
                                            />
                                        </button>

                                    </div>

                                    {/* Kullanıcı */}

                                    <div className="text-center sm:text-left">

                                        <p
                                            className="
                                                text-[12px]
                                                font-bold
                                                uppercase
                                                tracking-[0.12em]
                                                text-[#9a91a5]
                                            "
                                        >
                                            BizBize Profili
                                        </p>

                                        <h2
                                            className="
                                                mt-1
                                                text-[24px]
                                                font-extrabold
                                                text-[#352b4d]
                                            "
                                        >
                                            Onur Aydınoğlu
                                        </h2>

                                        <div
                                            className="
                                                mt-2
                                                flex
                                                items-center
                                                justify-center
                                                gap-2
                                                text-[13px]
                                                text-[#8b8296]
                                                sm:justify-start
                                            "
                                        >
                                            <Mail size={14} />

                                            <span>
                                                onur@example.com
                                            </span>
                                        </div>

                                    </div>

                                </div>

                                {/* Düzenle */}

                                <button
                                    type="button"
                                    className="
                                        inline-flex
                                        h-[46px]
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-[12px]
                                        bg-gradient-to-r
                                        from-[#8058ea]
                                        to-[#6f45df]
                                        px-5
                                        text-[13px]
                                        font-bold
                                        text-white
                                        shadow-[0_8px_20px_rgba(109,74,255,0.22)]
                                        transition
                                        hover:-translate-y-0.5
                                    "
                                >
                                    <Pencil
                                        size={16}
                                        strokeWidth={2}
                                    />

                                    Profili Düzenle
                                </button>

                            </div>

                            <div className="h-px bg-[#eee9f4]" />

                            {/* BİLGİLER */}

                            <div
                                className="
                                    grid
                                    gap-4
                                    p-6
                                    sm:p-8
                                    md:grid-cols-2
                                "
                            >

                                {/* Ad Soyad */}

                                <div
                                    className="
                                        rounded-[16px]
                                        border
                                        border-[#eee9f4]
                                        bg-[#fbf9fd]
                                        p-5
                                    "
                                >
                                    <div className="flex items-center gap-3">

                                        <div
                                            className="
                                                flex
                                                h-10
                                                w-10
                                                items-center
                                                justify-center
                                                rounded-[11px]
                                                bg-[#efe8ff]
                                                text-[#7350db]
                                            "
                                        >
                                            <UserRound size={19} />
                                        </div>

                                        <div>
                                            <p className="text-[12px] font-semibold text-[#9990a3]">
                                                Ad Soyad
                                            </p>

                                            <p className="mt-1 text-[14px] font-bold text-[#3a304f]">
                                                Onur Aydınoğlu
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                {/* E-posta */}

                                <div
                                    className="
                                        rounded-[16px]
                                        border
                                        border-[#eee9f4]
                                        bg-[#fbf9fd]
                                        p-5
                                    "
                                >
                                    <div className="flex items-center gap-3">

                                        <div
                                            className="
                                                flex
                                                h-10
                                                w-10
                                                items-center
                                                justify-center
                                                rounded-[11px]
                                                bg-[#fff0f5]
                                                text-[#df7198]
                                            "
                                        >
                                            <Mail size={19} />
                                        </div>

                                        <div>
                                            <p className="text-[12px] font-semibold text-[#9990a3]">
                                                E-posta
                                            </p>

                                            <p className="mt-1 text-[14px] font-bold text-[#3a304f]">
                                                onur@example.com
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                {/* Katılma tarihi */}

                                <div
                                    className="
                                        rounded-[16px]
                                        border
                                        border-[#eee9f4]
                                        bg-[#fbf9fd]
                                        p-5
                                    "
                                >
                                    <div className="flex items-center gap-3">

                                        <div
                                            className="
                                                flex
                                                h-10
                                                w-10
                                                items-center
                                                justify-center
                                                rounded-[11px]
                                                bg-[#eaf8f5]
                                                text-[#45a89a]
                                            "
                                        >
                                            <CalendarDays size={19} />
                                        </div>

                                        <div>
                                            <p className="text-[12px] font-semibold text-[#9990a3]">
                                                BizBize'ye Katıldı
                                            </p>

                                            <p className="mt-1 text-[14px] font-bold text-[#3a304f]">
                                                24 Eylül 2026
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                {/* Partner */}

                                <div
                                    className="
                                        rounded-[16px]
                                        border
                                        border-[#eee9f4]
                                        bg-[#fbf9fd]
                                        p-5
                                    "
                                >
                                    <div className="flex items-center gap-3">

                                        <div
                                            className="
                                                flex
                                                h-10
                                                w-10
                                                items-center
                                                justify-center
                                                rounded-[11px]
                                                bg-[#fff0f3]
                                                text-[#e45d7d]
                                            "
                                        >
                                            <Heart
                                                size={19}
                                                fill="currentColor"
                                            />
                                        </div>

                                        <div>
                                            <p className="text-[12px] font-semibold text-[#9990a3]">
                                                Partner
                                            </p>

                                            <p className="mt-1 text-[14px] font-bold text-[#3a304f]">
                                                Zeynep
                                            </p>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* ALT KARTLAR */}

                        <div
                            className="
                                mt-5
                                grid
                                gap-5
                                lg:grid-cols-2
                            "
                        >

                            {/* Güvenlik */}

                            <div
                                className="
                                    rounded-[20px]
                                    border
                                    border-[#ebe5f1]
                                    bg-white/90
                                    p-6
                                    shadow-[0_12px_36px_rgba(63,44,92,0.035)]
                                "
                            >
                                <div className="flex items-start gap-4">

                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-[12px]
                                            bg-[#f0eaff]
                                            text-[#714dd6]
                                        "
                                    >
                                        <KeyRound size={20} />
                                    </div>

                                    <div className="flex-1">

                                        <h3
                                            className="
                                                text-[16px]
                                                font-extrabold
                                                text-[#352b4d]
                                            "
                                        >
                                            Şifre ve Güvenlik
                                        </h3>

                                        <p
                                            className="
                                                mt-1
                                                text-[13px]
                                                leading-5
                                                text-[#8e8599]
                                            "
                                        >
                                            Hesabının güvenliği için
                                            şifreni düzenli olarak
                                            güncelleyebilirsin.
                                        </p>

                                        <button
                                            type="button"
                                            className="
                                                mt-4
                                                text-[13px]
                                                font-bold
                                                text-[#6d49d5]
                                                transition
                                                hover:text-[#5833c4]
                                            "
                                        >
                                            Şifreyi Değiştir
                                        </button>

                                    </div>

                                </div>
                            </div>

                            {/* İyi ki Biz */}

                            <div
                                className="
                                    relative
                                    overflow-hidden
                                    rounded-[20px]
                                    border
                                    border-[#eadff8]
                                    bg-gradient-to-br
                                    from-[#eee6ff]
                                    via-[#f7efff]
                                    to-[#ffeaf2]
                                    p-6
                                    shadow-[0_12px_36px_rgba(63,44,92,0.035)]
                                "
                            >

                                <div
                                    className="
                                        absolute
                                        -right-10
                                        -top-10
                                        h-28
                                        w-28
                                        rounded-full
                                        bg-white/35
                                        blur-xl
                                    "
                                />

                                <div className="relative">

                                    <Heart
                                        size={25}
                                        fill="currentColor"
                                        className="text-[#e46d94]"
                                    />

                                    <h3
                                        className="
                                            mt-4
                                            text-[18px]
                                            font-extrabold
                                            text-[#4b3770]
                                        "
                                    >
                                        İyi ki Biz ♡
                                    </h3>

                                    <p
                                        className="
                                            mt-2
                                            max-w-[360px]
                                            text-[13px]
                                            leading-6
                                            text-[#81748f]
                                        "
                                    >
                                        Birlikte oynadığınız her oyun,
                                        birbirinizi biraz daha yakından
                                        tanımanıza yardımcı olur.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </main>

                </div>
            </AppContainer>
        </section>
    );
}