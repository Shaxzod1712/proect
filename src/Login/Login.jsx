import React, {useState} from "react";
import { Container,WrapperNavbar,Login,Register, Wrapper, Text, Input1, Input2, Text2, Button, WrapperHr, Hr1, Hr2, TextHr, ButtonGoogle, Footer, IconGoogle, IconFacebook } from "./style";


const Logiin = () =>{
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const onName = (e) =>{
        setName({name: e.target.value})
    }

    const onPassword = (e) =>{
        setPassword({password: e.target.value})
    }


    const onSubmit=(e)=>{
        e.preventDefault();
        console.log(name, password)
        setName('')
        setPassword('')
    }
    return(
        <Container>
            <Wrapper>
                <WrapperNavbar>
                    <Login>Login</Login>|<Register >Register</Register>
                </WrapperNavbar>
                <Text>Enter your username and password to login.</Text>
                <form onSubmit={onSubmit}>
                <Input1 placeholder="almamun_uxui@outlook.com" onChange={onName}/>
                <Input2 placeholder="password" type='password'  onChange={onPassword}/>
                <Text2>Forgot Password?</Text2>
                <Button type="submit">Login</Button>
                </form>
                <WrapperHr>

                    <Hr1 />
                    <pre><TextHr>Or login with</TextHr></pre>
                    <Hr2 />
                </WrapperHr>
                <ButtonGoogle><IconGoogle/> Login with Google</ButtonGoogle>
                <ButtonGoogle><IconFacebook /> Login with FaceBook</ButtonGoogle>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Logiin