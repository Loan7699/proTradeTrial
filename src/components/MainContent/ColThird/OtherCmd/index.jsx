function OtherCmd() {
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
                        <button>MUA</button>
                        <button>BÁN</button>
                        <div>
                            <input type="checkbox"/>
                            <label>Lưu lệnh</label>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default OtherCmd