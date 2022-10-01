function CmdStop() {
    return (
        <div>
            <div>
                <div>
                    <ul>
                        <li>
                            <input type='radio' />
                            <label>Lệnh thường</label>
                        </li>
                        <li>
                            <input type='radio' />
                            <label>Lệnh Stop</label>
                        </li>

                        <li>
                            <input type='radio' />
                            <label>Lệnh trailing</label>
                        </li>
                        <li>
                            <input type='radio' />
                            <label>Lệnh OSO</label>
                        </li>
                    </ul>
                </div>
                <div>
                    <label>Mã HĐTL: </label>
                    <input type="text" placeholder='Mã' />
                </div>
                <div>
                    <label>Giá đặt: </label>
                    <input type="text" placeholder='Giá' />

                </div>
                <div>
                    <label>Khối lượng: </label>
                    <input type="text" placeholder='KL' />
                </div>
                <div>
                    <label>Khi giá khớp: </label>
                    <div>
                        <a>≤</a>
                        <a>≥</a>
                    </div>
                    <div>
                        <input type="text" placeholder='Giá kích hoạt' />
                    </div>
                </div>
                <div>
                    <label>Ngày hết hạn: </label>
                    <div>
                        <input type="text" placeholder='Ngày hết hạn' />
                    </div>
                </div>
                <div>
                    <button>MUA</button>
                    <button>BÁN</button>
                    <div>
                        <input type="checkbox" />
                        <label>Lưu lệnh</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CmdStop