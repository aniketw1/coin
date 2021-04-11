import React from "react";
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { Marginer } from "../marginer";

export function RegisterForm(props){
    return <BoxContainer>
        <Marginer direction="vertical" margin={1}/>
        <FormContainer>
            <Input type="text" placeholder="Name"/>
            <Input type="tel" placeholder="Phone Number"/>
            <Input type="number" placeholder="Zipcode"/>
        </FormContainer> 
        <Marginer direction="vertical" margin={10}/>
     
        <SubmitButton type="submit"> Register</SubmitButton>
           
    </BoxContainer>
}
