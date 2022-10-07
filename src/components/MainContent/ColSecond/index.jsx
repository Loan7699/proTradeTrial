import Tippy from "@tippyjs/react";
import { useState } from 'react'
import { BsFillCaretRightFill, BsFillCaretLeftFill } from 'react-icons/bs'
import StepPrice from "./StepPrice";
import History from "./History";

function ColSecond() {

    const [type, setType] = useState(1)

    return (
        <div className="w-[21.875rem] flex flex-col">
            <div className="bg-[#2f3240] m-px flex-1 overflow-y-auto overflow-x-hidden hidden-scrollbar">
                <div className="h-[2.625rem] border border-solid border-[#444444]">
                    <table className="w-full table border-separate border-spacing-[2px] border-[grey]">
                        <colgroup className="table-column-group">
                            <col width="34%" className="table-column" />
                            <col width="22%" className="table-column" />
                            <col width="22%" className="table-column" />
                            <col width="22%" className="table-column" />
                        </colgroup>

                        <tbody className="table-row-group align-middle">
                            <tr className="table-row h-[2.625rem]">
                                <td className="text-base font-bold uppercase px-[5px] table-cell">vn30f2210</td>
                                <td className="px-[5px] table-cell">
                                    <span>Sàn:</span>
                                    <br />
                                    <Tippy content={<div className="text-[#333333] bg-[#ffffff] py-2 px-3 rounded-[3px] text-[13px]">Click đúp để đặt lệnh</div>} >
                                        <span className="text-[#00c5c5] cursor-pointer">1067.7</span>
                                    </Tippy>
                                </td>
                                <td className="px-[5px] table-cell">
                                    <span>TC:</span>
                                    <br />
                                    <Tippy  content={<div className="text-[#333333] bg-[#ffffff] py-2 px-3 rounded-[3px] text-[13px]">Click đúp để đặt lệnh</div>} >
                                        <span className="text-[#ffd900] cursor-pointer">1148.0</span>
                                    </Tippy>
                                </td>
                                <td>
                                    <span>Trần:</span>
                                    <br />
                                    <Tippy  content={<div className="text-[#333333] bg-[#ffffff] py-2 px-3 rounded-[3px] text-[13px] transition-opacity duration-300 ease-out ">Click đúp để đặt lệnh</div>} >
                                        <span className="text-[#ff25ff] cursor-pointer">1228.3</span>
                                    </Tippy>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <ul className="flex justify-around shrink-0 text-center leading-[1.875rem] mx-auto">
                        <li>
                            <a className={`font-bold px-[5px] leading-[1.875rem] cursor-pointer  ${type === 1 && 'active'}`} onClick={() => setType(1)}>Bước giá</a>
                        </li>
                        <li>
                            <a className={`text-[#f0f0f0] cursor-pointer ${type === 2 && 'active'}`} onClick={() => setType(2)}>Lịch sử khớp lệnh</a>
                        </li>
                    </ul>

                    { type === 1 && <StepPrice />}
                    { type === 2 && <History />}
                </div>
            </div>
            <div className="bg-[#2f3240] m-px h-[45%]">
                <table className="w-full pt-[5px] border-spacing-0 table border-separate border-[grey]">
                    <colgroup className="table-column-group">
                        <col width="25%" className="table-column"></col>
                        <col width="18%" className="table-column"></col>
                        <col width="16%" className="table-column"></col>
                        <col width="16%" className="table-column"></col>
                        <col width="25%" className="table-column"></col>
                    </colgroup>
                    <thead className="table-header-group align-middle">
                        <tr className="table-row bg-[hsla(0,0%,47.1%,.15)]">
                            <th className="pr-[3px] leading-[1.5625rem]">Mã</th>
                            <th className="pr-[3px] leading-[1.5625rem]">Giá</th>
                            <th className="flex items-center pr-[3px] leading-[1.5625rem]">
                                <BsFillCaretLeftFill />
                                <span>+/-</span>
                                <BsFillCaretRightFill />
                            </th>
                            <th className="pr-[3px] leading-[1.5625rem]">Lệch</th>
                            <th className="pr-[3px] leading-[1.5625rem]">Tổng KL</th>
                        </tr>
                    </thead>
                    <tbody className="table-row-group align-middle">
                        <tr className="table-row">
                            <td className="pr-[3px] leading-[1.5625rem] text-[red]">VN30F2210</td>
                            <td className="pr-[3px] leading-[1.5625rem] text-[red]">1,150</td>
                            <td className="pr-[3px] leading-[1.5625rem] text-[red]">2.0</td>
                            <td className="pr-[3px] leading-[1.5625rem] text-[red]">-2.01</td>
                            <td className="pr-[3px] leading-[1.5625rem]">340,112</td>
                        </tr>
                        <tr className="table-row bg-[hsla(0,0%,47.1%,.15)]">
                            <td className="pr-[3px] leading-[1.5625rem] text-[red]">VN30F2211</td>
                            <td className="pr-[3px] leading-[1.5625rem] text-[red]">1,159</td>
                            <td className="pr-[3px] leading-[1.5625rem] text-[red]">10.0</td>
                            <td className="pr-[3px] leading-[1.5625rem] text-[#0f0]">6.99</td>
                            <td className="pr-[3px] leading-[1.5625rem]">1,503</td>
                        </tr>
                        <tr className="table-row">
                            <td className="pr-[3px] leading-[1.5625rem] text-[red]">VN30F2212</td>
                            <td className="pr-[3px] leading-[1.5625rem] text-[red]">1,149.8</td>
                            <td className="pr-[3px] leading-[1.5625rem] text-[red]">0.2</td>
                            <td className="pr-[3px] leading-[1.5625rem] text-[#0f0]">-2.21</td>
                            <td className="pr-[3px] leading-[1.5625rem]">144</td>
                        </tr>
                        <tr className="table-row bg-[hsla(0,0%,47.1%,.15)]">
                            <td className="pr-[3px] leading-[1.5625rem] text-[red]">VN30F2303</td>
                            <td className="pr-[3px] leading-[1.5625rem] text-[red]">1,152</td>
                            <td className="pr-[3px] leading-[1.5625rem] text-[red]">2.9</td>
                            <td className="pr-[3px] leading-[1.5625rem] text-[red]">-0.01</td>
                            <td className="pr-[3px] leading-[1.5625rem]">122</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ColSecond;