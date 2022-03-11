import styled from 'styled-components'


export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
background: #E5E5E5;
`

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 500px;
height: 590px;
box-sizing: border-box;
padding: 0 100px;
background-color: #fff;
`

export const WrapperNavbar =styled.div`
display: flex;
`

export const Login =styled.div`
display: flex;
align-items: center;
justify-content: center;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 16px;
color: #3D3D3D;
margin-right: 13px;
:hover{
    cursor: pointer;
    color: #46A358;
}
`

export const Register =styled.div`
display: flex;
align-items: center;
justify-content: center;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 16px;
color: #3D3D3D;
margin-left: 13px;

:hover{
    cursor: pointer;
    color: #46A358;
}
`

export const Text = styled.div`
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 16px;
width: 100%;
color: #3D3D3D;
margin-top: 53px;
`

export const Input1 = styled.input`
width: 100%;
height: 40px;
border: 1px solid #EAEAEA;
box-sizing: border-box;
border-radius: 5px;
margin-top: 14px;
padding-left: 14px;
:active{
    border: 1px solid #46A358;
    box-sizing: border-box;
}
`
export const Input2 = styled.input`
width: 100%;
height: 40px;
border: 1px solid #EAEAEA;
box-sizing: border-box;
border-radius: 5px;
margin-top: 17px;
padding-left: 14px;
:active{
    border: 1px solid #46A358;
    box-sizing: border-box;
}
`
export const Text2 =styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #46A358;
margin-left: auto;
cursor: pointer;
margin-top: 14px;
`

export const Button =styled.button`
display: flex;
justify-content: center;
align-items: center;
color: #fff;
width: 100%;
height: 45px;
background: #46A358;
border-radius: 5px;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
border: none;
cursor: pointer;
margin-top: 27px;
:active{
    transform: scale(.99);
}
`

export const WrapperHr = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 45px;
width: 100%;
margin-bottom: 12px;
`
export const Hr1 = styled.hr`
color: #3D3D3D;
width: 100%;
` 

export const TextHr = styled.div`
margin: 0 10px;
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 16px;
color: #3D3D3D;
`

export const Hr2 = styled.hr`
color: #3D3D3D;
width: 100%;
` 
export const ButtonGoogle = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 40px;
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 16px;
color: #727272;
background-color: #fff;
border: 1px solid #EAEAEA;
box-sizing: border-box;
border-radius: 5px;
margin-top: 15px;
:active{
    transform: scale(.99);
}
`
export const Footer = styled.div`
background-color: #46A358;
width: 500px;
height: 10px;
` 