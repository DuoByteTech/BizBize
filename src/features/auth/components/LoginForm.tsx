import { useState, type FormEvent } from "react";
import {
    Eye,
    EyeOff,
    LockKeyhole,
    Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(true);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Supabase giriş işlemini daha sonra burada yapacağız.
    }

    return (
        <div className="w-full max-w-[470px] rounded-[28px] border border-white/80 bg-white/85 px-8 py-9 shadow-[0_20px_70px_rgba(77,46,122,0.08)] backdrop-blur-sm sm:px-10">
            <div className="mb-7 text-center">
                <h1 className="text-[29px] font-extrabold tracking-[-0.03em] text-[#1d1635]">
                    Giriş Yap
                </h1>

                <p className="mt-2 w-full text-center text-[15px] leading-6 text-[#8a8498]">
                    Kendi hesabına giriş yaparak kaldığın
                    <br />
                    yerden devam et.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >
                <div className="relative">
                    <Mail
                        size={19}
                        strokeWidth={2}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#76718d]"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="E-posta adresiniz"
                        autoComplete="email"
                        className="h-[52px] w-full rounded-xl border border-[#e7e3ee] bg-[#fbfaff] pl-12 pr-4 text-[14px] font-medium text-[#211a37] outline-none transition placeholder:text-[#aaa5b7] focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                </div>

                <div className="relative">
                    <LockKeyhole
                        size={19}
                        strokeWidth={2}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#76718d]"
                    />

                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Parolanız"
                        autoComplete="current-password"
                        className="h-[52px] w-full rounded-xl border border-[#e7e3ee] bg-[#fbfaff] pl-12 pr-12 text-[14px] font-medium text-[#211a37] outline-none transition placeholder:text-[#aaa5b7] focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />

                    <button
                        type="button"
                        onClick={() =>
                            setShowPassword((value) => !value)
                        }
                        aria-label={
                            showPassword
                                ? "Parolayı gizle"
                                : "Parolayı göster"
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#aaa5b7] transition hover:text-primary"
                    >
                        {showPassword ? (
                            <EyeOff size={18} />
                        ) : (
                            <Eye size={18} />
                        )}
                    </button>
                </div>

                <div className="flex items-center justify-between gap-4 pt-1">
                    <label className="flex cursor-pointer items-center gap-2.5 text-[13px] font-medium text-[#716b80]">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(event) =>
                                setRememberMe(event.target.checked)
                            }
                            className="peer sr-only"
                        />

                        <span className="flex h-[18px] w-[18px] items-center justify-center rounded-[5px] border border-[#cfc9dc] bg-white transition peer-checked:border-primary peer-checked:bg-primary">
                            {rememberMe && (
                                <svg
                                    viewBox="0 0 20 20"
                                    className="h-3 w-3 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.7"
                                >
                                    <path
                                        d="M4 10.5 8 14l8-9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}
                        </span>

                        Beni hatırla
                    </label>

                    <Link
                        to="/parolami-unuttum"
                        className="text-[13px] font-semibold text-[#7046d9] underline decoration-[#7046d9]/40 underline-offset-4 transition hover:text-[#572fc3]"
                    >
                        Parolamı unuttum?
                    </Link>
                </div>

                <button
                    type="submit"
                    className="mt-3 flex h-[53px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#f4539a] to-[#b33cda] text-[15px] font-bold text-white shadow-[0_12px_28px_rgba(218,74,157,0.22)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(218,74,157,0.28)] active:translate-y-0"
                >
                    Giriş Yap
                </button>
            </form>

            <p className="mt-8 text-center text-[14px] font-medium text-[#6f687d]">
                Hesabın yok mu?{" "}
                <Link
                    to="/kayit"
                    className="font-bold text-[#7046d9] underline decoration-[#7046d9]/40 underline-offset-4 transition hover:text-[#572fc3]"
                >
                    Kayıt Ol
                </Link>
            </p>
        </div>
    );
}