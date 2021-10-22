import styled, { createGlobalStyle } from "styled-components";

const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: .5rem;
    background-color: rgba(255,255,255, 1);
    width: 40vw;
    height: 50vh;
    padding: 0 1.5rem;
`;

const Input = styled.input`
    padding: .5rem .1rem;
    border: none;
    border-bottom: 1px solid black;
    border-radius: .3rem;
    margin-bottom: 1rem;
`;

export default function SigninForm() {

    return (
        <>
            <Form>
                <label htmlFor="email">Email</label>
                <Input
                    type="email" value="email"
                />
                <label htmlFor="password">Password</label>
                <Input
                    type="password" value="password"
                />

                <a href="https://prezi.com/i/edit/or9rrcx5kylr/">
                    <button>Signin</button>
                </a>
            </Form>
        </>
    );
}
