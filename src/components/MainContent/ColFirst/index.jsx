import { IoBarChart } from 'react-icons/io5'
import { FaChartPie } from 'react-icons/fa'

function ColFirst() {
    return (
        <div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1381247948016!2d105.81332801424533!3d21.027158593210455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab6e6c168b51%3A0x4ad83c125486eec4!2zMTUgTmd1eeG7hW4gQ8O0bmcgSG9hbiwgR2nhuqNuZyBWw7UsIEJhIMSQw6xuaCwgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1653312585662!5m2!1sen!2s" title="Chart" width="100%" height="100%"></iframe>
            </div>

            <div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1381247948016!2d105.81332801424533!3d21.027158593210455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab6e6c168b51%3A0x4ad83c125486eec4!2zMTUgTmd1eeG7hW4gQ8O0bmcgSG9hbiwgR2nhuqNuZyBWw7UsIEJhIMSQw6xuaCwgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1653312585662!5m2!1sen!2s" title="Chart" width="100%" height="100%"></iframe>
                </div>
                <div>
                    <ul>
                        <li>vn30 intraday</li>
                        <li>vn30</li>
                        <li>
                            <IoBarChart />
                        </li>
                        <li>
                            <FaChartPie />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ColFirst;