import React, {useState, useRef, useEffect} from "react";
import "styles/NavBar.scss";
import Logo from "images/logo.png";
import { throttle } from 'lodash';


function NavBar() {

    const [NevEnable, SetNevEnable] = useState(false);
    const NavRef = useRef();
    
    useEffect(() => {
        window.addEventListener('scroll', throttledScroll);
        return () => {
            window.removeEventListener('scroll', throttledScroll);
        };
    }, [NevEnable]);

    const throttledScroll = throttle(() => {
        if (window.scrollY > 100 && !NevEnable) {
            SetNevEnable(true);
            NavRef.current.classList.add("Navbar-Scrolled");
        } else if(window.scrollY <= 100 && NevEnable) {
            SetNevEnable(false);
            NavRef.current.classList.remove("Navbar-Scrolled");
        }
    }, 100);



    return (
        <div className="NavBarOuterFrame" ref={NavRef}>
            <div className="NarBarInnerFrame">
                <div className="NavBarLogo">
                    <img src={Logo} alt="로고이미지" />
                    <h1 className="w_3">Paridot Studio</h1>
                </div>
            </div>
        </div>
    )
}

export default NavBar;