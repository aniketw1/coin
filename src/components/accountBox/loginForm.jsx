import React, { useState } from "react";
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { Marginer } from "../marginer";
// import { AccountContext } from "./accountContext";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


export function LoginForm(props){

    // const { switchToSignup } = useContext(AccountContext);
    const [value, setValue] = useState()
    
    
    return <BoxContainer>
        <Marginer direction="vertical" margin={1}/>
        <FormContainer>
            <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}/>
            <Input type="password" placeholder="Password"/>
        </FormContainer> 
        <Marginer direction="vertical" margin={10}/>
        <MutedLink>Send OTP Again</MutedLink>
        <Marginer direction="vertical" margin="1em"/>
        <SubmitButton type="submit"> LogIn</SubmitButton>
           
    </BoxContainer>
}
