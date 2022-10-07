import { useState } from 'react'
import OtherCmd from './OtherCmd';
import OrderBook from './OrderBook';
import Category from './Category'
import Asset from './Asset'
import CmdStop from './CmdStop';

function ColThird({ menu, handleShow }) {
    const [typeCmd, setTypeCmd] = useState(1)

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

    return (
        <div className='w-[25rem] flex flex-col'>
            {/* render col trên  */}
            {menu === "1" && <OrderBook handleShow={handleShow} />}
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
                        {/* <li className="px-1.5 cursor-pointer">
                            <input type='radio' name="asset" id="ass1" value='aseset 1' className="mr-[3px]" onClick={setTypeCmd("1")} />
                            <label htmlFor="ass1">Lệnh thường</label>
                        </li>
                        <li className="px-1.5 cursor-pointer">
                            <input type='radio' name="asset" id="ass2" value='aseset 1' className="mr-[3px]" onClick={setTypeCmd("2")} />
                            <label htmlFor="ass2">Lệnh Stop</label>
                        </li>

                        <li className="px-1.5 cursor-pointer" >
                            <input type='radio' name="asset" id="ass3" value='aseset 1' className="mr-[3px]" onClick={setTypeCmd("1")} />
                            <label htmlFor="ass3">Lệnh trailing</label>
                        </li>
                        <li className="px-1.5 cursor-pointer" >
                            <input type='radio' name="asset" id="ass4" value='aseset 1' className="mr-[3px]" onClick={setTypeCmd("1")} />
                       
                            <label htmlFor="ass4">Lệnh OSO</label>
                        </li> */}
                    </ul>
                    {typeCmd === 1 && <OtherCmd />}
                    {typeCmd === 2 && <CmdStop />}
                </div>
            </div>

        </div>
    )
}

export default ColThird;