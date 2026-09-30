import { useState } from "react";
import {
    Check,
    Copy,
    Info,
    Share2,
} from "lucide-react";

const INVITE_CODE = "A7K3L9";

export function InvitePartnerCard() {
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(INVITE_CODE);

            setCopied(true);

            window.setTimeout(() => {
                setCopied(false);
            }, 1800);
        } catch {
            setCopied(false);
        }
    }

    async function handleShare() {
        const shareText =
            `BizBize'de bana katıl! Davet kodum: ${INVITE_CODE}`;

        if (navigator.share) {
            await navigator.share({
                title: "BizBize Davet Kodu",
                text: shareText,
            });

            return;
        }

        await navigator.clipboard.writeText(shareText);
        setCopied(true);

        window.setTimeout(() => {
            setCopied(false);
        }, 1800);
    }

    return (
        <article className="relative rounded-[24px] border border-white bg-white/90 p-6 shadow-[0_18px_50px_rgba(67,45,104,0.06)]">
            <h1 className="text-[23px] font-extrabold tracking-[-0.03em] text-heading">
                Partnerini Davet Et
            </h1>

            <p className="mt-2 max-w-[410px] text-[14px] leading-[1.6] text-[#81798d]">
                Aşağıdaki davet kodunu nişanlına gönder.
                Kod ile sana bağlanarak birlikte oynamaya
                başlayabilirsiniz.
            </p>

            <div className="mt-5 flex h-[64px] overflow-hidden rounded-[14px] border border-[#e4deec] bg-[#fdfcff]">
                <div className="flex flex-1 items-center justify-center">
                    <span className="text-[27px] font-extrabold tracking-[0.18em] text-[#1e1934]">
                        {INVITE_CODE}
                    </span>
                </div>

                <button
                    type="button"
                    onClick={handleCopy}
                    aria-label="Davet kodunu kopyala"
                    className="flex w-[68px] items-center justify-center bg-gradient-to-br from-[#8e39ee] to-[#6449dd] text-white transition hover:brightness-105"
                >
                    {copied ? (
                        <Check size={25} strokeWidth={2.2} />
                    ) : (
                        <Copy size={25} strokeWidth={2} />
                    )}
                </button>
            </div>

            <button
                type="button"
                onClick={handleCopy}
                className="mt-3 flex h-[48px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#8b38ed] to-[#6846df] text-[14px] font-bold text-white shadow-[0_11px_25px_rgba(110,66,218,0.2)] transition hover:-translate-y-0.5"
            >
                {copied ? "Kod Kopyalandı" : "Kodu Kopyala"}
            </button>

            <button
                type="button"
                onClick={handleShare}
                className="mt-3 flex h-[46px] w-full items-center justify-center gap-2 rounded-xl border border-[#dcd4e8] bg-white text-[14px] font-bold text-[#7046d9] transition hover:border-primary/40 hover:bg-primary/5"
            >
                <Share2 size={17} />
                Kodu Paylaş
            </button>

            <div className="mt-4 flex items-center gap-2 text-[12px] text-[#777083]">
                <Info
                    size={16}
                    className="shrink-0 text-[#746c96]"
                />

                <span>
                    Bu kod yalnızca bir kez kullanılabilir.
                </span>
            </div>
        </article>
    );
}