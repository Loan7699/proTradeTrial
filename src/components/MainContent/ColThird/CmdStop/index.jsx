function CmdStop() {
    return (
        <>
            <div className="pb-[5px] h-[2.5rem] leading-[2.1875rem]">
                <label className="pl-2.5 w-[8.125rem] inline-block">Mã HĐTL: </label>
                {/* <input type="text" placeholder='Mã' className="w-60 rounded h-[1.875rem] px-[5px] text-[#333333] outline-none" /> */}
                <select required className="w-60 rounded h-[1.875rem] px-[5px] outline-none text-[#333333]">
                    <option value="" disabled selected hidden className='placeholder'>Mã</option>
                    <option value="1">VN30F2210</option>
                    <option value="2">VN30F2211</option>
                    <option value="3">VN30F2212</option>
                    <option value="4">VN30F2303</option>
                </select>
            </div>
            <div className="pb-[5px] h-[2.5rem] leading-[2.1875rem]">
                <label className="pl-2.5 w-[8.125rem] inline-block">Giá đặt: </label>
                <input type="text" placeholder='Giá' className="w-60 rounded h-[1.875rem] px-[5px] text-[#333333] outline-none" />

            </div>
            <div className="pb-[5px] h-[2.5rem] leading-[2.1875rem]">
                <label className="pl-2.5 w-[8.125rem] inline-block">Khối lượng: </label>
                <input type="text" placeholder='KL' className="w-60 rounded h-[1.875rem] px-[5px] text-[#333333] outline-none" />
            </div>
            <div className="pb-[5px] h-[2.5rem] leading-[2.1875rem] flex">
                <label className="pl-2.5 w-[8.125rem]">Khi giá khớp: </label>
                <div className="flex items-center">
                    <a className="w-[30px] h-[30px] bg-[#f7941d] rounded-[3px] leading-[30px] text-center border border-solid border-[#ffffff] mr-1.5">≤</a>
                    <a className="w-[30px] h-[30px] bg-[#929292] rounded-[3px] leading-[30px] text-center border border-solid border-[#ffffff] mr-5">≥</a>
                </div>
                <div>
                    <input type="text" placeholder='Giá kích hoạt' className="w-[155px] rounded h-[1.875rem] px-[5px] text-[#333333] outline-none" />
                </div>
            </div>
            <div className="pb-[5px] h-[2.5rem] leading-[2.1875rem]">
                <label className="pl-2.5 w-[8.125rem] inline-block">Ngày hết hạn: </label>
                <input type="text" placeholder='Ngày hết hạn' className="w-60 rounded h-[1.875rem] px-[5px] text-[#333333] outline-none" />
            </div>
            <div className="flex py-[5px] h-[2.8125rem] justify-center">
                <button className="w-[110px] h-[30px] mx-[5px] rounded-[5px] cursor-pointer text-sm font-bold bg-[green]">MUA</button>
                <button className="w-[110px] h-[30px] mx-[5px] rounded-[5px] cursor-pointer text-sm font-bold bg-[red]">BÁN</button>
                {/* <div className="h-[2.5rem] py-[5px] pl-1 cursor-pointer">
                        <input type="checkbox" />
                        <label className="pl-[3px]">Lưu lệnh</label>
                    </div> */}
            </div>
        </>
    )
}
export default CmdStop

// 1. ấn mua - post: Request URL: https://dertrial-api.vndirect.com.vn/demotrade/orders
// payload: {side: "NB", symbol: "VN30F2210", priceType: "ATO", quantity: 1, price: 0, userName: "phuong_loan"}
// {"side": "NB", "symbol": "VN30F2210", "priceType": "ATO", "quantity": 1, "price": 0, "userName": "phuong_loan"}

// 2. get: Request URL: https://dertrial-api.vndirect.com.vn/demotrade/assets?username=phuong_loan
// username: phuong_loan

// get: Request URL: https://dertrial-api.vndirect.com.vn/demotrade/orders?username=phuong_loan