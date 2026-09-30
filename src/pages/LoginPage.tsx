import { Heart } from "lucide-react";

import { LoginForm } from "@/features/auth/components/LoginForm";

export function LoginPage() {
    return (
        <section className="relative flex min-h-screen overflow-hidden bg-[radial-gradient(circle_at_center,#ffffff_0%,#fbf8ff_48%,#f0e8ff_100%)] px-5 py-8 sm:px-8">
            <div className="pointer-events-none absolute left-[-180px] top-[-150px] h-[420px] w-[420px] rounded-full bg-purple-200/30 blur-[90px]" />

            <div className="pointer-events-none absolute bottom-[-180px] right-[-180px] h-[480px] w-[480px] rounded-full bg-pink-200/30 blur-[100px]" />

            <div className="relative mx-auto flex w-full max-w-[1500px] flex-col items-center">
                <div className="mb-7 flex items-center gap-3 pt-1 sm:mb-8">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#f4539a] to-[#b33cda]">
                        <Heart
                            size={25}
                            fill="white"
                            className="text-white"
                        />
                    </span>

                    <span className="text-[28px] font-black text-[#251744]">
                        BizBize
                    </span>
                </div>

                <div className="relative grid w-full flex-1 grid-cols-1 items-center lg:grid-cols-[1fr_520px_1fr]">
                    <div className="hidden h-full items-center justify-center lg:flex">
                        <div className="-rotate-6 text-center">
                            <p className="font-[cursive] text-[27px] font-semibold leading-[1.45] text-[#e84f9a]">
                                Güzel
                                <br />
                                sorular,
                                <br />
                                daha güzel
                                <br />
                                cevaplar
                            </p>

                            <Heart
                                size={34}
                                className="mx-auto mt-4 text-[#e84f9a]"
                            />
                        </div>
                    </div>

                    <div className="z-10 flex items-center justify-center">
                        <LoginForm />
                    </div>

                    <div className="hidden h-full items-center justify-center lg:flex">
                        <div className="relative h-[170px] w-[210px]">
                            <Heart
                                size={125}
                                strokeWidth={2}
                                className="absolute left-0 top-4 -rotate-6 text-[#7a3db5]"
                            />

                            <Heart
                                size={105}
                                strokeWidth={2}
                                className="absolute bottom-0 right-0 rotate-6 text-[#7a3db5]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}