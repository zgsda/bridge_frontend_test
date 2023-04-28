import style from './Login.module.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useState } from "react";
import axios from "axios";
import KakaoLogin from './KaKaoLogin';
import NaverLogin from './NaverLogin';

const Login = ({history, setIsLogin}) => {
    const [userId,setId] = useState('');
    const [userPassword,setPassword]=useState('');
    const handlerOnClick = e =>{
        e.preventDefault();
        axios.post(`http://localhost:8080/login`,{userId,userPassword})
            .then(respone => {
                if(respone.data){
                    alert('정상적으로 로그인되었습니다')
                    sessionStorage.setItem("token",respone.data);
                    setIsLogin(true);
                    history.goBack();
                }else{
                    alert('id, pw가 일치하지 않습니다')
                    sessionStorage.clear();
                }
            })    
            .catch(error=>{
                alert('id, pw가 일치하지 않습니다')
                console.log(error)
                sessionStorage.clear();
            })
    };



    return (
        <>
            <div className={style.loginbackg}>
                <h1 className={style.login}>로그인</h1>

                <p className={style.loginp}>아이디</p>
                <input type="text" className={style.logininput} placeholder="아이디를 입력하세요" value={userId} onChange={(e)=>setId(e.target.value)}/>
                <p className={style.loginp}>비밀번호</p>
                <input type="password" className={style.logininput} placeholder="비밀번호를 입력하세요" value={userPassword} onChange={(e)=>setPassword(e.target.value)}/>
                <br />
                <button className={style.loginbutton} onClick={handlerOnClick}>로그인</button>
                <Link to="/5"><p className={style.signup}>회원가입</p></Link>
                <p className={style.loginsns}>SNS계정 간편 로그인</p>
                <div className={style.naver}><KakaoLogin/></div>
                <div className={style.naver}><NaverLogin /></div>
                {/* <a href={KAKAO_AUTH_URL}>카카오로 로그인하기</a> */}
                
            </div>
        </>

    )
}


export default Login;