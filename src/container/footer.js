import { Footer } from "../components";
import footerData from '../additional/footer.json'

export function FooterContainer() {
  return (
    <Footer>
        <Footer.Main>
          {footerData.map(item => {
              const { id, title, text } = item
              return (
                  <Footer.Products key={id}>
                      <Footer.Title>{title}</Footer.Title>
                      <Footer.SubText>{text}</Footer.SubText>
                  </Footer.Products>
              )
          })}  
        </Footer.Main>

        <Footer.Foot>
            <Footer.FootText>Conditions of Use</Footer.FootText>
            <Footer.FootText>Privacy Notice</Footer.FootText>
            <Footer.FootText>Interest-Based Ads</Footer.FootText>
            <Footer.FootText>© 1996-2020, Amazon.com, Inc. or its affiliates</Footer.FootText>
        </Footer.Foot>
    </Footer>
  )
}
