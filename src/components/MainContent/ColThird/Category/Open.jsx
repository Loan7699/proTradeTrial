function Open() {
    return (
        <div>
            <table>
                <colgroup>
                    <col width="60px"></col>
                    <col width="40px"></col>
                    <col width="60px"></col>
                    <col width="60px"></col>
                    <col />
                    <col />
                </colgroup>

                <thead>
                    <tr>
                        <th>Mã</th>
                        <th>KL</th>
                        <th>Giá vốn</th>
                        <th>Giá hiện tại</th>
                        <th>+/-</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td colspan="6">Chưa có lệnh nào trong sổ lệnh</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Open