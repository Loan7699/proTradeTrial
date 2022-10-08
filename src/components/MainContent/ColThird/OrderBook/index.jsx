import { useState, useEffect } from 'react'
import { FaMinus, FaSyncAlt } from 'react-icons/fa'
import InDay from './InDay'
import Condition from './Condition'
import axios from 'axios'

function OrderBook({ handleShow, dataBuy, dataSell }) {
    const [option, setOption] = useState("asset1")
    const [orderDatas, setOrderDatas] = useState([])
    const username = localStorage.getItem('name')

    useEffect(() => {
        axios.get(`https://dertrial-api.vndirect.com.vn/demotrade/orders?username=${username}`)
        .then(res => setOrderDatas(res.data))  
    }, [dataBuy, dataSell])

    return (
        <div className='flex-1 m-px overflow-auto bg-[#2f3240]'>
            <div className='flex items-center justify-between leading-[2.5rem] border-b border-solid border-[#444444]'>
                    <div id='asset1' className={`text-xs leading-[2.5rem] ml-10 ] cursor-pointer ${option === 'asset1' && "active"}`} onClick={(e)=> setOption(e.target.id)}>Lệnh trong ngày</div>
                    <div id='asset2' className={`text-xs leading-[2.5rem] cursor-pointer ${option === 'asset2' && "active"}`}onClick={(e) => setOption(e.target.id)}>Lệnh điều kiện</div>
                <div className='flex'>
                    <FaSyncAlt className='mx-2 text-[#f7941d]'/>
                    <FaMinus className='mx-2 text-[#f7941d]' onClick={handleShow}/>
                </div>
            </div>
            { option === "asset1" && <InDay orderDatas={orderDatas} setOrderDatas={setOrderDatas} dataBuy={dataBuy} dataSell={dataSell}/>}
            { option === "asset2" && <Condition />}
        </div>
    )
}
export default OrderBook