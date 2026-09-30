import type { LucideIcon } from "lucide-react";

import {
    HeartHandshake,
    MessagesSquare,
    Gamepad2,
    Dices,
    ChartNoAxesCombined,
    Heart,
} from "lucide-react";

export type Feature = {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
    iconColor: string;
    iconBackground: string;
    background: string;
};

export const featuresData: Feature[] = [
    {
        id: 1,
        title: "Partnerinle Bağlan",

        description:
            "Size özel davet koduyla partnerinle eşleş. " +
            "Sadece ikinize özel bir oyun deneyimine başlayın.",

        icon: HeartHandshake,

        iconColor: "#E45287",

        iconBackground: "#FFE5F0",

        background:
            "linear-gradient(135deg, #FFF5F9 0%, #FFECF4 100%)",
    },

    {
        id: 2,
        title: "Kategorilere Özel Oyunlar",

        description:
            "İlişkiler, hayaller, günlük yaşam ve daha birçok " +
            "konuda hazırlanan sorularla birlikte oynayın.",

        icon: Gamepad2,

        iconColor: "#744BEA",

        iconBackground: "#E9DEFF",

        background:
            "linear-gradient(135deg, #F6F1FF 0%, #EEE5FF 100%)",
    },

    {
        id: 3,
        title: "Birbirinizi Keşfedin",

        description:
            "Birbirinize belki de hiç sormadığınız soruları " +
            "sorarak yeni sohbetlerin kapısını açın.",

        icon: MessagesSquare,

        iconColor: "#D87B35",

        iconBackground: "#FFE8D0",

        background:
            "linear-gradient(135deg, #FFFAF1 0%, #FFF0DD 100%)",
    },

    {
        id: 4,
        title: "Eğlenceli Sorular",

        description:
            "Rastgele sorularla oyununuzu renklendirin. " +
            "Her turda yeni ve eğlenceli konular keşfedin.",

        icon: Dices,

        iconColor: "#7351DE",

        iconBackground: "#E9E1FF",

        background:
            "linear-gradient(135deg, #F7F4FF 0%, #EEE9FF 100%)",
    },

    {
        id: 5,
        title: "Oyun Sonuçları",

        description:
            "Tamamladığınız oyunların sonuçlarını görüntüleyin. " +
            "Birlikte keşfettiğiniz konuları hatırlayın.",

        icon: Heart,

        iconColor: "#E45676",

        iconBackground: "#FFE1E8",

        background:
            "linear-gradient(135deg, #FFF5F6 0%, #FFE9EE 100%)",
    },

    {
        id: 6,
        title: "İstatistikler",

        description:
            "Oyun aktivitelerinizi ve tamamladığınız " +
            "kategorileri tek bir ekrandan takip edin.",

        icon: ChartNoAxesCombined,

        iconColor: "#328D88",

        iconBackground: "#DCF3ED",

        background:
            "linear-gradient(135deg, #F2FCF8 0%, #E4F7F0 100%)",
    },
];