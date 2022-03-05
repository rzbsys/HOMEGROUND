import React from "react";
import "styles/Contact.scss";
import Title from "components/Title";
import EmailImage from "images/Vector.svg";
import PhoneImage from "images/Vector-1.svg";

function Contact() {
    return (
        <>
            <Title KorTitle="연락하기" EngTitle="Contact"></Title>
            <div className="ContactBox" style={{marginTop:"50px"}}>
                <div className="ContactBoxFrame">
                    <div className="ContactImageFrame">
                        <img src={EmailImage} alt="이메일" />
                    </div>
                    <div className="ContactTextBox">
                        <h4 className="w_2">이메일</h4>
                        <h1>tyalitari@gmail.com</h1>
                    </div>
                </div>
                <div className="ContactBoxFrame">
                    <div className="ContactImageFrame">
                        <img src={PhoneImage} alt="전화번호" />
                    </div>
                    <div className="ContactTextBox">
                        <h4 className="w_2">전화번호</h4>
                        <h1>010-8348-1218</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;