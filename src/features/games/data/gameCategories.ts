import {
    Coffee,
    Dices,
    Heart,
    Laugh,
    Star,
    UsersRound,
    type LucideIcon,
} from "lucide-react";

export type GameCategoryId =
    | "rastgele"
    | "birbirimizi-taniyalim"
    | "hayaller-hedefler"
    | "gunluk-yasam"
    | "iliskimiz"
    | "eglenceli-sorular";

export type GameCategory = {
    id: GameCategoryId;
    title: string;
    shortDescription: string;
    breadcrumbTitle: string;
    icon: LucideIcon;
    iconColor: string;
    accentColor: string;
    accentSoftColor: string;
    cardBackground: string;
    progressGradient: string;
    buttonGradient: string;
    questions: string[];
};

export const gameCategories: Record<GameCategoryId, GameCategory> = {
    rastgele: {
        id: "rastgele",
        title: "Rastgele",
        shortDescription: "Her şeyden biraz",
        breadcrumbTitle: "Rastgele",
        icon: Dices,
        iconColor: "#6338d7",
        accentColor: "#6338d7",
        accentSoftColor: "#f2edff",
        cardBackground:
            "linear-gradient(135deg, #f2edff 0%, #ece4ff 100%)",
        progressGradient:
            "linear-gradient(90deg, #7a55e9 0%, #6338d7 100%)",
        buttonGradient:
            "linear-gradient(90deg, #7a55e9 0%, #6338d7 100%)",
        questions: [
            "Birlikte yapmayı en çok sevdiğin şey nedir?",
            "Şu anda istediğin herhangi bir yere gidebilseydin nereye giderdin?",
            "Partnerinde en çok sevdiğin özellik nedir?",
            "Çocukluğundan unutamadığın bir anın nedir?",
            "Birlikte denemek istediğin yeni bir şey var mı?",
        ],
    },

    "birbirimizi-taniyalim": {
        id: "birbirimizi-taniyalim",
        title: "Birbirimizi Tanıyalım",
        shortDescription: "Temel sorular",
        breadcrumbTitle: "Birbirimizi Tanıyalım",
        icon: Heart,
        iconColor: "#d93959",
        accentColor: "#d93959",
        accentSoftColor: "#fff0f3",
        cardBackground:
            "linear-gradient(135deg, #fff1f4 0%, #ffe7ec 100%)",
        progressGradient:
            "linear-gradient(90deg, #ee6280 0%, #d93959 100%)",
        buttonGradient:
            "linear-gradient(90deg, #ec5f7d 0%, #d93959 100%)",
        questions: [
            "Hayatında yaptığın en büyük pişmanlık ne?",
            "Çocukken büyüyünce ne olmak isterdin?",
            "Seni en çok ne mutlu eder?",
            "İnsanlarda en çok değer verdiğin özellik nedir?",
            "Kendinle ilgili değiştirmek istediğin bir şey var mı?",
        ],
    },

    "hayaller-hedefler": {
        id: "hayaller-hedefler",
        title: "Hayaller & Hedefler",
        shortDescription: "Geleceğe dair",
        breadcrumbTitle: "Hayaller & Hedefler",
        icon: Star,
        iconColor: "#efa12b",
        accentColor: "#e99a21",
        accentSoftColor: "#fff7e7",
        cardBackground:
            "linear-gradient(135deg, #fff8e9 0%, #fff0d8 100%)",
        progressGradient:
            "linear-gradient(90deg, #f7bd56 0%, #ea9d23 100%)",
        buttonGradient:
            "linear-gradient(90deg, #f5b84f 0%, #e99a21 100%)",
        questions: [
            "Beş yıl sonra kendini nerede görüyorsun?",
            "Birlikte gerçekleştirmek istediğin en büyük hayal nedir?",
            "Hayalindeki ev nasıl olurdu?",
            "Birlikte yaşamak istediğin şehir veya ülke var mı?",
            "Gelecekte öğrenmek istediğin bir beceri nedir?",
        ],
    },

    "gunluk-yasam": {
        id: "gunluk-yasam",
        title: "Günlük Yaşam",
        shortDescription: "Alışkanlıklar, tercihler",
        breadcrumbTitle: "Günlük Yaşam",
        icon: Coffee,
        iconColor: "#bf5b1d",
        accentColor: "#bf5b1d",
        accentSoftColor: "#fff3e7",
        cardBackground:
            "linear-gradient(135deg, #fff5e9 0%, #ffead9 100%)",
        progressGradient:
            "linear-gradient(90deg, #df7c3d 0%, #bf5b1d 100%)",
        buttonGradient:
            "linear-gradient(90deg, #dc793b 0%, #b95318 100%)",
        questions: [
            "Sabah insanı mısın yoksa gece insanı mı?",
            "Boş bir gününü nasıl geçirmek istersin?",
            "Evde yapmayı en sevdiğin şey nedir?",
            "Günün hangi saatinde kendini daha enerjik hissedersin?",
            "Hafta sonları genellikle ne yapmak istersin?",
        ],
    },

    iliskimiz: {
        id: "iliskimiz",
        title: "İlişkimiz",
        shortDescription: "Sadece bize özel",
        breadcrumbTitle: "İlişkimiz",
        icon: UsersRound,
        iconColor: "#238c87",
        accentColor: "#238c87",
        accentSoftColor: "#eaf8f5",
        cardBackground:
            "linear-gradient(135deg, #ecf9f6 0%, #def3ef 100%)",
        progressGradient:
            "linear-gradient(90deg, #36aaa4 0%, #238c87 100%)",
        buttonGradient:
            "linear-gradient(90deg, #36aaa4 0%, #238c87 100%)",
        questions: [
            "İlişkimizde en sevdiğin şey nedir?",
            "Birlikte yaşadığımız en güzel an hangisiydi?",
            "İlişkimizde daha fazla yapmak istediğin bir şey var mı?",
            "Sence birbirimizi en iyi hangi konuda tamamlıyoruz?",
            "Benim sana kendini en değerli hissettirdiğim an hangisiydi?",
        ],
    },

    "eglenceli-sorular": {
        id: "eglenceli-sorular",
        title: "Eğlenceli Sorular",
        shortDescription: "Keyifli ve farklı",
        breadcrumbTitle: "Eğlenceli Sorular",
        icon: Laugh,
        iconColor: "#5832c7",
        accentColor: "#5832c7",
        accentSoftColor: "#f1edff",
        cardBackground:
            "linear-gradient(135deg, #f2edff 0%, #eae2ff 100%)",
        progressGradient:
            "linear-gradient(90deg, #7452dc 0%, #5832c7 100%)",
        buttonGradient:
            "linear-gradient(90deg, #7452dc 0%, #5832c7 100%)",
        questions: [
            "Bir günlüğüne görünmez olsaydın ne yapardın?",
            "Hayatın bir film olsaydı seni kim oynardı?",
            "Bir süper gücün olsaydı hangisini seçerdin?",
            "Birlikte bir yarışmaya katılsak hangisinde başarılı olurduk?",
            "Sadece üç yemek yiyebilseydin hangilerini seçerdin?",
        ],
    },
};

export const gameCategoryList = Object.values(gameCategories);