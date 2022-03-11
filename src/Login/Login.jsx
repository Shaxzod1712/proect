import React from "react";
import { Container, Wrapper, WrapperNavbar, Login, Register, Text, Input1, Input2, Text2, Button, WrapperHr, Hr1, Hr2, TextHr, ButtonGoogle, Footer } from "./style";


const Logiin = () =>{
    return(
        <Container>
            <Wrapper>
                <WrapperNavbar>
                    <Login>Login</Login>|<Register>Register</Register>
                </WrapperNavbar>
                <Text>Enter your username and password to login.</Text>
                <Input1 placeholder="almamun_uxui@outlook.com"/>
                <Input2 placeholder="password" type='password'/>
                <Text2>Forgot Password?</Text2>
                <Button>Login</Button>
                <WrapperHr>
                    <Hr1 />
                    <pre><TextHr>Or login with</TextHr></pre>
                    <Hr2 />
                </WrapperHr>
                <ButtonGoogle>Login with Google</ButtonGoogle>
                <ButtonGoogle>Login with FaceBook</ButtonGoogle>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Logiin