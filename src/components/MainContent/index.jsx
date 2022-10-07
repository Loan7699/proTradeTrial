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
        // if (id === id) {
        //     document.getElementById(`${id}`).style.color = "#f7941d"
        // } else {
        //     document.getElementById(`${id}`).style.color = "#ffffff"
        // }
        // document.getElementById(`${id}`).style.color = "#f7941d"
        // document.getElementById(`${id}`).style.backgroundColor = "#2f3240"
        // console.log(document.getElementById(`${id}`));
        setShowCol(true)
        // console.log(document.getElementById(`${id}`));
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