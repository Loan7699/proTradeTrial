import { FaMinus, FaSyncAlt, FaExternalLinkAlt } from 'react-icons/fa'

function Asset({ handleShow }) {
    return (
        <div className='flex-1 m-px overflow-auto bg-[#2f3240]'>
            <div className='flex justify-between items-center px-[5px] leading-[2.1875rem] bg-[hsla(0,0%,47.1%,.15)] text-[#f7941d] font-bold border-b border-solid border-[hsla(0,0%,47.1%,.15)]'>
                <div>Thông tin tài sản</div>
                <div className='flex'>
                    <FaSyncAlt className='mr-2.5 cursor-pointer' />
                    <FaExternalLinkAlt className='mr-2.5 cursor-pointer' />
                    <FaMinus onClick={handleShow}/>
                </div>
            </div>
            <div className='flex justify-between border-b border-solid border-[hsla(0,0%,47.1%,.15)] leading-[1.875rem] px-[3px]'>
                <div>Tài sản ròng</div>
                <div>40,000,000</div>
            </div>
            <div className='flex justify-between border-b border-solid border-[hsla(0,0%,47.1%,.15)] leading-[1.875rem] px-[3px]'>
                <div>Số dư ký quỹ</div>
                <div>24,000,000</div>
            </div>

            <div className='flex justify-between border-b border-solid border-[hsla(0,0%,47.1%,.15)] leading-[1.875rem] px-[3px]'>
                <div>Thuế và phí</div>
                <div>0</div>
            </div>
        </div>
    )
}
export default Asset;
// get: https://dertrial-api.vndirect.com.vn/demotrade/assets?username=phuong_loan
// {"username":"phuong_loan","cashOnHand":100519.50000000931,"positionFeeAccrual":0,"totalFee":0,"pp":null,"ppLong":null,"ppShort":6013500,"totalPnlAmount":0,"requiredAddAmount":0,"collateralAmount":30000000,"incomeTax":0,"netAssetValue":30100519.500000007,"_id":"AYODFjuWnZneC_ZLwYNM"}