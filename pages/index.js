import { useMoralis } from "react-moralis";
import styled from "styled-components";

export default function HomePage() {
  const { authenticate, isAuthenticated, logout, user, isAuthenticating } =
    useMoralis();

  const onHandleSignIn = () => {
    authenticate({ provider: "metamask" });
  };
  // https://admin.moralis.io/servers
  return (
    <Styled>
      {isAuthenticated ? (
        <>
          <button onClick={logout}>Logout</button>
          <p>Welcome <strong>{user.get("username")}</strong></p>
          <p>Your wallet address is <strong>{user.get("ethAddress")}</strong></p>
        </>
      ) : (
        <button onClick={onHandleSignIn}>Sign in with MetaMask</button>
      )}
      {isAuthenticating && <p>Processing...</p>}
    </Styled>
  );
}

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  * {
    font-family: sans-serif !important; 
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    border: 2px black solid;
    background-color: #fff;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
`;
