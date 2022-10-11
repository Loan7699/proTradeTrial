import axios from 'axios'
import { FaArrowCircleUp } from 'react-icons/fa'
import { GrFormClose } from 'react-icons/gr'
import { useState, useEffect } from 'react'

const formatNumber = (e) => e.toFixed().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

function Popup({ setShowPopup }) {
    const [userRank, setUserRank] = useState([])

    useEffect(() => {
        axios.get("https://dertrial-api.vndirect.com.vn/demotrade/assets")
            .then(res => {
                setUserRank(res.data.sort((a, b) => b.netAssetValue - a.netAssetValue))
            }
            )

        setInterval(() => {
            axios.get("https://dertrial-api.vndirect.com.vn/demotrade/assets")
                .then(res => {
                    setUserRank(res.data.sort((a, b) => b.netAssetValue - a.netAssetValue))
                }
                )
        }, 1000)
    }, [])

    console.log(userRank);

    return (
        <div>
            <div className="w-full h-ful fixed top-0 left-0 right-0 bottom-0 z-10" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}></div>
            <div className="w-[900px] h-[640px] fixed top-1/2 left-1/2 mt-[-320px] mb-[-470px] rounded-2.5 p-2.5 bg-[#F2F2F2] border border-solid border-[rgb(136, 136, 136)] overflow-hidden z-50 mt-[-320px] ml-[-470px]">
                <span className='cursor-pointer text-[23px] absolute top-2.5 right-2.5' onClick={() => setShowPopup(false)}><GrFormClose /></span>
                <div className="flex mt-5 justify-between">
                    <div className=" w-[48%] px-[1%] text-[#ffffff]">
                        <div>
                            <img src="https://protrade-trial.vndirect.com.vn/static/media/top-derivative.bb0daf79.png" className="h-[130px] mx-auto" />
                        </div>
                        <div className="text-[22px] leading-[1.75rem] text-[#6c1b72] mt-2.5 font-bold">BẢNG XẾP HẠNG THÁNG</div>
                        <div className="py-5 px-2.5">
                            <div className=' h-[25px] leading-[25px] text-[#f7941d] relative flex justify-between px-2.5'>
                                <span className='pl-[25px]'>CAO THỦ PHÁI SINH</span>
                                <span className='text-[#707070] text-[9px]'>Đơn vị: VND</span>
                                <span className='text-[#00de1e] text-[11px] absolute right-2.5 top-[-15px] flex items-center'>
                                    <FaArrowCircleUp className='mr-1' />
                                    NAV
                                </span>
                            </div>
                            {userRank.slice(0, 3).map((user, index) =>
                                <div className='bg-img item flex justify-start' key={index}>
                                    <span className='absolute top-[-8px] left-[-20px]'>
                                        <img src={`/images/download${index}.png`} className='h-[40px]' />
                                    </span>
                                    <span className={`font-bold block ml-8 ${index == 0 && 'active'}`}>{user.username}</span>
                                    <span className={`ml-auto ${index == 0 && 'active'}`}>{formatNumber(user.netAssetValue)}</span>
                                </div>
                            )}

                            <div className='rounded-[5px] bg-other h-[180px] p-[5px] overflow-y-auto hidden-scrollbar'>
                                {userRank.slice(3, 10).map((user, index) =>
                                    <div className='item-other item flex justify-between font-bold' key={index}>
                                        <span>{user.username}</span>
                                        <span>{formatNumber(user.netAssetValue)}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="h-[30px] text-center bg-img w-[300px] mx-auto rounded-[15px]">
                            <a className="w-[300px] leading-[30px]">THAM GIA NGAY TẠI ĐÂY</a>
                        </div>
                    </div>
                    <div className=" w-[48%] px-[1%]">
                        <div className='text-[22px] text-[#ff8000] font-bold text-center leading-[28px]'>BẢNG XẾP HẠNG TUẦN</div>
                        <div className='text-xs text-[#616161] text-center leading-[20px] pb-[15px]'>(Từ 8h00 thứ 2 đến 15H00 thứ 6 hàng tuần)</div>
                        <div className='w-full h-[470px] rounded-[5px] bg-right py-5'>
                            <div className=' h-[25px] leading-[25px] text-[#f7941d] relative flex justify-between px-2.5'>
                                <span className='pl-[25px]'>CAO THỦ PHÁI SINH</span>
                                <span className='text-[#707070] text-[9px]'>Đơn vị: VND</span>
                                <span className='text-[#00de1e] text-[11px] absolute right-2.5 top-[-15px] flex items-center'>
                                    <FaArrowCircleUp className='mr-1' />
                                    NAV
                                </span>
                            </div>

                            {userRank.slice(0, 3).map((user, index) =>
                                <div className='item bg-top flex justify-between text-[#ffffff] font-bold' style={{ padding: "0 16px" }}>
                                    <span>{user.username}</span>
                                    <span>{formatNumber(user.netAssetValue)}</span>
                                </div>
                            )}

                            <div className='p-[5px] h-72 hidden-scrollbar overflow-auto'>
                                {userRank.slice(3, 23).map((user, index) =>
                                    <div className='item border-b border-solid border-[#eeeeee] flex justify-between'>
                                        <span className='font-bold' style={{ color: "rgb(51, 51, 51)" }}>{user.username}</span>
                                        <span className='' style={{ color: "rgb(100, 100, 100)" }}>{formatNumber(user.netAssetValue)}</span>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup