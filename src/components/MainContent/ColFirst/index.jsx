
import { useState } from 'react'
import { IoBarChart } from 'react-icons/io5'
import { FaChartPie } from 'react-icons/fa'

import TradingViewWidget, { Themes } from 'react-tradingview-widget';

function ColFirst() {
    const [typeChart, setTypeChart] = useState(1)

    return (
        <div className='flex flex-col flex-1'>
            <div className='bg-[#2f3240] m-px flex-1 border-t-2 border-solid border-[#2f3240]'>
                <TradingViewWidget
                    symbol="NASDAQ:AAPL"
                    theme={Themes.DARK}
                    locale="fr"
                    autosize
                />
            </div>

            <div className='h-[45%] flex flex-col bg-[#2f3240] m-px relative'>
                <div className='px-[5px] flex-1 border-t-2 border-solid border-[#2f3240]'>
                    {(typeChart === 1) &&
                        <div>
                            Phương
                        </div>
                    }

                    {(typeChart === 2) &&
                        <TradingViewWidget
                        symbol="NASDAQ:AAPL"
                        theme={Themes.DARK}
                        locale="fr"
                        autosize
                    />
                    }

                    {(typeChart === 3) &&
                        <iframe src="https://mkw.vndirect.com.vn/leader_lagger?color=gray&height=280" title="Chart" width="100%" height="100%"></iframe>
                    }

                    {(typeChart === 4) &&
                        <iframe src="https://mkw.vndirect.com.vn/market_cap?color=gray&amp;height=280" title="Chart" width="100%" height="100%"></iframe>
                    }
                </div>
                <ul className='h-[1.875rem] bg-[#131722] text-right absolute left-0 right-0 bottom-0 flex justify-end items-center'>
                    <li className={`cursor-pointer text-center text-[#dddddd] px-4 uppercase ${typeChart === 1 && "active"}`} onClick={() => setTypeChart(1)}>vn30 intraday</li>
                    <li className={`cursor-pointer text-center text-[#dddddd] px-4 uppercase ${typeChart === 2 && "active"}`} onClick={() => setTypeChart(2)}>vn30</li>
                    <li className={`cursor-pointer text-center text-[#dddddd] px-4 ${typeChart === 3 && "active"}`} onClick={() => setTypeChart(3)}>
                        <IoBarChart className='w-5 h-5' />
                    </li>
                    <li className={`cursor-pointer text-center text-[#dddddd] px-4 ${typeChart === 4 && "active"}`} onClick={() => setTypeChart(4)}>
                        <FaChartPie className='w-5 h-5' />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ColFirst;