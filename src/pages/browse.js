import { HeaderContainer } from '../container/header'
import { FooterContainer } from '../container/footer'
import { Hero, Products } from '../components'
import products from '../products.json'
import { useAddCart } from '../addCart'

export default function Browse(){
  const { getItem } = useAddCart()
    return (
        <>
        <HeaderContainer />
        <Hero style={{height: "90vh"}}>
        </Hero>
        <Products>
          <Products.Wrapper>
            {products.map((item, id) => {
              const { title, price, rating, image } = item
              return (
                <Products.Item key={id}> 
                  <Products.Title>{title}</Products.Title>
                  <Products.Price>${price}</Products.Price>
                  <Products.Rating>{'⭐'.repeat(Math.floor(rating))}</Products.Rating>
                  <Products.Image  src={image} alt={title}/>
                  <Products.AddButton onClick={()=>getItem(title)}>Add to cart</Products.AddButton>
                </Products.Item>
              )
            })}
          </Products.Wrapper>
        </Products>
        <FooterContainer />
        </>
    )
}