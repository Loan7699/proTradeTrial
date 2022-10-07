function Open() {
    return (
        <div>
            <table className="w-full ">
                <colgroup className="border-spacing-0 border-collapse" >
                    <col width="60px" className="table-column"></col>
                    <col width="40px" className="table-column"></col>
                    <col width="60px" className="table-column"></col>
                    <col width="60px" className="table-column"></col>
                    <col className="table-column"/>
                    <col className="table-column"/>
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
                    <tr className="leading-[2rem] table-row">
                        <td colSpan="6" className="leading-[3.125rem] text-[#777777] text-[15px] ">Chưa có lệnh nào trong sổ lệnh</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Open