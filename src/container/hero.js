import { Hero } from '../components'
import { prods } from '../additional/data'

export function HeroContainer() {
  return (
      <Hero>
      <Hero.Break />
      <Hero.ShowProds>
        {prods.map(item => {
          const { id, image, title } = item
          return (
            <Hero.Prods key={id}>
              <Hero.Title>{title}</Hero.Title>
              <Hero.Image src={image} alt={title}/>
            </Hero.Prods>
            )
          })}
      </Hero.ShowProds>
    </Hero>
  )
}