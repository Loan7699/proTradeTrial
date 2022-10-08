import { useState } from 'react'
import ColFirst from "./ColFirst"
import ColSecond from "./ColSecond"
import ColThird from "./ColThird"
import FooterLeft from "../FooterLeft"
import FooterRight from "../FooterRight"

function MainContent() {
    const [menu, setMenu] = useState("1")
    const [showCol, setShowCol] = useState(true)

    const handleMenu = (id) => {
        setMenu(id)
        setShowCol(true)
    }
    
    const handleShowCol = () => {
        setShowCol(false)
    }

    return (
        <div className="pt-10">
            <div className="bg-[#131722] flex overflow-hidden height-content">
                <ColFirst />
                <ColSecond />
                { showCol && <ColThird  menu={menu} handleShow={handleShowCol}/>}
                <FooterLeft />
                <FooterRight handleMenu={handleMenu} menu={menu} showCol={showCol}/>
            </div>
        </div>
    )
}

export default MainContent