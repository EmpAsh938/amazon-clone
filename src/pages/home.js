import { HeaderContainer } from "../container/header";
import { FooterContainer } from "../container/footer";
import { HeroContainer } from '../container/hero'
import { Services, Header } from '../components/'
import info from '../additional/info.json'

import logo from '../amazon-logo.png'

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <HeroContainer />
      <Services>
        <Services.Service>
          {info.map((item, id) => {
            const { title, links } = item
            return (
              <Services.Info key={id}>
                <Services.Title>{title}</Services.Title>
                {links.map((link, id) => {
                  return (
                    <Services.Links key={id}>{link}</Services.Links>
                  )
                })}
              </Services.Info>
            )
          })}
        </Services.Service>

        <Services.Foot>
          <Header.Logo src={logo}/>
        </Services.Foot>
      </Services>
      <FooterContainer />
    </>
  );
}
