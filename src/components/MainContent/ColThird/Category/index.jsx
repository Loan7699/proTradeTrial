import { useState } from 'react'
import { FaMinus, FaSyncAlt } from 'react-icons/fa'
import Close from './Close/Close';
import Open from './Open/Open';

function Category({ handleShow }) {
    const [category, setCategory] = useState("open")

    const handleCategory = (id) => {
        setCategory(id)
    }
    return (
        <div className='flex-1 m-px overflow-auto bg-[#2f3240]'>
            <div className='flex items-center justify-between leading-[2.5rem] border-b border-solid border-[#444444]'>
                <div id='open' className={`leading-[2.5rem] ml-16 cursor-pointer ${category==="open" && 'active'}`} onClick={(e) => handleCategory(e.target.id)}>Vị thế mở</div>

                <div className='flex'>
                    <div id='close' className={`leading-[2.5rem] cursor-pointer ${category==="close" && 'active'}`} onClick={(e) => handleCategory(e.target.id)}>Vị thế đóng</div>
                    <div className='flex items-center'>
                        <FaSyncAlt className='mx-2 text-[#f7941d]' />
                        <FaMinus className='mx-2 text-[#f7941d]'  onClick={handleShow}/>
                    </div>
                </div>
            </div>

            { category === "open" && <Open /> }
            { category === "close" && <Close />}
        </div>
    )
}
export default Category;