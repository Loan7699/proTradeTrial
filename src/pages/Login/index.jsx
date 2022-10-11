import { Link } from 'react-router-dom'
import { FaInfoCircle, FaSignInAlt } from "react-icons/fa"
import { HiLockClosed } from "react-icons/hi"
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactTooltip from 'react-tooltip';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const [username, setName] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    let data = JSON.stringify({
        username,
        password
    })

    const handleSumit = (e) => {
        e.preventDefault()

        const api = axios({
            // params: {
            //     t: new Date().getTime(),
            //   },
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            url: "https://auth-api.vndirect.com.vn/v2/auth",
            data
        })

            .then(res => {
                // console.log(res)
                if (res.status === 200) {
                    navigate("/trangchu")
                }
                localStorage.setItem('auth', res.data.token)
                localStorage.setItem('name', username)
            })

            .catch(error => {
                toast.error("Tên đăng nhập hoặc mật khẩu bạn vừa nhập chưa đúng, xin vui lòng thử lại. (AUTH-02) (gbcwi)")
            })
    }

    return (
        <div>
            <div className="bg w-full h-full fixed top-0 left-0">

            </div>

            <div className="w-[21.875rem] h-[28.75rem] fixed top-[52%] left-1/2 bg-[#F8F8F8] mt-[-175px] ml-[-175px] box-shadow rounded-[10px] p-[5px] opacity-[.93]">
                <div>
                    <form className="mt-[15px]">
                        <div>
                            <p className="text-[0.88rem] font-bold text-[#444] mb-4">Đăng nhập với tài khoản VNDIRECT</p>
                            <div>
                                <label className="text-[14px] text-[#444444] block mx-auto mt-[5px] mb-[3px] w-[12.5rem]  text-left">Tên đăng nhập:</label>
                                <input type='text' id='username' className="block border border-[rgba(0,0,0,.2)] rounded-[5px] p-[7px] w-[12.5rem] mx-auto mb-[10px] bg-[hsla(0,0%,100%,.5)] focus:bg-[#fff] border-solid focus:border-[#f7941d] focus:outline-none text-[#333333]" value={username} onChange={(e) => setName(e.target.value)} />

                            </div>
                            <div>
                                <label className="text-[14px] text-[#444444] block mx-auto mt-[5px] mb-[3px] w-[12.5rem]  text-left">Mật khẩu:</label>
                                <input type='password' id='password' className="block border border-[rgba(0,0,0,.2)] rounded-[5px] p-[7px] w-[12.5rem] mx-auto mb-[10px] bg-[hsla(0,0%,100%,.5)] focus:bg-[#fff]border-solid focus:border-[#f7941d] focus:outline-none text-[#333333]" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="mx-auto text-left">
                                <label className="block text-[14px] w-[12.5rem] text-[#444444] mx-auto mt-[5px] mb-[3px]">
                                    <input type='checkbox' className="m-[3px]" />
                                    Ghi nhớ trạng thái đăng nhập trên trình duyệt này
                                    <span data-tip="Ghi nhớ trạng thái đăng nhập giúp Quý khách không cần phải login lại mỗi lần vào VNDIRECT trên trình duyệt này. Để hủy trạng thái, Quý khách vui lòng Đăng xuất." data-for="noteWarning" data-class="note-tooltip">
                                        <span>
                                            <FaInfoCircle className="inline-block ml-2" />
                                        </span>
                                    </span>
                                    <ReactTooltip className='react-tooltip place-top type-dark note-tooltip' id='noteWarning' data-id="tooltip" >
                                    </ReactTooltip>
                                </label>
                            </div>
                            <Link to="/trangchu">
                                <button type="submit" className="text-[#ffffff] bg-[#f7941d] p-[9px] text-[13px] font-bold rounded-[5px] w-[12.5rem] my-5 mx-auto" onClick={handleSumit}>
                                    <FaSignInAlt className="inline-block mr-1 mb-1" />
                                    <span>Đăng nhập</span>
                                </button>
                            </Link>
                            <hr className="border border-dotted border-[#dddddd] my-1.5" />
                        </div>
                        <div>
                            <button type="submit" className="text-[#ffffff] bg-[#18c451] p-[9px] text-[13px] font-bold rounded-[5px] w-[12.5rem] my-2.5 mx-auto">
                                <HiLockClosed className="inline-block mb-1.5 mr-1" />
                                <a href='https://account-v2.vndirect.com.vn/' target='_blank'>Mở tài khoản</a>
                            </button>
                        </div>
                        <p>
                            <a href="https://dstock.vndirect.com.vn/" target="_blank">Trợ giúp</a>
                        </p>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}
export default Login;