import {
    Gamepad2,
    Heart,
    Star,
    UsersRound,
} from "lucide-react";

import { AppContainer } from "@/components/ui/AppContainer";

const benefits = [
    {
        label: "Sadece iki kişiye özel",
        icon: Heart,
        iconBackground: "bg-[#ffe4ef]",
        iconColor: "text-[#f85b9c]",
    },
    {
        label: "Eğlenceli oyunlar",
        icon: Gamepad2,
        iconBackground: "bg-[#eae2ff]",
        iconColor: "text-[#6544e8]",
    },
    {
        label: "Daha iyi iletişim",
        icon: UsersRound,
        iconBackground: "bg-[#fff0d7]",
        iconColor: "text-[#dc8200]",
    },
    {
        label: "Güçlü ve anlamlı bir bağ",
        icon: Star,
        iconBackground: "bg-[#dff7f3]",
        iconColor: "text-[#2ba69b]",
    },
];

export function HowItWorksBottom() {
    return (
        <section className="bg-white pb-7 pt-1">
            <AppContainer>
                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[22px]
                        bg-gradient-to-r
                        from-[#f5f1ff]
                        via-[#fcfaff]
                        to-[#f4efff]
                        px-8
                        py-6
                        lg:px-12
                    "
                >
                    <div
                        className="
                            grid
                            items-center
                            gap-8
                            lg:grid-cols-[40%_43%_17%]
                        "
                    >
                        {/* SOL METİN */}
                        <div>
                            <div className="flex items-center gap-2">
                                <h2
                                    className="
                                        text-[27px]
                                        font-black
                                        tracking-[-0.04em]
                                        text-[#09064f]
                                    "
                                >
                                    Sadece Size Özel
                                </h2>

                                <Heart
                                    size={24}
                                    className="text-[#ff669f]"
                                    strokeWidth={2.3}
                                />
                            </div>

                            <p
                                className="
                                    mt-1
                                    max-w-[470px]
                                    text-[15px]
                                    leading-[1.45]
                                    text-[#514d76]
                                "
                            >
                                BizBize’de tüm oyunlar sadece siz ve partneriniz
                                için tasarlanmıştır. Farklı kategorilerdeki
                                sorularla daha derin sohbetler edin, eğlenceli
                                anılar biriktirin ve ilişkinizi güçlendirin.
                            </p>
                        </div>

                        {/* ÖZELLİKLER */}
                        <div className="grid gap-3 sm:grid-cols-2">
                            {benefits.map((benefit) => {
                                const Icon = benefit.icon;

                                return (
                                    <div
                                        key={benefit.label}
                                        className="
                                            flex
                                            min-h-[52px]
                                            items-center
                                            gap-4
                                            rounded-[15px]
                                            bg-white/85
                                            px-3
                                            py-2
                                            shadow-[0_6px_20px_rgba(63,42,126,0.04)]
                                        "
                                    >
                                        <div
                                            className={`
                                                flex
                                                h-10
                                                w-12
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-[12px]
                                                ${benefit.iconBackground}
                                            `}
                                        >
                                            <Icon
                                                size={22}
                                                className={benefit.iconColor}
                                                fill={
                                                    benefit.icon === Heart ||
                                                        benefit.icon === Star
                                                        ? "currentColor"
                                                        : "none"
                                                }
                                            />
                                        </div>

                                        <span
                                            className="
                                                text-[13px]
                                                font-medium
                                                text-[#59547a]
                                            "
                                        >
                                            {benefit.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* SAĞ EL YAZISI */}
                        <div
                            className="
                                hidden
                                rotate-[5deg]
                                text-center
                                text-[17px]
                                leading-[1.2]
                                text-[#7653ef]
                                lg:block
                            "
                            style={{
                                fontFamily:
                                    '"Segoe Print", "Comic Sans MS", cursive',
                            }}
                        >
                            <p>Küçük sorular,</p>
                            <p>büyük anlamlar</p>
                            <p className="mt-1 text-[27px]">♡</p>
                        </div>
                    </div>
                </div>
            </AppContainer>
        </section>
    );
}