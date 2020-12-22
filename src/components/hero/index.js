import {
    Background,
    ShowProds,
    Prods,
    Title,
    Image,
    Break,
} from './styles/hero'


export default function Hero({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>
}

Hero.ShowProds = function HeroShowProds({ children, ...restProps }) {
    return <ShowProds {...restProps}>{children}</ShowProds>
}
Hero.Prods = function HeroProds({ children, ...restProps }) {
    return <Prods {...restProps}>{children}</Prods>
}
Hero.Title = function HeroTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Hero.Image = function HeroImage({ children, ...restProps }) {
    return <Image {...restProps}/>
}
Hero.Break = function HeroBreak({ children, ...restProps }) {
    return <Break {...restProps}/>
}