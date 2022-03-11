import React from "react";
import { Container, Wrapper, WrapperNavbar, Login, Register, Text, Input1, Input2, Button, WrapperHr, Hr1, Hr2, TextHr, ButtonGoogle, Footer } from "./style";


const Regiister = () =>{
    return(
        <Container>
            <Wrapper>
                <WrapperNavbar>
                    <Login>Login</Login>|<Register>Register</Register>
                </WrapperNavbar>
                <Text>Enter your email and password to register.</Text>
                <Input1 placeholder="Username"/>
                <Input1 placeholder="Enter your email address"/>
                <Input2 placeholder="Password" type='password'/>
                <Input2 placeholder="Confirm Password" type='password'/>
                <Button>Register</Button>
                <WrapperHr>
                    <Hr1 />
                    <pre><TextHr>Or register with</TextHr></pre>
                    <Hr2 />
                </WrapperHr>
                <ButtonGoogle>Login with Google</ButtonGoogle>
                <ButtonGoogle>Login with FaceBook</ButtonGoogle>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Regiister