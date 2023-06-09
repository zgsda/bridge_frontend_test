import style from './Payment.module.css';
import user from './user.png';
import arrow from './PaymentImg.png';

const Payment = () => {

    return (
        <>
                <div className='container clearfix' >
            <div className={style.mainBox}>
                <div className={style.mainText}>결제</div>
                <div className={style.profile}>
                    <div className={style.request}>
                        <div className={style.requestText}>신청자 닉넴</div>
                        <img src={user} className={style.requestImg}></img>
                    </div>

                    <img src={arrow} className={style.arrowImg}></img>

                    <div className={style.response}>
                        <div className={style.responseText}>커미션주 닉넴</div>
                        <img src={user} className={style.responseImg}></img>
                    </div>
                </div>
                <div>
                    <span className={style.advanceText}>선지급금</span>
                    <input type="text" className={style.advance} placeholder='ex)  10,000'></input>
                </div>
                <div>
                    <span className={style.willPayment}>의뢰 완료시 결제될 금액</span>
                    <input type='text' className={style.willPaymentAm} placeholder='ex)  100,000'></input>
                </div>
                <div className={style.hr}>
                    <hr width="500px" color='black' size="1.5" />
                </div>
                <div className={style.total}> 총 결제 금액
                    <span className={style.totalPayment}>110,000 원</span>
                </div>
                <div>
                    <div className={style.point}>Bridge 포인트</div>
                    <div>
                        <input type='text' className={style.pointInput}></input>
                        <p className={style.pointP}>P</p>
                    </div>
                    <div className={style.havePoint}>
                        <span className={style.have}>보유 99,999 P</span>
                        <label for='All' className={style.selectText}>모두 사용</label>
                        <input type='checkbox' className={style.selectAll} id='All' name='All' value="All" />
                    </div>

                    <button className={style.paymentBtn}>결제</button>

                    <p className={style.paymentNotice}> 잔액이 부족합니다. 포인트를 충전해주세요. </p>
                </div>
            </div>
            </div>
        </>
    );
};

export default Payment;