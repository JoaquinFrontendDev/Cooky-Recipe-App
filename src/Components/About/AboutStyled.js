import styled from "styled-components";
import background from "../../images/background.jpg";

export const AboutContainer = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${background});
  background-position: center;
  background-size: cover;
`;

export const AboutContentContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const AboutContentHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const AboutH1 = styled.h1`
  font-size: clamp(2rem, 2vw, 3rem);
  padding: 1rem;
  color: #fff;
  box-shadow: 3px 5px #e9ba23;
  margin-bottom: 3rem;
`;

export const AboutContentText = styled.div`
  width: 50%;
  color: #fff;
  text-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(to right, #084b83 30%, #0984e3 100%);
  border-radius: 12px;

  @media screen and (max-width: 900px) {
    width: 80%;
  }
`;

export const AboutPH3 = styled.h3`
  color: #fff;
  font-size: clamp(2rem, 2vw, 3rem);
  padding-top: 1rem;
`;

export const AboutPH4 = styled.h4`
  color: #fff;
  font-size: clamp(1.5rem, 1.5vw, 2.5rem);
  padding-top: 1rem;
`;

export const AboutP = styled.p`
  width: 100%;
  font-size: clamp(1rem, 1.5vw, 1.3rem);
  padding: 2rem 3rem;
  color: #fff;
  white-space: pre-wrap;
`;

export const AboutAPIContainer = styled.article`
  width: 80%;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 3rem 0;
  border-radius: 12px;
  background: linear-gradient(to right, #192a56 30%, #00a8ff 100%);

  @media screen and (max-width: 900px) {
    width: 90%;
  }
`;
