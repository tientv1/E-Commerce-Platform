"use client";

import phone from "phone";
import { useState } from "react";

export default function LoginForm() {
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    };

    const [phoneNumber, setPhoneNumber] = useState("");
    const [step, setStep] = useState<"enter-phone" | "enter-otp">(
        "enter-phone"
    );
    const [err, setErr] = useState("");

    const isValidPhoneNumber = (input: string): boolean => {
        const result = phone(input, { country: "VNM" });
        return result.isValid;
    };

    const handleVerifyOtp = async () => {
        if (!isValidPhoneNumber(phoneNumber)) {
            setStep("enter-phone");
            setErr("Sai định dạng số điện thoại");
            return;
        }
        setStep("enter-otp");
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="header-form mb-3">
                <h1 className="text-3xl mb-1 font-bold">Xin chào !</h1>
                <p className="text-[14px]">
                    {step === "enter-otp" && (
                        <>
                            Vui lòng nhập mã xác thực của số
                            <strong> {phoneNumber}</strong>
                        </>
                    )}
                    {step === "enter-phone" && (
                        <>Đăng ký và đăng nhập bằng số điện thoại</>
                    )}
                </p>
            </div>
            {step === "enter-phone" && (
                <>
                    <input
                        onChange={(e) => {
                            setPhoneNumber(e.target.value);
                        }}
                        autoComplete="tel"
                        name="phone"
                        type="text"
                        placeholder="Số điện thoại"
                        className="focus:outline-none outline-none flex-0 focus:text-[#02735E] focus:border-[#02735E] py-2 border-b-1 border-[#dddde3] text-[#808089] text-2xl leading-[1.5]"
                    />
                    {err && <i className="text-sm text-red-500 mt-2">{err}</i>}
                    <button
                        onClick={handleVerifyOtp}
                        className="mt-8 bg-red-500/90 p-2 rounded-[5px] text-2xl text-white cursor-pointer focus:outline-none"
                    >
                        Đăng nhập
                    </button>
                </>
            )}
            {step === "enter-otp" && (
                <>
                    <input
                        autoComplete="tel"
                        name="phone"
                        type="text"
                        placeholder="Nhập mã xác nhận"
                        className="focus:outline-none outline-none  flex-0 focus:text-[#02735E] focus:border-[#02735E] py-2 border-b-1 border-[#dddde3] text-[#808089] text-2xl leading-[1.5]"
                    />
                    <button
                        type="submit"
                        className="mt-8 bg-red-500/90 p-2 rounded-[5px] text-2xl text-white cursor-pointer focus:outline-none"
                    >
                        Đăng nhập
                    </button>
                </>
            )}
        </form>
    );
}
