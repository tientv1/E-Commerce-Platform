// import { useState } from "react";
import LoginForm from "./LoginForm";
import SocialLogin from "./SocialLogin";

export const metadata = {
    title: "Đăng nhập - TT E-Commerce",
};

export default function Login() {
    // Tạo từng bước đăng nhập bằng số điện thoại
    // const [step, setStep] = useState<1 | 2>(1);
    // const [phone, setPhone] = useState("");

    return (
        <div className="flex-1 w-full max-w-[1440px] mx-auto">
            <div className="grid grid-cols-2 h-full gap-4">
                <div className="">Top sản phẩm đang sale</div>
                <div className="flex flex-col justify-center items-center">
                    <div className="p-10 max-w-[500px] w-full rounded-[10px] bg-white shadow-xl">
                        <LoginForm />
                        <div className="socials-login mt-20">
                            <div className="relative mb-6 text-center">
                                <hr className="border-[#dddde3]" />
                                <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-sm text-[#808089] z-20">
                                    Hoặc đăng nhập bằng
                                </p>
                            </div>
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
