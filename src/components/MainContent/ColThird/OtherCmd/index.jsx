import ReactTooltip from 'react-tooltip';
import { useState, useEffect } from 'react'
import axios from 'axios';

function OtherCmd(props) {
    const [showCodeList, setShowCodeList] = useState(false)
    const [code, setCode] = useState('')
    const [price, setPrice] = useState('')
    const [weight, setWeight] = useState('')

    const dataSell = {
        side: "NS",
        symbol: code,
        priceType: price,
        quantity: Number(weight),
        price: 0,
        userName: localStorage.getItem('name')
    }

    const dataBuy = {
        side: "NB",
        symbol: code,
        priceType: price,
        quantity: Number(weight),
        price: 0,
        userName: localStorage.getItem('name')
    }

    const handleBuy = () => {
        axios.post("https://dertrial-api.vndirect.com.vn/demotrade/orders",
            {
                side: "NB",
                symbol: code,
                priceType: price,
                quantity: Number(weight),
                price: 0,
                userName: localStorage.getItem('name')
            }
        )
            .then(res => console.log(res))

            .catch(err => console.log(err.res))
    }

    const handleSell = () => {
        axios.post("https://dertrial-api.vndirect.com.vn/demotrade/orders",
            {
                side: "NS",
                symbol: code,
                priceType: price,
                quantity: Number(weight),
                price: 0,
                userName: localStorage.getItem('name')
            }
        )
            .then(res => console.log(res))

            .catch(err => console.log(err.res))
    }

    const codeList = ["VN30F2210", "VN30F2211", "VN30F2212", "VN30F2303"]

    return (
        <>
            <div className="pb-[5px] h-[2.5rem] leading-[2.1875rem] relative">
                <label className="pl-2.5 w-[8.125rem] inline-block">Mã HĐTL: </label>
                <input type="text" placeholder='Mã' className="w-60 rounded h-[1.875rem] px-[5px] text-[#333333] outline-none" value={code} onClick={() => {
                    setShowCodeList(true)
                    setCode('')
                }} />
                {
                    showCodeList &&
                    <ul className='bg-[#ffffff] text-[#333333] w-60 rounded-b absolute top-8 left-[130px]'>
                    {codeList.map((codeItem, index) =>
                        <li key={index} className="hover:bg-[#cccccc] pl-[5px]" onClick={() => {
                            setCode(codeItem)
                            setShowCodeList(false)
                        }}>{codeItem}</li>
                    )}
                </ul>
                }
                {/* <select required className="w-60 rounded h-[1.875rem] px-[5px] outline-none text-[#333333]" value={code} onChange={(e) => setCode(e.target.value)}>
                    <option value="" disabled selected hidden className='placeholder'>Mã</option>
                    <option value="VN30F2210">VN30F2210</option>
                    <option value="VN30F2211">VN30F2211</option>
                    <option value="VN30F2212">VN30F2212</option>
                    <option value="VN30F2303">VN30F2303</option>
                </select> */}
            </div>
            <div className="pb-[5px] h-[2.5rem] leading-[2.1875rem]">
                <label className="pl-2.5 w-[8.125rem] inline-block">Giá đặt: </label>
                <input type="text" placeholder='Giá' className="w-60 rounded h-[1.875rem] px-[5px] text-[#333333] outline-none" value={price} onChange={(e) => setPrice(e.target.value)} />

            </div>
            <div className="pb-[5px] h-[2.5rem] leading-[2.1875rem]">
                <label className="pl-2.5 w-[8.125rem] inline-block">Khối lượng: </label>
                <input type="text" placeholder='KL' className="w-60 rounded h-[1.875rem] px-[5px] text-[#333333] outline-none"
                    value={weight} onChange={(e) => setWeight(e.target.value)}
                    data-tip="<div><span>KL mua tối đa: 1 &nbsp;&nbsp;&nbsp;&nbsp;</span><span>KL bán tối đa: 1</span></div>"
                    data-html={true} data-for="sell"
                />

                <ReactTooltip type="dark" place='bottom' event='click' globalEventOff="click" backgroundColor="#444444" id='sell' data-id="tooltip" className='react-tooltip'>
                </ReactTooltip>
            </div>
            <div className="flex py-[5px] h-[2.8125rem] pl-[70px]">
                <button className="w-[110px] h-[30px] mx-[5px] rounded-[5px] cursor-pointer text-sm font-bold bg-[green]" onClick={handleBuy}>MUA</button>
                <button className="w-[110px] h-[30px] mx-[5px] rounded-[5px] cursor-pointer text-sm font-bold bg-[red]" onClick={handleSell}>BÁN</button>
                <div className="h-[2.5rem] py-[5px] pl-1 cursor-pointer">
                    <input type="checkbox" />
                    <label className="pl-[3px]">Lưu lệnh</label>
                </div>
            </div>
        </>
    )
}
export default OtherCmd