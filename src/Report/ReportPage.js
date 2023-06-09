import style from './ReportPage.module.css';
import '../reset.css'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import jwt_decode from "jwt-decode";

function ReportPage() {

    const [select, setSelect] = useState('');
    const [reportReasonDetail, setReportReasonDetail] = useState('')
    const [reportedUserId, setReportedUserId] = useState('');
    const [userId, setUserId] = useState('');

    //신고사유 선택
    const handleSelect = (e) => {
        setSelect(e.target.value);
    };

    useEffect(()=>{
        const token = sessionStorage.getItem('token');
        const decode_token = jwt_decode(token);
        console.log("222222222" + decode_token);
        setUserId(decode_token.sub);
        //신고당하는사람 하드코딩 => 나중에 get 해오기 => 수정 필요 !!! 
        setReportedUserId("testerId");
    })

    //신고 제출 
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/api/report/${reportedUserId}`, { userId, reportedUserId, reportReasonDetail ,"reportReason":select})
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleDetail = (e) => {
        setReportReasonDetail(e.target.value);
    }

    return (
        <div className="container">
            <div className={style.Box}>
                {/* <label for="target">신고대상</label> */}
                {/* value={reportedUserId} */}
                <div id="target" className={style.Target}>{reportedUserId}</div>
                <select className={style.Select} onChange={handleSelect} value={select}>
                    <option value="" disabled selected>신고 사유 선택</option>
                    <option value="스팸/홍보성 글" >스팸/홍보성 글</option>
                    <option value="욕설/비방 글" >욕설/비방 글</option>
                    <option value="결제 관련" >결제 관련</option>
                    <option value="기타" >기타</option>
                </select>
                <div className={style.input}><textarea className={style.inner} type="text" value={reportReasonDetail} onChange={handleDetail}></textarea></div>
                <button className={style.button} onClick={handleSubmit}>신고</button>

            </div>
        </div>
    )
}
export default ReportPage;