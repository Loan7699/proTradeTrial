
function Condition() {
    return (
        <div>
            <table>
                <colgroup className="w-full border-spacing-0 border-collapse">
                    <col width="10%" className="table-column"></col>
                    <col width="10%" className="table-column"></col>
                    <col width="20%" className="table-column"></col>
                    <col width="10%" className="table-column"></col>
                    <col width="10%" className="table-column"></col>
                    <col width="20%" className="table-column"></col>
                    <col width="8%" className="table-column"></col>
                    <col width="12%" className="table-column"></col>
                </colgroup>

                <thead className="table-header-column align-middle h-[54px]">
                    <tr className="bg-[hsla(0,0%,47.1%,.15)] text-center">
                        <th className="px-[5px]">Lệnh</th>
                        <th className="px-[5px]">Mã</th>
                        <th className="px-[5px]">Giá kích hoạt</th>
                        <th className="px-[5px]">KL</th>
                        <th className="px-[5px]">Giá</th>
                        <th className="px-[5px]">Ngày hết hạn</th>
                        <th className="px-[5px]">TT</th>
                        <th className="px-[5px]"></th>
                    </tr>
                </thead>

                <tbody className="table-row-group align-middle">
                    <tr className="leading-[2rem] table-row">
                        <td colSpan="8" className="leading-[3.125rem] text-[#777777] text-[15px] ">Chưa có lệnh nào trong sổ lệnh</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Condition