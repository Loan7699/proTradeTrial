import { AiFillTrophy } from 'react-icons/ai'
import { FaUser, FaSignInAlt } from 'react-icons/fa'
import { BsFillCaretDownFill } from 'react-icons/bs'
import { HiColorSwatch } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import jwt_decode from "jwt-decode";

function Header({ setShowPopup }) {
    const [name, setName] = useState('')

    const [time, setTime] = useState(() => new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds())
    const [date, setDate] = useState(() => new Date().getFullYear() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getDate())
    const navigate = useNavigate()

    useEffect(() => {
        let decodedToken = jwt_decode(localStorage.getItem('auth'))
        // console.log(decodedToken);
        setName(decodedToken.customerName)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('auth')
        // localStorage.removeItem('name')
        navigate("/")
    }

    useEffect(() => {
        let timerId = setInterval(() => {
            setTime(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds())
        }, 1000)
        // return clearInterval(timerId.current)
    })

    return (
        <div className='w-full h-[2.625rem] text-[#ffffff] bg-[#131722] leading-[1.625rem] py-2 fixed top-0 flex justify-between'>
            <div className='absolute top-0.5 left-2.5'>
                <img src='/images/logo.svg' className='h-[2.375rem]' />
            </div>
            <div className='flex pl-[155px] text-[#f7941d] font-bold'>
                <span>{time}</span>
                <span className='mx-[5px]'>{date}</span>
            </div>
            <div className='font-bold'>
                <ul className='flex pl-[10px]'>
                    <li className='border-l border-solid border-[#333333]'>
                        <a href="#" className='text-[#f7941d] font-bold px-[10px]'>Trang chủ</a>
                    </li>
                    <li className='border-l border-solid border-[#333333]'>
                        <a href="https://protrade-trial.vndirect.com.vn/tai-san" className='px-[10px] hover:text-[#f7941d]'>Tài sản</a>
                    </li>
                    <li className='border-l border-solid border-[#333333]'>
                        <a href="https://protrade-trial.vndirect.com.vn/huong-dan-su-dung" className='px-[10px] hover:text-[#f7941d]'>Hướng dẫn</a>
                    </li>
                </ul>
            </div>
            <div className='flex items-center'>
                <div className='flex'>
                    <span className='text-[#f7941d] pl-[5px]'>Lãi/Lỗ: </span>
                    <span className='pl-[5px] text-[#FFD900] pr-[80px]'>0</span>
                </div>

                <div className='flex items-center h-[1.25rem] bg-[#97037F] rounded-[3px] px-2.5 cursor-pointer' onClick={()=> setShowPopup(true)}>
                    <AiFillTrophy className='' />
                    <span className="">Top cao thủ phái sinh</span>
                </div>
            </div>
            <div className='flex justify-end items-center'>
                <div className='font-bold border border-solid border-[#F7941D] rounded-[5px] px-2.5 mr-4'>BẢN TRIAL</div>

                <div className='mr-4 bg-[#F7941D] h-[1.25rem] leading-5 px-2.5 rounded-[3px]'>
                    <a href='https://myaccount.vndirect.com.vn/login?httpRedirect=https://myaccount.vndirect.com.vn/account-info?tab=account-register' className=''>Nâng cấp tài khoản</a>
                </div>

                <div className='relative username h-[40px] leading-[40px] hover:bg-[#393939]'>
                    <div className='flex items-center mr-4'>
                        <FaUser className='pr-1' />
                        <span className='pr-1 uppercase'>{name}</span>
                        <BsFillCaretDownFill />
                    </div>

                    <ul className='w-[200px] py-[5px] bg-[#131722] border-t border-solid border-[#f7941d] absolute top-[40px] right-0 cursor-pointer hidden logout' onClick={handleLogout}>
                        <FaSignInAlt className="inline-block mr-1 mb-1" />
                        Logout
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
