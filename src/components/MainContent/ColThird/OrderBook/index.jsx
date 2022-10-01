import { FaMinus, FaSyncAlt } from 'react-icons/fa'
import InDay from './InDay'

function OrderBook() {
    return (
        <div>
            <div>
                <ul>
                    <li>Lệnh trong ngày</li>
                    <li>Lệnh điều kiện</li>
                </ul>
                <FaSyncAlt />
                <FaMinus />
            </div>
            <InDay />
        </div>
    )
}
export default OrderBook