import { AiFillTrophy } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { BsFillCaretDownFill } from 'react-icons/bs'

function Header() {
    return (
        <div className='w-full h-[2.625rem] text-[#ffffff] bg-[#131722] leading-[1.625rem] py-2 fixed top-0 flex justify-between'>
            <div className='absolute top-0.5 left-2.5'>
                <img src='/images/logo.svg' className='h-[2.375rem]'/>
            </div>
            <div className='flex pl-[155px] text-[#f7941d] font-bold'>
                <span>15:05:00</span>
                <span className='mx-[5px]'>2022/09/30</span>
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

                <div className='flex items-center h-[1.25rem] bg-[#97037F] rounded-[3px] px-2.5'>
                    <AiFillTrophy className=''/>
                    <span className="">Top cao thủ phái sinh</span>
                </div>
            </div>
            <div className='flex justify-end items-center'>
                <div className='font-bold border border-solid border-[#F7941D] rounded-[5px] px-2.5 mr-4'>BẢN TRIAL</div>

                <div className='mr-4 bg-[#F7941D] h-[1.25rem] leading-5 px-2.5 rounded-[3px]'>
                    <a href='https://myaccount.vndirect.com.vn/login?httpRedirect=https://myaccount.vndirect.com.vn/account-info?tab=account-register' className=''>Nâng cấp tài khoản</a>
                </div>

                <div className='flex items-center uppercase mr-4'>
                    <FaUser className='pr-1'/>
                    <span className='pr-1'>trần thị phương loan</span>
                    <BsFillCaretDownFill />
                </div>
            </div>
        </div>
    )
}

export default Header