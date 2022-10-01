import { FaMinus, FaSyncAlt, FaExternalLinkAlt } from 'react-icons/fa'

function Asset() {
    return (
        <div>
            <div>
                <span>Thông tin tài sản</span>
                <div>
                    <FaSyncAlt />
                    <FaExternalLinkAlt />
                    <FaMinus />
                </div>
            </div>

            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Tài sản ròng</td>
                            <td>40,000,000</td>
                        </tr>
                        <tr>
                            <td>Số dư ký quỹ</td>
                            <td>24,000,000</td>
                        </tr>
                        <tr>
                            <td>Thuế và phí</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Asset;