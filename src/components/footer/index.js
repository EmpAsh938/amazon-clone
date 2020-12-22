import {
    Container,
    Main,
    Products,
    Title,
    SubText,
    Foot,
    FootText,
} from './styles/footer'

export default function Footer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Footer.Main = function FooterMain({ children, ...restProps }) {
    return <Main {...restProps}>{children}</Main>
}
Footer.Title = function FooterTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
Footer.SubText = function FooterSubText({ children, ...restProps }) {
    return <SubText {...restProps}>{children}</SubText>
}
Footer.Products = function FooterProducts({ children, ...restProps }) {
    return <Products {...restProps}>{children}</Products>
}
Footer.Foot = function FooterFoot({ children, ...restProps }) {
    return <Foot {...restProps}>{children}</Foot>
}
Footer.FootText = function FooterFootText({ children, ...restProps }) {
    return <FootText {...restProps}>{children}</FootText>
}