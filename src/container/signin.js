import { useContext, useEffect, useState } from "react";
import { Signin, Header } from "../components";
import { FirebaseContext } from '../context/firebase'
import { useHistory } from 'react-router-dom'
import * as ROUTES from "../constants/routes";
import logo from '../logo.png'

export function SignInContainer() {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const inValid = email === '' || password === ''

  const handleSubmit = e => {
    e.preventDefault()

    if (inValid) {
      setError('Fields are Empty!')
    } else {
      return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          history.push(ROUTES.BROWSE)
        })
        .catch((error) => {
          setEmail('');
          setPassword('');
          setError(error.message);
        })
    }

  }

  useEffect(() => {
    let timer = setTimeout(() => {
      setError('')
    }, 2000)
    
    return () => {
      clearTimeout(timer)
    }
  },[error])
  return (
    <Signin>
      <Signin.Inner>
        <Header.Link to={ROUTES.HOME}>
          <Header.Logo src={logo}/>
        </Header.Link>
        <Header.Form onSubmit={handleSubmit} method="POST">
          <Signin.Title>Sign-In</Signin.Title>
          {error && <p style={{color:'red'}}>{error}</p>}
          <Signin.Label>Email or mobile phone number</Signin.Label>
          <Header.Input 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <Signin.Label>Password</Signin.Label>
          <Header.Input 
          type="password"
          autoComplete="off"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
          <Header.Link to={ROUTES.BROWSE} onClick={handleSubmit}>
          <Header.Button>Continue</Header.Button>
          </Header.Link>
          <Signin.Text>
            By containing you agree to Amazon's <Signin.SubText>
            Conditions of Use </Signin.SubText>
            and <Signin.SubText>
            Privacy
            Notice. </Signin.SubText>
          </Signin.Text>
          <Signin.Text>New to Amazon?</Signin.Text>
          <Header.Link to={ROUTES.SIGNUP}>
          <Header.Button>Create Your Amazon account</Header.Button>
          </Header.Link>
        </Header.Form>
      </Signin.Inner>
    </Signin>
  );
}
