import { Heart } from "lucide-react";

import { RegisterForm } from "@/features/auth/components/RegisterForm";

export function RegisterPage() {
    return (
        <section className="relative flex min-h-screen overflow-hidden bg-[radial-gradient(circle_at_center,#ffffff_0%,#fbf8ff_48%,#f0e8ff_100%)] px-5 py-8 sm:px-8">
            <div className="pointer-events-none absolute left-[-180px] top-[-150px] h-[420px] w-[420px] rounded-full bg-purple-200/30 blur-[90px]" />

            <div className="pointer-events-none absolute bottom-[-180px] right-[-180px] h-[480px] w-[480px] rounded-full bg-pink-200/30 blur-[100px]" />

            <div className="relative mx-auto flex w-full max-w-[1500px] flex-col items-center">
                <div className="mb-7 flex items-center gap-3 pt-1 sm:mb-8">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#f4539a] to-[#b33cda] shadow-[0_7px_18px_rgba(218,74,157,0.25)]">
                        <Heart
                            size={25}
                            strokeWidth={2}
                            fill="white"
                            className="text-white"
                        />
                    </span>

                    <span className="text-[28px] font-black tracking-[-0.04em] text-[#251744]">
                        BizBize
                    </span>
                </div>

                <div className="relative grid w-full flex-1 grid-cols-1 items-center lg:grid-cols-[1fr_520px_1fr]">
                    <div className="relative hidden h-full items-center justify-center lg:flex">
                        <div className="-translate-y-6 -rotate-6 text-center">
                            <p className="font-[cursive] text-[27px] font-semibold leading-[1.45] text-[#7355aa]">
                                İyi
                                <br />
                                oyunlar,
                                <br />
                                daha iyi
                                <br />
                                sohbetler
                            </p>

                            <Heart
                                size={33}
                                strokeWidth={1.8}
                                className="mx-auto mt-4 text-[#7355aa]"
                            />
                        </div>
                    </div>

                    <div className="z-10 flex items-center justify-center">
                        <RegisterForm />
                    </div>

                    <div className="relative hidden h-full items-center justify-center lg:flex">
                        <div className="-translate-y-3 rotate-3 text-center">
                            <Heart
                                size={140}
                                strokeWidth={1.4}
                                fill="#ffd8e8"
                                className="mx-auto mb-5 text-[#ffd8e8]"
                            />

                            <p className="font-[cursive] text-[28px] font-semibold leading-[1.45] text-[#f25d87]">
                                Sen
                                <br />
                                +
                                <br />
                                Ben
                                <br />
                                =
                                <br />
                                Biz ♡
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex items-center justify-center gap-10 lg:hidden">
                    <p className="-rotate-6 font-[cursive] text-lg font-semibold leading-6 text-[#7355aa]">
                        İyi oyunlar,
                        <br />
                        daha iyi sohbetler ♡
                    </p>

                    <p className="rotate-3 font-[cursive] text-xl font-semibold leading-6 text-[#f25d87]">
                        Sen + Ben
                        <br />
                        = Biz ♡
                    </p>
                </div>
            </div>
        </section>
    );
}