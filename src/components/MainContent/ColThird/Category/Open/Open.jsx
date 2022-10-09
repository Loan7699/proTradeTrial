import { useState, useEffect } from 'react'
import axios from 'axios'

function Open() {
    const [categoryDatas, setCategoryDatas] = useState([])

    useEffect(() => {
        axios.get("https://dertrial-api.vndirect.com.vn/demotrade/portfolio?username=phuong_loan&position=open")
            .then(res => {
                console.log(res.data)
                setCategoryDatas(res.data)
            })
    }, [])
    console.log(categoryDatas);

    return (
        <div>
            <table className="w-full ">
                <colgroup className="border-spacing-0 border-collapse" >
                    <col width="60px" className="table-column"></col>
                    <col width="40px" className="table-column"></col>
                    <col width="60px" className="table-column"></col>
                    <col width="60px" className="table-column"></col>
                    <col className="table-column" />
                    <col className="table-column" />
                </colgroup>

                <thead className="table-header-column h-[46px]">
                    <tr className="bg-[hsla(0,0%,47.1%,.15)]">
                        <th className="font-normal">Mã</th>
                        <th className="font-normal">KL</th>
                        <th className="font-normal">Giá vốn</th>
                        <th className="font-normal">Giá hiện tại</th>
                        <th className="font-normal">+/-</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody className="table-row-group align-middle">
                    {categoryDatas.length > 0
                        ?
                        <tr></tr>
                        :
                        <tr className="leading-[2rem] table-row">
                            <td colSpan="6" className="leading-[3.125rem] text-[#777777] text-[15px] ">Chưa có lệnh nào trong sổ lệnh</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Open

// get= https://dertrial-api.vndirect.com.vn/demotrade/portfolio?username=phuong_loan&position=open
// [{"username":"phuong_loan","symbol":"VN30F2210","quantity":2,"side":"Long","costPrice":1032.2}]

// delete: https://dertrial-api.vndirect.com.vn/demotrade/orders
// {orderID: 1665157893606, userName: "phuong_loan"}