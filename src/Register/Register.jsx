import React, { useState } from "react";
import { IconFacebook, IconGoogle } from "../Login/style";
import { Container, Wrapper, WrapperNavbar, Login, Register, Text, Input1, Input2, Button, WrapperHr, Hr1, Hr2, TextHr, ButtonGoogle, Footer } from "./style";


const Regiister = () =>{

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')


    const onName =(e)=>{
        setName({name: e.target.value})
    }

    const onEmail =(e)=>{
        setEmail({email: e.target.value})
    }

    const onPassword =(e)=>{
        setPassword({password: e.target.value})
    }

    const onPassword2 =(e)=>{
        setPassword2({password2: e.target.value})
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        console.log(name,email,password,password2)
        setName('')
        setEmail('')
        setPassword('')
        setPassword2('')
    }
    return(
        <Container>
            <Wrapper>
                <WrapperNavbar>
                    <Login>Login</Login>|<Register >Register</Register>
                </WrapperNavbar>
                <Text>Enter your email and password to register.</Text>
                <form onSubmit={onSubmit}>
                <Input1 placeholder="Username" onChange={onName}/>
                <Input1 placeholder="Enter your email address" type='email' onChange={onEmail}/>
                <Input2 placeholder="Password" type='password' onChange={onPassword}/>
                <Input2 placeholder="Confirm Password" type='password' onChange={onPassword2}/>
                <Button type="submit">Register</Button>
                </form>
                <WrapperHr>
                    <Hr1 />
                    <pre>
                        <TextHr>Or register with</TextHr>
                    </pre>
                    <Hr2 />
                </WrapperHr>
                <ButtonGoogle><IconGoogle /> Login with Google</ButtonGoogle>
                <ButtonGoogle><IconFacebook /> Login with FaceBook</ButtonGoogle>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Regiister