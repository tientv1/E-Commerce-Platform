import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex-1 w-full max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 gap-4 h-[100%] my-2">
                <div className="">
                    <div className="bg-white">
                        <div className="flex justify-between p-3">
                            <p>Gợi ý hôm nay</p>
                            <p>Xem thêm</p>
                        </div>
                        <div className="flex justify-between items-center w-[100%] gap-4">
                            <button className="cursor-pointer p-2 rounded-[50%] shadow-xl">
                                <ChevronLeft width={20} height={20} />
                            </button>
                            <div className="w-[100%] flex flex-col justify-center items-center gap-2">
                                <Image
                                    src={"/category-phone.png"}
                                    alt=""
                                    width={75}
                                    height={75}
                                />
                                <p className="break-all text-center text-sm pb-2">
                                    Điện thoại
                                </p>
                            </div>
                            <div className="w-[100%] flex flex-col justify-center items-center gap-2">
                                <Image
                                    src={"/category-phone.png"}
                                    alt=""
                                    width={75}
                                    height={75}
                                />
                                <p className="break-all text-center text-sm pb-2">
                                    Điện thoại
                                </p>
                            </div>
                            <div className="w-[100%] flex flex-col justify-center items-center gap-2">
                                <Image
                                    src={"/category-phone.png"}
                                    alt=""
                                    width={75}
                                    height={75}
                                />
                                <p className="break-all text-center text-sm pb-2">
                                    Điện thoại
                                </p>
                            </div>
                            <div className="w-[100%] flex justify-center">
                                5
                            </div>
                            <div className="w-[100%] flex justify-center">
                                6
                            </div>
                            <div className="w-[100%] flex justify-center">
                                7
                            </div>
                            <div className="w-[100%] flex justify-center">
                                8
                            </div>
                            <div className="w-[100%] flex justify-center">
                                9
                            </div>
                            <div className="cursor-pointer p-2 rounded-[50%] shadow-xl">
                                <ChevronRight width={20} height={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
