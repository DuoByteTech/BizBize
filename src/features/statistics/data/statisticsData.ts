// Geçici arayüz verileri. Supabase bağlantısı eklendiğinde bu dosyadaki
// örnek değerler servis üzerinden gelen istatistiklerle değiştirilecek.
export type CategoryStat = {
    id: string;
    name: string;
    same: number;
    different: number;
    color: string;
    paleColor: string;
};

export type WeeklyActivity = { day: string; count: number };

export const categoryStats: CategoryStat[] = [
    { id: "tanisma", name: "Birbirimizi Tanıyalım", same: 18, different: 4, color: "#ef709c", paleColor: "#fff0f5" },
    { id: "hayaller", name: "Hayaller & Hedefler", same: 14, different: 6, color: "#9162e9", paleColor: "#f3edff" },
    { id: "gunluk", name: "Günlük Yaşam", same: 13, different: 5, color: "#e8ac4d", paleColor: "#fff7e9" },
    { id: "iliski", name: "İlişkimiz", same: 17, different: 3, color: "#5db6a9", paleColor: "#eaf9f6" },
    { id: "eglence", name: "Eğlenceli Sorular", same: 9, different: 5, color: "#779cec", paleColor: "#eef4ff" },
];

export const weeklyActivity: WeeklyActivity[] = [
    { day: "Pzt", count: 8 },
    { day: "Sal", count: 12 },
    { day: "Çar", count: 6 },
    { day: "Per", count: 15 },
    { day: "Cum", count: 11 },
    { day: "Cmt", count: 20 },
    { day: "Paz", count: 14 },
];

export const completedGames = 12;
export const sharedDays = 24;
