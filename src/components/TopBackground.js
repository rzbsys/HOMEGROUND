import React, {useEffect, useRef } from "react";
import "styles/TopBackground.scss";
import { Link } from "react-scroll"

function TopBackground({ ImageList }) {

    const Line1 = useRef();
    const Line2 = useRef();
    const Line3 = useRef();

    useEffect(() => {
        window.addEventListener('scroll', throttledScroll);
        return () => {
            window.removeEventListener('scroll', throttledScroll);
        };
    }, []);

    const throttledScroll = () => {
        if (window.scrollY < window.innerHeight) {
            const MoveCalculated = window.scrollY * 0.7;
            Line1.current.style.marginLeft = MoveCalculated + "px";
            Line2.current.style.marginLeft =  -1 * MoveCalculated + "px";
            Line3.current.style.marginLeft =  MoveCalculated + "px";
        }
    };


    return (
        <section className="TopBackground" id="Home">
            <div className="TopBackgroundFrame">
                <div className="TopBackgroundLine" ref={Line1}>
                    <img src={ImageList[0]} alt="" />
                    <img src={ImageList[1]} alt="" />
                    <img src={ImageList[2]} alt="" />
                    <img src={ImageList[3]} alt="" />
                    <img src={ImageList[4]} alt="" />
                    <img src={ImageList[5]} alt="" />
                </div>

                <div className="TopBackgroundLine" ref={Line2}>
                    <img src={ImageList[6]} alt="" />
                    <img src={ImageList[7]} alt="" />
                    <img src={ImageList[8]} alt="" />
                    <img src={ImageList[9]} alt="" />
                    <img src={ImageList[10]} alt="" />
                    <img src={ImageList[11]} alt="" />
                </div>

                <div className="TopBackgroundLine" ref={Line3}>
                    <img src={ImageList[12]} alt="" />
                    <img src={ImageList[1]} alt="" />
                    <img src={ImageList[2]} alt="" />
                    <img src={ImageList[3]} alt="" />
                    <img src={ImageList[4]} alt="" />
                    <img src={ImageList[5]} alt="" />
                </div>

            </div>
            <div className="TopBackgroundWhiteShadow"></div>
            <h1 className="TopBackgroundTitle">
            고등학생 두명의 영상을<br/>업로드하는 크리에이터 팀<br/>
                <Link to="Section" smooth offset={-100}>
                    <button className="AboutUsButton w_4">About US</button>                
                </Link>
            </h1>
        </section>
    )
}

export default TopBackground;