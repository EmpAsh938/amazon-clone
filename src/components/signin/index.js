import {
    Container,
    Inner,
    Title,
    Label,
    Text,
    SubText,

} from './styles/signin'

export default function Signin({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Signin.Inner = function SigninInner({ children, ...restProps }) {
    return <Inner {...restProps}>{children}</Inner>
}

Signin.Title = function SigninTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Signin.Label = function SigninLabel({ children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>
}

Signin.Text = function SigninText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Signin.SubText = function SigninSubText({ children, ...restProps }) {
    return <SubText {...restProps}>{children}</SubText>
}