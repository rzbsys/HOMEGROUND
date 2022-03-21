import React, {useState, useRef, useEffect} from "react";
import "styles/NavBar.scss";
import Logo from "images/logo.png";
import { throttle } from 'lodash';
import { Link } from "react-scroll"
import Menu from "images/menu.svg";

function NavBar() {

    const [NevEnable, SetNevEnable] = useState(false);
    const [IsMobileMenuOpen, SetIsMobileMenuOpen] = useState(false);
    const NavRef = useRef();
    const MobileMenuRef = useRef();
    
    function MobileMenuOpen() {
        MobileMenuRef.current.classList.remove("NavBarClosed");
        SetIsMobileMenuOpen(true);
        document.body.style.overflow = "hidden";

    }

    function MobileMenuClose() {
        MobileMenuRef.current.classList.add("NavBarClosed");
        SetIsMobileMenuOpen(false);
        document.body.style.overflow = "auto";

    }




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
                    <h1 className="w_3">Rain Studio</h1>
                </div>

                <div className="NavbarGoto NavBarClosed" ref={MobileMenuRef}>
                    <Link to="Home" smooth offset={-160} onClick={MobileMenuClose}>
                        <p className="GotoBtn">홈</p>
                    </Link>
                    <Link to="TeamInfomation" smooth offset={-160} onClick={MobileMenuClose}>
                        <p className="GotoBtn">팀소개</p>
                    </Link>
                    <Link to="MemberInfomation" smooth offset={-160} onClick={MobileMenuClose}>
                        <p className="GotoBtn">팀원소개</p>
                    </Link>
                    <Link to="Activities" smooth offset={-160} onClick={MobileMenuClose}>
                        <p className="GotoBtn">활동내용</p>
                    </Link>
                    <Link to="Contact" smooth offset={-160} onClick={MobileMenuClose}>
                        <p className="GotoBtn">연락하기</p>
                    </Link>
                    <p className="GotoBtn CloseBtn" onClick={MobileMenuClose}>닫기</p>
                </div>

                <div className="OpenBtn" onClick={MobileMenuOpen}>
                    <img src={Menu} alt="Menu" />
                </div>
            </div>
        </div>
    )
}

export default NavBar;