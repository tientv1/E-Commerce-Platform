export default function Account() {
    return (
        <div className="flex-1 w-full max-w-[1440px] mx-auto">
            <div className="grid grid-cols-2 h-full">
                <div className="">Top sản phẩm đang sale</div>
                <div className="flex flex-col justify-center">
                    <div className="login-form">
                        <h1>Đăng nhập</h1>
                        <label htmlFor="">Nhập số điện thoại</label>
                        <input type="text" placeholder="Nhập số điện thoại" />
                    </div>
                </div>
            </div>
        </div>
    );
}
