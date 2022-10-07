import Header from "../../components/Header";
import MainContent from "../../components/MainContent";
import Popup from "../../components/MainContent/Popup";
import { useState } from 'react'

function Homepage() {
    const [showPopup, setShowPopup] = useState(false)

    return (
        <div>
            <Header setShowPopup={setShowPopup}/>
            <MainContent className=""/>
            { showPopup && <Popup setShowPopup={setShowPopup} /> }
        </div>
    )
}

export default Homepage;