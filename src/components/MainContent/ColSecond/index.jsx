import Tippy from "@tippyjs/react";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from 'react-icons/bs'
import StepPrice from "./StepPrice";

function ColSecond() {
    return (
        <div>
            <div>
                <div>
                    <table>
                        <colgroup>
                            <col width="34%" />
                            <col width="22%" />
                            <col width="22%" />
                            <col width="22%" />
                        </colgroup>
                        <tr>
                            <td>vn30f2210</td>
                            <td>
                                <span>Sàn:</span>
                                <br />
                                <Tippy content="Click đúp để đặt lệnh">
                                    <span>1067.7</span>
                                </Tippy>
                            </td>
                            <td>
                                <span>TC:</span>
                                <br />
                                <Tippy content="Click đúp để đặt lệnh">
                                    <span>1148.0</span>
                                </Tippy>
                            </td>
                            <td>
                                <span>Trần:</span>
                                <br />
                                <Tippy content="Click đúp để đặt lệnh">
                                    <span>1228.3</span>
                                </Tippy>
                            </td>
                        </tr>
                    </table>
                </div>
                <div>
                    <ul>
                        <li>
                            <a>Bước giá</a>
                        </li>
                        <li>
                            <a>Lịch sử khớp lệnh</a>
                        </li>
                    </ul>

                    <StepPrice />
                </div>
            </div>
            <div>
                <table>
                    <colgroup>
                        <col width="25%"></col>
                        <col width="18%"></col>
                        <col width="16%"></col>
                        <col width="16%"></col>
                        <col width="25%"></col>
                    </colgroup>
                    <thead>
                        <tr>
                            <th>Mã</th>
                            <th>Giá</th>
                            <th>
                                <BsFillCaretLeftFill />
                                <span>+/-</span>
                                <BsFillCaretRightFill />
                            </th>
                            <th>Lệch</th>
                            <th>Tổng KL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>VN30F2210</td>
                            <td>1,150</td>
                            <td>2.0</td>
                            <td>-2.01</td>
                            <td>340,112</td>
                        </tr>
                        <tr>
                            <td>VN30F2211</td>
                            <td>1,159</td>
                            <td>10.0</td>
                            <td>6.99</td>
                            <td>1,503</td>
                        </tr>
                        <tr>
                            <td>VN30F2212</td>
                            <td>1,149.8</td>
                            <td>0.2</td>
                            <td>-2.21</td>
                            <td>144</td>
                        </tr>
                        <tr>
                            <td>VN30F2303</td>
                            <td>1,152</td>
                            <td>2.9</td>
                            <td>-0.01</td>
                            <td>122</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ColSecond;