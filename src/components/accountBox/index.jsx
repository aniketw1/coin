import React, { useState } from "react";
import styled from "styled-components";
import coinLogo from "../assets/coin_logo.png"
import { LoginForm } from "./loginForm";
import { RegisterForm } from "./registerForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";



const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  height: '100vh',
  min-height : '100vh'
  @media (max-width: 300px) {
    width: 100%;
    background-color: red;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 2.2em;
  padding-bottom: 3.5em;
`;

const BackDrop = styled(motion.div)`
    width: 160%;
    height: 600px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(60deg);
    top: -290px;
    left: -70px;
    background: rgb(241, 196, 15);
    background: linear-gradient(
        50deg,
        rgba(44,219,123,255) 20%,
        rgba(44,215,121,253) 100%
    );
`;

const backdropVariants = {
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)",
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)",
    }
};

const fontExpandChange = {
    g: {
        color: 'rgba(44,219,123,255)'
    },
    w: {
        color: '#fff'
    }
};


const HeaderContainer = styled.div`
    width: 80%;
    margin-top: 0;
    height: 100%; //10%
    display: flex;
    // flex-direction: column;
    background-image: url(${coinLogo}); 
    background-size: 300px 120px;
    background-repeat: no-repeat;
    border-bottom-right-radius: 100px;
    border-bottom-left-radius: 90px;
    background-position-y: 20px ;
    background-position-x: -50px ;
    z-index: 10;
`;

const HeaderTextLogin = styled(motion.div)`
    padding-top: 90%;  //
    padding-left: 3%;
    font-size: 20px;
    font-weight: 600;
    line-height: 4.24;
    color: rgba(44,219,123,255);
    z-index: 11;
    margin: 0;
  );
`;

const HeaderTextRegister = styled(motion.div)`
    padding-top: 90%; 
    padding-left: 6%;
    font-size: 20px;
    font-weight: 600;
    line-height: 4.24;
    color: rgba(44,219,123,255);
    z-index: 11;
    margin: 0;
`;

const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.2em;
`;

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
}


export function AccountBox(props){
    const [isExpanded, setExpanded] = useState(false);
    const [isColorChange, setColorChange] = useState(false);
    const [active, setActive] = useState("signin");

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 -1500);
    }

    const playColorChange = () => {
        setColorChange(true);
        setTimeout(() => {
            setColorChange(false);
        }, 1400);
    }

    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signup")
        }, 400);
    }

    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signin")
        }, 400);
    }

    const contextValue = { switchToSignin, switchToSignup };

    return(
        <AccountContext.Provider value={contextValue}>
            
                <BoxContainer id="bb">
                    <TopContainer>
                        <BackDrop
                            initial={false}
                            animate={ isExpanded ? "expanded" : "collapsed" }
                            variants={backdropVariants}
                            transition={expandingTransition}
                        />
                        <HeaderContainer>
                            <HeaderTextLogin
                                initial={false}
                                animate={ isColorChange ? "w" : "g"}
                                variants={fontExpandChange}
                                onClick={() => {
                                    if(active === "signup"){
                                        playExpandingAnimation(); 
                                        playColorChange();
                                        switchToSignin();
                                    }
                                }}>
                                LOGIN
                            </HeaderTextLogin>
                            <HeaderTextRegister 
                                initial={false}
                                animate={ isColorChange ? "w" : "g"}
                                variants={fontExpandChange}
                                onClick={() => {
                                    if(active === "signin"){
                                        playExpandingAnimation(); 
                                        playColorChange();
                                        switchToSignup();
                                    }
                                }} >
                                REGISTER
                            </HeaderTextRegister>
                        </HeaderContainer>
                    </TopContainer>
                    <InnerContainer>
                        { active === "signin" && <LoginForm/> }
                        { active === "signup" && <RegisterForm/>}  
                    </InnerContainer>
                </BoxContainer> 
        </AccountContext.Provider>
    )
}