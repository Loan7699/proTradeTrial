
function FooterRight(props) {
    
    return (
        <div className="w-[25rem] h-[1.875rem] bg-[#131722] fixed bottom-0 right-0">
            <ul className="flex w-[24.875rem] mx-px menu">
                <li id="1" className={`w-1/3 cursor-pointer text-center leading-[1.875rem] ${props.menu === "1" && "choose"} ${props.showCol === false && "disActive"}`} onClick={(e) => props.handleMenu(e.target.id)}>Sổ lệnh</li>
                <li id="2" className={`w-1/3 cursor-pointer text-center leading-[1.875rem] ${props.menu ==="2" && "choose"} ${props.showCol === false && "disActive"}`} onClick={(e) => props.handleMenu(e.target.id)}>Danh mục</li>
                <li id="3" className={`w-1/3 cursor-pointer text-center leading-[1.875rem] ${props.menu ==="3" && "choose"} ${props.showCol === false && "disActive"}`} onClick={(e) => props.handleMenu(e.target.id)}>Tài sản</li>
            </ul>
        </div>
    )
}

export default FooterRight;