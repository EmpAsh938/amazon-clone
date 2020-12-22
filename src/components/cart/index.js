import {
    Container,
    Image,
    Wrapper,
    Item,
    Title,
    Price,
    Button,
} from './styles/cart'

export default function Cart({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Cart.Image = function CartImage({ ...restProps }) {
    return <Image {...restProps} />
}

Cart.Wrapper = function CartWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}
Cart.Item = function CartItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
}
Cart.Title = function CartTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
Cart.Price = function CartPrice({ children, ...restProps }) {
    return <Price {...restProps}>{children}</Price>
}
Cart.Button = function CartButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}
