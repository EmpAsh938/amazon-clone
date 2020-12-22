import {
    Container,
    Warning,

} from './styles/signup'

export default function Signup({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Signup.Warning = function SignupWarning({ children, ...restProps }) {
    return <Warning {...restProps}>{children}</Warning>
}