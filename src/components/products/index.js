import {
    Container,
    Wrapper,
    Item,
    Image,
    Price,
    Title,
    Rating,
    AddButton,
} from './styles/products'

export default function Products({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Products.Wrapper = function ProductsWrapper({ children, ...restProps }){
    return <Wrapper {...restProps}>{children}</Wrapper>
}
Products.Item = function ProductsItem({ children, ...restProps }){
    return <Item {...restProps}>{children}</Item>
}
Products.Image = function ProductsImage({ children, ...restProps }){
    return <Image {...restProps}>{children}</Image>
}
Products.Price = function ProductsPrice({ children, ...restProps }){
    return <Price {...restProps}>{children}</Price>
}
Products.Title = function ProductsTitle({ children, ...restProps }){
    return <Title {...restProps}>{children}</Title>
}
Products.Rating = function ProductsRating({ children, ...restProps }){
    return <Rating {...restProps}>{children}</Rating>
}
Products.AddButton = function ProductsAddButton({ children, ...restProps }){
    return <AddButton {...restProps}>{children}</AddButton>
}