import  {
    Container,
    Navbar,
    NavLeft,
    Logo,
    NavBox,
    Link,
    Icon,
    Wrapper,
    SmallText,
    BigText,
    NavCenter,
    Form,
    Select,
    Option,
    Input,
    SearchButton,
    NavRight,
    Items,
    SigninBar,
    Button,
    Sign,
    SignUp
} from './styles/header'



export default function Header({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Navbar = function HeaderNavbar({ children, ...restProps }) {
    return <Navbar {...restProps}>{children}</Navbar>
}
Header.NavLeft = function HeaderNavLeft({ children, ...restProps }) {
    return <NavLeft {...restProps}>{children}</NavLeft>
}
Header.Link = function HeaderLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}
Header.Logo = function HeaderLogo({ src, ...restProps }) {
    return <Logo src={src} {...restProps} alt="Amazon"/>
}
Header.NavBox = function HeaderNavBox({ children, ...restProps }) {
    return <NavBox {...restProps}>{children}</NavBox>
}
Header.Icon = function HeaderIcon({ children, ...restProps }) {
    return <Icon {...restProps}>{children}</Icon>
}
Header.Wrapper = function HeaderWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}
Header.SmallText = function HeaderSmallText({ children, ...restProps }) {
    return <SmallText {...restProps}>{children}</SmallText>
}
Header.BigText = function HeaderBigText({ children, ...restProps }) {
    return <BigText {...restProps}>{children}</BigText>
}
Header.NavCenter = function HeaderNavCenter({ children, ...restProps }) {
    return <NavCenter {...restProps}>{children}</NavCenter>
}
Header.Form = function HeaderForm({ children, ...restProps }) {
    return <Form {...restProps}>{children}</Form>
}
Header.Select = function HeaderSelect({ children, ...restProps }) {
    return <Select {...restProps}>{children}</Select>
}
Header.Option = function HeaderOption({ children, ...restProps }) {
    return <Option {...restProps}>{children}</Option>
}
Header.Input = function HeaderInput({ ...restProps }) {
    return <Input {...restProps} />
}
Header.SearchButton = function HeaderSearchButton({ children, ...restProps }) {
    return <SearchButton {...restProps}>{children}</SearchButton>
}
Header.NavRight = function HeaderNavRight({ children, ...restProps }) {
    return <NavRight {...restProps}>{children}</NavRight>
}
Header.Items = function HeaderItems({ children, ...restProps }) {
    return <Items {...restProps}>{children}</Items>
}


Header.SigninBar = function HeaderSigninBar({ children, ...restProps }) {
    return <SigninBar {...restProps}>{children}</SigninBar>
}
Header.Button = function HeaderButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}
Header.Sign = function HeaderSign({ children, ...restProps }) {
    return <Sign {...restProps}>{children}</Sign>
}
Header.SignUp = function HeaderSignUp({ children, ...restProps }) {
    return <SignUp {...restProps}>{children}</SignUp>
}


