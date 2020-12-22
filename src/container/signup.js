import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Signup, Signin, Header } from "../components";
import * as ROUTES from "../constants/routes";
import { BsInfo } from "react-icons/bs";
import logo from "../logo.png";
import { FirebaseContext } from "../context/firebase";

export function SignupContainer() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid =
    name === "" || email === "" || password === "" || checkPassword === "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isInvalid) {
      setError("Some input fields are empty!");
    } else if (password !== checkPassword) {
      setError("Password did not match!");
    } else {
      return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((result) =>
          result.user
            .updateProfile({
              displayName: name,
            })
            .then(() => {
              history.push(ROUTES.BROWSE);
            })
        )
        .catch((error) => {
          setName("");
          setEmail("");
          setPassword("");
          setCheckPassword("");
          setError(error.message);
        });
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setError("");
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  return (
    <Signin>
      <Signin.Inner>
        <Header.Link to={ROUTES.HOME}>
          <Header.Logo src={logo} />
        </Header.Link>
        <Header.Form onSubmit={handleSubmit} method="POST">
          <Signin.Title>Create account</Signin.Title>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Signin.Label>Your name</Signin.Label>
          <Header.Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Signin.Label>Email</Signin.Label>
          <Header.Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Signin.Label>Password</Signin.Label>
          <Header.Input
            type="password"
            placeholder="At least 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Signup.Warning>
            <BsInfo />
            Password must be at least 6 characters
          </Signup.Warning>
          <Signin.Label>Re-enter password</Signin.Label>
          <Header.Input
            type="password"
            value={checkPassword}
            onChange={(e) => setCheckPassword(e.target.value)}
          />
          <Header.Link to={ROUTES.BROWSE} onClick={handleSubmit}>
            <Header.Button>Create your Amazon account</Header.Button>
          </Header.Link>
          <Signin.Text>
            By creating an account you agree to Amazon's{" "}
            <Signin.SubText>Conditions of Use</Signin.SubText>
            and <Signin.SubText>Privacy Notice.</Signin.SubText>
          </Signin.Text>
          <Signin.Label>
            Already have an account?
            <Header.Link to={ROUTES.SIGNIN}>
              <Signin.SubText>Sign in?</Signin.SubText>
            </Header.Link>
          </Signin.Label>
        </Header.Form>
      </Signin.Inner>
    </Signin>
  );
}
