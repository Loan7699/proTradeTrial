
import { useState } from 'react'
import { IoBarChart } from 'react-icons/io5'
import { FaChartPie } from 'react-icons/fa'

import TradingViewWidget, { Themes } from 'react-tradingview-widget';

function ColFirst() {
    const [typeChart, setTypeChart] = useState('vn30Intraday')
    const handleTypeChart = (id) => {
        setTypeChart(id)
    }

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
                    {(typeChart === 'vn30Intraday') &&
                        <iframe src="https://mkw.vndirect.com.vn/leader_lagger?color=gray&height=280" title="Chart" width="100%" height="100%"></iframe>
                    }

                    {(typeChart === 'vn30') &&
                        <TradingViewWidget
                        symbol="NASDAQ:AAPL"
                        theme={Themes.DARK}
                        locale="fr"
                        autosize
                    />
                    }

                    {(typeChart === 'barChart') &&
                        <iframe src="https://mkw.vndirect.com.vn/leader_lagger?color=gray&height=280" title="Chart" width="100%" height="100%"></iframe>
                    }

                    {(typeChart === 'ChartPie') &&
                        <iframe src="https://mkw.vndirect.com.vn/market_cap?color=gray&amp;height=280" title="Chart" width="100%" height="100%"></iframe>
                    }
                </div>
                <ul className='h-[1.875rem] bg-[#131722] text-right absolute left-0 right-0 bottom-0 flex justify-end items-center'>
                    <li id='vn30Intraday' className={`cursor-pointer text-center text-[#dddddd] px-4 uppercase ${typeChart === "vn30Intraday" && "active"}`} onClick={() => handleTypeChart('vn30Intraday')}>vn30 intraday</li>
                    <li id='vn30' className={`cursor-pointer text-center text-[#dddddd] px-4 uppercase ${typeChart === 'vn30' && "active"}`} onClick={() => handleTypeChart("vn30")}>vn30</li>
                    <li id='barChart' className={`cursor-pointer text-center text-[#dddddd] px-4 ${typeChart === 'barChart' && "active"}`} onClick={() => handleTypeChart('barChart')}>
                        <IoBarChart className='w-5 h-5' />
                    </li>
                    <li id='ChartPie' className={`cursor-pointer text-center text-[#dddddd] px-4 ${typeChart === 'ChartPie' && "active"}`} onClick={() => handleTypeChart('ChartPie')}>
                        <FaChartPie className='w-5 h-5' />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ColFirst;