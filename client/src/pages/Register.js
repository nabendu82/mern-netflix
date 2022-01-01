import { useState } from "react";
import styled from "styled-components";

const RegisterContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 100%
        ),
        url("https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg");
    background-size: cover;
    position: relative;
`;

const TopContainer = styled.div`
    .wrapper {
        padding: 20px 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .logo {
        height: 40px;
    }
`

const BottomContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    h1 { font-size: 50px; }
    h2 { margin: 20px; }
    p { font-size: 20px; }
`

const LoginButton = styled.button`
    background-color: red;
    border: none;
    color: white;
    border-radius: 5px;
    padding: 5px 15px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
`

const RegisterButton = styled.button`
    flex: 3;
    height: 100%;
    background-color: red;
    border: none;
    color: white;
    font-size: 22px;
    cursor: pointer;
`

const StyledForm = styled.form`
    width: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    height: 50px;
    border-radius: 5px;
    input{
        flex: 9;
        height: 100%;
        border: none;
        padding: 0 10px;
    }
`

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleStart = () => {};
    const handleFinish = () => {};

    return (
        <RegisterContainer>
            <TopContainer>
                <div className="wrapper">
                    <img className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt="netflix-logo" />
                    <LoginButton>Sign In</LoginButton>
                </div>
            </TopContainer>
            <BottomContainer>
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                {!email ? (
                    <StyledForm>
                        <input type="email" placeholder="email address" value={email} onChange={e => setEmail(e.target.value)} />
                        <RegisterButton onClick={handleStart}>
                            Get Started
                        </RegisterButton>
                    </StyledForm>
                ) : (
                    <StyledForm>
                        <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                        <RegisterButton onClick={handleFinish}>
                            Start
                        </RegisterButton>
                    </StyledForm>
                )}
            </BottomContainer>
        </RegisterContainer>
    )
}

export default Register
