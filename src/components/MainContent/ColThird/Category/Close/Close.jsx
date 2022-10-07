function Close() {
    return (
        <div>
            <table className="w-full ">
                <colgroup className="border-spacing-0 border-collapse">
                    <col width="20%"></col>
                    <col width="15%"></col>
                    <col width="20%"></col>
                    <col width="20%"></col>
                    <col width="25%"></col>
                </colgroup>

                <thead className="table-header-column h-[46px]">
                    <tr className="bg-[hsla(0,0%,47.1%,.15)]">
                        <th className="font-normal">Mã</th>
                        <th className="font-normal">KL</th>
                        <th className="font-normal">Giá mua</th>
                        <th className="font-normal">Giá bán</th>
                        <th className="font-normal">Lãi/lỗ đã thực hiện</th>
                    </tr>
                </thead>

                <tbody className="table-row-group align-middle">
                    <tr className="leading-[2rem] table-row">
                        <td colSpan="6" className="leading-[3.125rem] text-[#777777] text-[15px] ">Chưa có dữ liệu</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Close