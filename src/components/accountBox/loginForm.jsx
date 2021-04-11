import React, { useContext } from "react";
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { Marginer } from "../marginer";
// import { AccountContext } from "./accountContext";

export function LoginForm(props){

    // const { switchToSignup } = useContext(AccountContext);

    return <BoxContainer>
        <Marginer direction="vertical" margin={1}/>
        <FormContainer>
            <Input type="tel" placeholder="Phone Number"/>
            <Input type="password" placeholder="Password"/>
        </FormContainer> 
        <Marginer direction="vertical" margin={10}/>
        <MutedLink>Send OTP Again</MutedLink>
        <Marginer direction="vertical" margin="1em"/>
        <SubmitButton type="submit"> LogIn</SubmitButton>
           
    </BoxContainer>
}
