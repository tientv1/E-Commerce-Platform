import Category from "./Category";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex-1 w-full max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 gap-4 my-2">
                <div className="">
                    <div className="bg-white rounded-t-xl">
                        <div className="flex justify-between p-3">
                            <p className="font-bold">Gợi ý hôm nay</p>
                        </div>
                        <Category />
                    </div>
                    <div className="mt-2 bg-white p-3 rounded-b-xl grid grid-cols-10 gap-4">
                        <div className="card border-1">
                            <div className="image-card ">
                                <Image
                                    src="/category-phone.png"
                                    alt=""
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <div className="px-2 pb-2">
                                <p className="break-words line-clamp-2 text-sm">
                                    ádádasasdasdasdasdasdasdasdasdasdasasd
                                </p>
                            </div>
                            <div>star</div>
                        </div>
                        <div className="card border-1">
                            <div className="image-card ">
                                <Image
                                    src="/category-phone.png"
                                    alt=""
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <div className="px-2 pb-2">
                                <p className="break-words line-clamp-2 text-sm">
                                    ádádasasdasdasdasdasdasdasdasdasdasasd
                                </p>
                            </div>
                            <div>star</div>
                        </div>
                        <div className="card border-1">
                            <div className="image-card ">
                                <Image
                                    src="/category-phone.png"
                                    alt=""
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <div className="px-2 pb-2">
                                <p className="break-words line-clamp-2 text-sm">
                                    ádádasasdasdasdasdasdasdasdasdasdasasd
                                </p>
                            </div>
                            <div>star</div>
                        </div>
                        <div className="card border-1">
                            <div className="image-card ">
                                <Image
                                    src="/category-phone.png"
                                    alt=""
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <div className="px-2 pb-2">
                                <p className="break-words line-clamp-2 text-sm">
                                    ádádasasdasdasdasdasdasdasdasdasdasasd
                                </p>
                            </div>
                            <div>star</div>
                        </div>
                        <div className="card border-1">
                            <div className="image-card ">
                                <Image
                                    src="/category-phone.png"
                                    alt=""
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <div className="px-2 pb-2">
                                <p className="break-words line-clamp-2 text-sm">
                                    ádádasasdasdasdasdasdasdasdasdasdasasd
                                </p>
                            </div>
                            <div>star</div>
                        </div>
                        <div className="card border-1">
                            <div className="image-card ">
                                <Image
                                    src="/category-phone.png"
                                    alt=""
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <div className="px-2 pb-2">
                                <p className="break-words line-clamp-2 text-sm">
                                    ádádasasdasdasdasdasdasdasdasdasdasasd
                                </p>
                            </div>
                            <div>star</div>
                        </div>
                        <div className="card border-1">
                            <div className="image-card ">
                                <Image
                                    src="/category-phone.png"
                                    alt=""
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <div className="px-2 pb-2">
                                <p className="break-words line-clamp-2 text-sm">
                                    ádádasasdasdasdasdasdasdasdasdasdasasd
                                </p>
                            </div>
                            <div>star</div>
                        </div>
                        <div className="card border-1">
                            <div className="image-card ">
                                <Image
                                    src="/category-phone.png"
                                    alt=""
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <div className="px-2 pb-2">
                                <p className="break-words line-clamp-2 text-sm">
                                    ádádasasdasdasdasdasdasdasdasdasdasasd
                                </p>
                            </div>
                            <div>star</div>
                        </div>
                        <div className="card border-1">
                            <div className="image-card ">
                                <Image
                                    src="/category-phone.png"
                                    alt=""
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <div className="px-2 pb-2">
                                <p className="break-words line-clamp-2 text-sm">
                                    ádádasasdasdasdasdasdasdasdasdasdasasd
                                </p>
                            </div>
                            <div>star</div>
                        </div>
                        <div className="card border-1">
                            <div className="image-card ">
                                <Image
                                    src="/category-phone.png"
                                    alt=""
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <div className="px-2 pb-2">
                                <p className="break-words line-clamp-2 text-sm h-[40px]">
                                    ádádasasdasda
                                </p>
                            </div>
                            <div>star</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
