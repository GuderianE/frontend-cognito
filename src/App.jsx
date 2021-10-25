import styled, { createGlobalStyle } from "styled-components";
import logo from "./HEALTH-CLOUD-SOLUTIONS.png";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  background-color: rgba(0, 160, 255, 1);
`;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  background-image: url(https://www.trilliumcollege.ca/content/user_files/2020/04/shutterstock_797257417.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  z-index: -2;
`;
const Overlay = styled.div`
  position: absolute;
  background-color: rgba(0, 180, 255, 0.5);
  width: 100%;
  height: 100vh;
  z-index: 1;
`;

const Main = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  z-index: 2;
`;
const Image = styled.img`
  display: flex;
  height: 2.8rem;
`;

const Title = styled.h1`
  position: absolute;
  color: #fff;
  top: 25rem;
  z-index: 10;
  font-size: 64px;
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <header>
        <Navigation>
          <div>
            <Image src={logo} alt="Medical logo" />
          </div>
        </Navigation>
      </header>
      <Main>
        <Wrapper>
          <Overlay />
          <Background>
            <Title>Willkommen Herr Doktor Mustermann</Title>
          </Background>
        </Wrapper>
      </Main>
      <footer></footer>
    </>
  );
}
