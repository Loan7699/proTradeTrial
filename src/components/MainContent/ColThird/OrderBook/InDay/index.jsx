import { FaMinusCircle, FaHourglassStart, FaCheckCircle, FaTrashAlt, FaTimesCircle } from 'react-icons/fa'
import ReactTooltip from 'react-tooltip'

function InDay({ orderData }) {
    return (
        <div>
            <table className="w-full border-spacing-0 border-collapse">
                <colgroup className="table-column-group">
                    <col width="20px" className="table-column"></col>
                    <col width="50px" className="table-column"></col>
                    <col width="90px" className="table-column"></col>
                    <col width="70px" className="table-column"></col>
                    <col width="60px" className="table-column"></col>
                    <col width="30px" className="table-column"></col>
                </colgroup>

                <thead className="table-header-column align-middle">
                    <tr className="leading-[2rem] bg-[hsla(0,0%,47.1%,.15)] text-left">
                        <th className=""></th>
                        <th className="">Lệnh</th>
                        <th className="">Mã</th>
                        <th className="">KL khớp</th>
                        <th className="">Giá</th>
                        <th className="">TT</th>
                        <th className=""></th>
                    </tr>
                </thead>

                <tbody className="table-row-group align-middle">
                    {orderData.length
                        ?
                        // {
                        orderData.map((orderData, index) =>
                            <tr className="leading-[2rem] table-row text-left" key={index}>
                                {orderData.status == 'New' || orderData.status == 'PendingNew' ? <td className="min-w-[20px] table-cell"><input type='checkbox' className='m-[3px]' /></td> : <td className="min-w-[20px] table-cell"></td>}
                                {orderData.side == "NB" ? <td className="table-cell text-[#0f0]">Mua</td> : <td className="table-cell text-[#ff4747]">Bán</td>}
                                <td className="table-cell">{orderData.symbol}</td>
                                {orderData.matchedQuantity === 0
                                    ?
                                    <td className="text-center table-cell">
                                        <span className="text-[#f7941d]">0/</span>
                                        <span>{orderData.quantity}</span>
                                    </td>
                                    :
                                    <td className="text-center table-cell">
                                        <span>{orderData.quantity}</span>
                                    </td>
                                }

                                <td className="table-cell">{orderData.orderType}</td>
                                <td className="table-cell">
                                    {(orderData.status === "New" || orderData.status === "PendingNew") && <FaHourglassStart className='text-[#f7941d] m-[3px]' data-tip="Chờ gửi lên sàn" data-for="hour" />}
                                    {(orderData.status === "Rejected") && <FaMinusCircle className='text-[#d80027] m-[3px]' data-tip="Hệ thống Demo không hỗ trợ đặt lệnh giá này (FDS-079)" data-for="reject" />}
                                    {(orderData.status === "Filled") && <FaCheckCircle className='text-[#43a038]  m-[3px]' data-tip="Khớp" data-for="check" />}
                                    {(orderData.status === "Cancelled") && <FaTrashAlt className='text-[#af449c] m-[3px]' data-tip="Hủy thành công" data-for="trash" />}

                                    <ReactTooltip place='top' type="light" id='hour' data-id="hour" className='react-tooltip'></ReactTooltip>
                                    <ReactTooltip place='top' type="light" id='check' data-id="check" className='react-tooltip'>
                                    </ReactTooltip>
                                    <ReactTooltip place='top' type="light" id='trash' data-id="trash" className='react-tooltip'>
                                    </ReactTooltip>
                                    <ReactTooltip place='top' type="light" id='reject' data-id="reject" className='react-tooltip'>
                                    </ReactTooltip>
                                </td>

                                {(orderData.status === "New") || (orderData.status === "PendingNew") && <td>
                                    <FaTimesCircle className='text-[#ff3459] m-[3px]' />
                                </td>}

                            </tr>
                        )
                        // }
                        :
                        <tr className="leading-[2rem] table-row">
                            <td colSpan="7" className="leading-[3.125rem] text-[#777777] text-[15px] ">Chưa có lệnh nào trong sổ lệnh</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}
export default InDay