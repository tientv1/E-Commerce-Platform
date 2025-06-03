import Category from "./Category";
import ProductCard from "./ProductCard";

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
                    <div className="mt-2 bg-white p-3 rounded-b-xl grid grid-cols-8 gap-4">
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    );
}
