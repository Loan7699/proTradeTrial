
import { useState, useRef } from 'react'

function OtherCmd(props) {
    const codeList = ["VN30F2210", "VN30F2211", "VN30F2212", "VN30F2303"]
    const priceTypeList = ["ATO", "ATC", "MTL", "MOK", "MAK"]

    const [showpriceTypeList, setShowPriceTypeList] = useState(false)
    const [showCodeList, setShowCodeList] = useState(false)
    const [showWeight, setShowWeight] = useState(false)
    // console.log(props.code, props.priceType, props.weight);

    return (
        <>
            <div className="pb-[5px] h-[2.5rem] leading-[2.1875rem] relative">
                <label className="pl-2.5 w-[8.125rem] inline-block">Mã HĐTL: </label>
                <input type="text" placeholder='Mã' className={`w-60 rounded h-[1.875rem] px-[5px] text-[#333333] outline-none ${showCodeList && 'rounded-b-none'}`} value={props.code} onClick={(e) => {
                    props.setCode(e.target.value)
                    setShowCodeList(true)
                }} />
                {
                    showCodeList &&
                    <ul className='bg-[#ffffff] text-[#333333] w-60 rounded-b absolute top-8 left-[130px] z-50'>
                        {codeList.map((codeItem, index) =>
                            <li key={index} className='hover:bg-[#cccccc] pl-[5px]' onClick={() => {
                                props.setCode(codeItem)
                                setShowCodeList(false)
                            }}>{codeItem}</li>
                        )}
                    </ul>
                }
            </div>
            <div className="pb-[5px] h-[2.5rem] leading-[2.1875rem] relative">
                <label className="pl-2.5 w-[8.125rem] inline-block">Giá đặt: </label>
                <input type="text" placeholder='Giá' className="w-60 rounded h-[1.875rem] px-[5px] text-[#333333] outline-none" value={props.priceType}
                    onClick={(e) => {
                        props.setPriceType(e.target.value)
                        setShowPriceTypeList(true)
                    }}
                />
                {
                    showpriceTypeList &&
                    <ul className='bg-[#544e4e] rounded-[5px] flex items-center w-[290px] absolute top-10 left-20 z-50'>
                        {priceTypeList.map((priceType, index) =>
                            <li key={index} className='border border-solid border-[#C0C0C0] rounded-[3px] m-[5px] h-[1.5rem] leading-[1.5rem] px-2.5'
                                onClick={() => {
                                    props.setPriceType(priceType)
                                    setShowPriceTypeList(false)
                                    console.log(props.priceType);
                                }}
                            >{priceType}</li>
                        )}
                    </ul>

                }
            </div>
            <div className="pb-[5px] h-[2.5rem] leading-[2.1875rem] relative">
                <label className="pl-2.5 w-[8.125rem] inline-block">Khối lượng: </label>
                <input type="text" placeholder='KL' className="w-60 rounded h-[1.875rem] px-[5px] text-[#333333] outline-none"
                    value={props.weight}
                    onClick={() => {
                        setShowWeight(true)
                    }}
                    onChange={(e) => {
                        props.setWeight(e.target.value)
                        setShowWeight(false)
                    }}
                />
                {showWeight &&
                    <ul className='bg-[#544e4e] rounded-[5px] flex items-center justify-between w-[290px] absolute top-10 left-20 px-3'>
                        <li>
                            <span>KL mua tối đa:</span>
                            <span className='text-[#f7941d] ml-1'>1</span>
                        </li>
                        <li>
                            <span>KL bán tối đa:</span>
                            <span className='text-[#f7941d] ml-1'>1</span>
                        </li>
                    </ul>
                }
            </div>
            <div className="flex py-[5px] h-[2.8125rem] pl-[70px]">
                <button className="w-[110px] h-[30px] mx-[5px] rounded-[5px] cursor-pointer text-sm font-bold bg-[green]" onClick={() => {
                    props.handleBuy()
                    props.setDataBuy(
                        {
                            side: "NB",
                            symbol: props.code,
                            priceType: props.priceType,
                            quantity: Number(props.weight),
                            price: 0,
                            userName: localStorage.getItem('name')
                        }
                    )
                }}>MUA</button>
                <button className="w-[110px] h-[30px] mx-[5px] rounded-[5px] cursor-pointer text-sm font-bold bg-[red]" onClick={() => {
                    props.handleSell()
                    props.setDataBuy(
                        {
                            side: "NS",
                            symbol: props.code,
                            priceType: props.priceType,
                            quantity: Number(props.weight),
                            price: 0,
                            userName: localStorage.getItem('name')
                        }
                    )
                }}>BÁN</button>
                <div className="h-[2.5rem] py-[5px] pl-1 cursor-pointer">
                    <input type="checkbox" />
                    <label className="pl-[3px]">Lưu lệnh</label>
                </div>
            </div>
        </>
    )
}
export default OtherCmd