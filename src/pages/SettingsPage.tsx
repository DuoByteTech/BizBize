import { useState } from "react";
import {
    Bell,
    HeartHandshake,
    KeyRound,
    LockKeyhole,
    LogOut,
    Mail,
    Settings,
    ShieldCheck,
    Trash2,
    UserRound,
} from "lucide-react";
import { NavLink } from "react-router-dom";

import { AppContainer } from "@/components/ui/AppContainer";

const profileMenu = [
    { label: "Profilim", icon: UserRound, path: "/profil" },
    { label: "Çiftimiz", icon: HeartHandshake, path: "/profil/ciftimiz" },
    { label: "Ayarlar", icon: Settings, path: "/profil/ayarlar" },
] as const;

type ToggleProps = {
    checked: boolean;
    onChange: () => void;
};

function Toggle({ checked, onChange }: ToggleProps) {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            onClick={onChange}
            className={`relative h-7 w-12 shrink-0 rounded-full transition ${
                checked ? "bg-[#7650e6]" : "bg-[#ded9e5]"
            }`}
        >
            <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
                    checked ? "translate-x-6" : "translate-x-1"
                }`}
            />
        </button>
    );
}

export function SettingsPage() {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [gameNotifications, setGameNotifications] = useState(true);
    const [partnerNotifications, setPartnerNotifications] = useState(true);

    return (
        <section className="relative min-h-[calc(100vh-84px)] overflow-hidden bg-[radial-gradient(circle_at_top,#ffffff_0%,#fcf9ff_52%,#f7f1fc_100%)] py-8 sm:py-10">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-40 top-24 h-[360px] w-[360px] rounded-full bg-purple-200/20 blur-[110px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-pink-200/20 blur-[110px]"
            />

            <AppContainer className="relative">
                <div className="mx-auto grid max-w-[1270px] items-start gap-7 lg:grid-cols-[235px_minmax(0,1fr)] xl:gap-10">
                    <aside className="rounded-[18px] border border-[#eee9f4] bg-white/70 p-3 shadow-[0_10px_35px_rgba(58,42,84,0.035)] backdrop-blur-sm">
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
                                                "flex h-[52px] w-full items-center gap-3 rounded-[12px] px-4 text-left text-[14px] font-semibold transition",
                                                isActive
                                                    ? "bg-[#f0eaff] text-[#6547cf]"
                                                    : "text-[#655d74] hover:bg-[#f8f5fc] hover:text-[#6547cf]",
                                            ].join(" ")
                                        }
                                    >
                                        <Icon size={19} strokeWidth={2} />
                                        {item.label}
                                    </NavLink>
                                );
                            })}

                            <div className="my-3 h-px bg-[#eee9f4]" />

                            <button
                                type="button"
                                className="flex h-[52px] w-full items-center gap-3 rounded-[12px] px-4 text-left text-[14px] font-semibold text-[#655d74] transition hover:bg-[#fff0f2] hover:text-[#d85469]"
                            >
                                <LogOut size={19} strokeWidth={2} />
                                Çıkış Yap
                            </button>
                        </nav>
                    </aside>

                    <main className="min-w-0">
                        <div>
                            <h1 className="text-[31px] font-extrabold tracking-[-0.04em] text-[#352b4d] sm:text-[36px]">
                                Ayarlar
                            </h1>
                            <p className="mt-1.5 text-[14px] font-medium text-[#8a8195]">
                                Hesabını, bildirimlerini ve gizlilik tercihlerini buradan yönetebilirsin.
                            </p>
                        </div>

                        <div className="mt-7 grid gap-6">
                            <section className="overflow-hidden rounded-[22px] border border-[#ebe5f1] bg-white/90 shadow-[0_15px_45px_rgba(63,44,92,0.045)] backdrop-blur-sm">
                                <div className="flex items-center gap-3 border-b border-[#eee9f4] px-6 py-5 sm:px-7">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#efe8ff] text-[#7350db]">
                                        <Bell size={19} />
                                    </div>
                                    <div>
                                        <h2 className="text-[16px] font-extrabold text-[#352b4d]">
                                            Bildirimler
                                        </h2>
                                        <p className="mt-0.5 text-[12px] font-medium text-[#958c9f]">
                                            BizBize’den hangi bildirimleri almak istediğini seç.
                                        </p>
                                    </div>
                                </div>

                                <div className="divide-y divide-[#f0ebf4] px-6 sm:px-7">
                                    {[
                                        {
                                            title: "E-posta bildirimleri",
                                            description: "Hesabın ve önemli güncellemeler için e-posta al.",
                                            icon: Mail,
                                            checked: emailNotifications,
                                            onChange: () => setEmailNotifications((value) => !value),
                                        },
                                        {
                                            title: "Oyun hatırlatmaları",
                                            description: "Birlikte oynamanız için küçük hatırlatmalar al.",
                                            icon: Bell,
                                            checked: gameNotifications,
                                            onChange: () => setGameNotifications((value) => !value),
                                        },
                                        {
                                            title: "Partner etkinlikleri",
                                            description: "Partnerinle ilgili önemli gelişmelerden haberdar ol.",
                                            icon: HeartHandshake,
                                            checked: partnerNotifications,
                                            onChange: () => setPartnerNotifications((value) => !value),
                                        },
                                    ].map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <div
                                                key={item.title}
                                                className="flex items-center justify-between gap-5 py-5"
                                            >
                                                <div className="flex min-w-0 items-center gap-4">
                                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-[#faf7ff] text-[#7251d6]">
                                                        <Icon size={18} />
                                                    </div>
                                                    <div>
                                                        <p className="text-[14px] font-bold text-[#403651]">
                                                            {item.title}
                                                        </p>
                                                        <p className="mt-1 text-[12px] leading-5 text-[#91889d]">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>

                                                <Toggle
                                                    checked={item.checked}
                                                    onChange={item.onChange}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </section>

                            <section className="overflow-hidden rounded-[22px] border border-[#ebe5f1] bg-white/90 shadow-[0_15px_45px_rgba(63,44,92,0.045)] backdrop-blur-sm">
                                <div className="flex items-center gap-3 border-b border-[#eee9f4] px-6 py-5 sm:px-7">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#eef8f5] text-[#31867b]">
                                        <ShieldCheck size={19} />
                                    </div>
                                    <div>
                                        <h2 className="text-[16px] font-extrabold text-[#352b4d]">
                                            Hesap ve Güvenlik
                                        </h2>
                                        <p className="mt-0.5 text-[12px] font-medium text-[#958c9f]">
                                            Giriş bilgilerini ve hesap güvenliğini yönet.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-7">
                                    <button
                                        type="button"
                                        className="group flex min-h-[118px] items-start gap-4 rounded-[16px] border border-[#eee9f4] bg-[#fbf9fd] p-5 text-left transition hover:-translate-y-0.5 hover:border-[#d8cef0] hover:bg-white"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-[#efe8ff] text-[#7350db]">
                                            <KeyRound size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[14px] font-bold text-[#403651]">
                                                Şifreyi Değiştir
                                            </p>
                                            <p className="mt-1 text-[12px] leading-5 text-[#91889d]">
                                                Hesabın için yeni bir giriş şifresi oluştur.
                                            </p>
                                        </div>
                                    </button>

                                    <button
                                        type="button"
                                        className="group flex min-h-[118px] items-start gap-4 rounded-[16px] border border-[#eee9f4] bg-[#fbf9fd] p-5 text-left transition hover:-translate-y-0.5 hover:border-[#d8cef0] hover:bg-white"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-[#eef8f5] text-[#31867b]">
                                            <LockKeyhole size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[14px] font-bold text-[#403651]">
                                                Gizlilik
                                            </p>
                                            <p className="mt-1 text-[12px] leading-5 text-[#91889d]">
                                                Profil ve çift bilgileri için gizlilik tercihlerini düzenle.
                                            </p>
                                        </div>
                                    </button>
                                </div>
                            </section>

                            <section className="overflow-hidden rounded-[22px] border border-[#f0dfe3] bg-white/90 shadow-[0_15px_45px_rgba(63,44,92,0.035)] backdrop-blur-sm">
                                <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-[#fff0f2] text-[#d65368]">
                                            <Trash2 size={18} />
                                        </div>
                                        <div>
                                            <h2 className="text-[15px] font-extrabold text-[#493746]">
                                                Hesabı Sil
                                            </h2>
                                            <p className="mt-1 max-w-[620px] text-[12px] leading-5 text-[#91889d]">
                                                Hesabını silmek kalıcı bir işlemdir. Profilin ve hesabınla ilişkili veriler kaldırılır.
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        className="inline-flex h-[44px] shrink-0 items-center justify-center rounded-[12px] border border-[#efcbd2] bg-[#fff6f7] px-5 text-[13px] font-bold text-[#cf4d63] transition hover:bg-[#ffedef]"
                                    >
                                        Hesabı Sil
                                    </button>
                                </div>
                            </section>
                        </div>
                    </main>
                </div>
            </AppContainer>
        </section>
    );
}
