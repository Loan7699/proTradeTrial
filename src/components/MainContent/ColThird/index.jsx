import { useState } from 'react'
import OtherCmd from './OtherCmd';
import OrderBook from './OrderBook';
import Category from './Category'
import Asset from './Asset'
import CmdStop from './CmdStop';
import axios from 'axios';

function ColThird({ menu, handleShow }) {

    const listType = [
        {
            typeId: 1,
            key: 1,
            type: "Lệnh thường",
        },
        {
            typeId: 2,
            key: 2,
            type: "Lệnh Stop",
        },
        {
            typeId: 3,
            key: 1,
            type: "Lệnh trailing",
        },
        {
            typeId: 4,
            key: 1,
            type: "Lệnh OSO",
        },
    ];

    const [typeCmd, setTypeCmd] = useState(1)
    const [code, setCode] = useState('')
    const [priceType, setPriceType] = useState('')
    const [weight, setWeight] = useState('')
    const [dataBuy, setDataBuy] = useState('')
    const [dataSell, setDataSell] = useState('')

    const handleBuy = () => {
        axios.post("https://dertrial-api.vndirect.com.vn/demotrade/orders",
            {
                side: "NB",
                symbol: code,
                priceType,
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
                priceType,
                quantity: Number(weight),
                price: 0,
                userName: localStorage.getItem('name')
            }
        )
            .then(res => console.log(res))

            .catch(err => console.log(err.res))
    }

    return (
        <div className='w-[25rem] flex flex-col'>
            {/* render col trên  */}
            {menu === "1" && <OrderBook handleShow={handleShow} dataBuy={dataBuy} dataSell={dataSell}/>}
            {menu === "2" && <Category handleShow={handleShow} />}
            {menu === "3" && <Asset handleShow={handleShow} />}

            {/* render col dưới */}
            <div className="mx-px mb-px bg-[#2f3240]">
                <div className="pt-[15px] pb-[35px] text-left">
                    <ul className="flex items-center py-[5px] h-[2.8125rem]">
                        {listType.map((item) => (
                            <li key={item.typeId} onClick={() => setTypeCmd(item.key)} className="px-1.5 cursor-pointer">
                                <input
                                    type="radio"
                                    id={item.typeId}
                                    value="Normal"
                                    name="check"
                                    checked={typeCmd === item.typeId}
                                    className="mr-[3px]"
                                    disabled={item.typeId === 3 || item.typeId === 4}
                                />
                                <span>{item.type}</span>
                            </li>
                        ))}
                    </ul>
                    {typeCmd === 1 && <OtherCmd
                        handleSell={handleSell}
                        handleBuy={handleBuy}

                        code={code}
                        priceType={priceType}
                        weight={weight}
                        
                        setCode={setCode}
                        setPriceType={setPriceType}
                        setWeight={setWeight}
                        setDataBuy={setDataBuy}
                    />}
                    {typeCmd === 2 && <CmdStop />}
                </div>
            </div>

        </div>
    )
}

export default ColThird;