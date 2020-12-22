import {
    Container,
    Service,
    Info,
    Title,
    Links,
    Foot
} from './styles/services'

export default function Services({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Services.Service = function ServicesService({ children, ...restProps }) {
    return <Service {...restProps}>{children}</Service>
}
Services.Info = function ServicesInfo({ children, ...restProps }) {
    return <Info {...restProps}>{children}</Info>
}
Services.Title = function ServicesTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
Services.Links = function ServicesLinks({ children, ...restProps }) {
    return <Links {...restProps}>{children}</Links>
}
Services.Foot = function ServicesFoot({ children, ...restProps }) {
    return <Foot {...restProps}>{children}</Foot>
}