
function InDay() {
    return (
        <div>
            <table className="w-full border-spacing-0 border-collapse">
                <colgroup className="table-column-group">
                    <col width="20px" className="table-column"></col>
                    <col width="50px" className="table-column"></col>
                    <col width="90px" className="table-column"></col>
                    <col width="70px" className="table-column"></col>
                    <col width="60px" className="table-column"></col>
                </colgroup>

                <thead className="table-header-column align-middle">
                    <tr className="leading-[2rem] bg-[hsla(0,0%,47.1%,.15)] text-left">
                        <th className="px-[5px]"></th>
                        <th className="px-[5px]">Lệnh</th>
                        <th className="px-[5px]">Mã</th>
                        <th className="px-[5px]">KL khớp</th>
                        <th className="px-[5px]">Giá</th>
                        <th className="px-[5px]">TT</th>
                    </tr>
                </thead>

                <tbody className="table-row-group align-middle">
                    <tr className="leading-[2rem] table-row">
                        <td colSpan="6" className="leading-[3.125rem] text-[#777777] text-[15px] ">Chưa có lệnh nào trong sổ lệnh</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default InDay