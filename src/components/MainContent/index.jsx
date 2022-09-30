import ColFirst from "./ColFirst"
import ColSecond from "./ColSecond"
import ColThird from "./ColThird"
import FooterLeft from "../FooterLeft"
import FooterRight from "../FooterRight"

function MainContent() {
    return (
        <div className="pt-10">
            <ColFirst />
            <ColSecond />
            <ColThird />
            <FooterLeft />
            <FooterRight />
        </div>
    )
}

export default MainContent