import BrandIcon from "../common/Logo";
import Search from "../common/Search";
import Button from "../common/Button";
import { ShoppingCart } from "lucide-react";
import { CircleUserIcon } from "lucide-react";

export default function Header() {
    return (
        <header className="w-[100%] flex justify-center py-2 border-b-1 border-[#dddde3] shrink bg-white">
            <div className="w-full max-w-[1440px] flex items-center gap-12">
                <div className="brand-icon">
                    <BrandIcon />
                </div>
                <div className="header-right w-full flex items-center gap-3">
                    <Search />
                    <Button
                        url="/cart"
                        text="Giỏ hàng"
                        icon={<ShoppingCart size={20} />}
                    />
                    <Button
                        url="/login"
                        text="Tài khoản"
                        icon={<CircleUserIcon size={20} />}
                    />
                </div>
            </div>
        </header>
    );
}
