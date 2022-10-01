import { FaMinus, FaSyncAlt } from 'react-icons/fa'
import Open from './Open';

function Category() {
    return (
        <div>
            <div>
                <ul>
                    <li>Vị thế mở</li>
                    <li>Vị thế đóng</li>
                </ul>
                <FaSyncAlt />
                <FaMinus />
            </div>
            <Open />
        </div>
    )
}
export default Category;