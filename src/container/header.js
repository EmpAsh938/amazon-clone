import { useContext } from "react";
import { Header, Services } from "../components";
import {
  HiOutlineLocationMarker,
  HiOutlineSearch,
  GiUsaFlag,
  RiArrowDropDownFill,
  MdAddShoppingCart,
} from "react-icons/all";
import * as ROUTES from "../constants/routes";
import logo from "../amazon-logo.png";
import { FirebaseContext } from '../context/firebase'
import { useAddCart } from '../addCart'

export function HeaderContainer() {
  const { cartItems } = useAddCart()
  const { firebase } = useContext(FirebaseContext)
  
  const user = firebase.auth().currentUser
  
  const handleSubmit = e => {
    e.preventDefault()

    if (!user) {
      return null
    }
    if (user.displayName) {
      console.log('hell')
    }
  }
  return (
    <Header>
      <Header.Navbar>
        <Header.NavLeft>
          <Header.Link to={ROUTES.HOME}>
            <Header.Logo src={logo} />
          </Header.Link>
          <Header.NavBox location>
            <Header.Icon>
              <HiOutlineLocationMarker />
            </Header.Icon>
            <Header.Wrapper>
              <Header.SmallText>Deliver to</Header.SmallText>
              <Header.BigText>Nepal</Header.BigText>
            </Header.Wrapper>
          </Header.NavBox>
        </Header.NavLeft>

        <Header.NavCenter>
          <Header.Form onSubmit={handleSubmit}>
            <Header.Select>
              <Header.Option>All</Header.Option>
              <Header.Option>Accessories</Header.Option>
            </Header.Select>
            <Header.Input />
            <Header.SearchButton onClick={handleSubmit}>
              <Header.Icon>
                <HiOutlineSearch />
              </Header.Icon>
            </Header.SearchButton>
          </Header.Form>
        </Header.NavCenter>

        <Header.NavRight>
          <Header.NavBox>
            <Header.Icon>
              <GiUsaFlag />
            </Header.Icon>
            <Header.Icon>
              <RiArrowDropDownFill />
            </Header.Icon>
          </Header.NavBox>
          <Header.Wrapper>
            <Header.SmallText>Hello, {user ? user.displayName : 'Sign in'}</Header.SmallText>
            <Header.NavBox>
              <Header.BigText>Account & Lists</Header.BigText>
              <span>
                <RiArrowDropDownFill />
              </span>
              <Header.SigninBar>
                {user ? (
                  <>
                  <Services.Title>Your Account</Services.Title>
                  <Services.Links>Account</Services.Links>
                  <Services.Links 
                  style={{cursor:'pointer'}}
                  onClick={() => 
                  firebase.auth().signOut()
                }
                  >Sign Out</Services.Links>
                  </>
                ) : (
                  <>
                  <Header.Link to={ROUTES.SIGNIN}>
                    <Header.Button>Sign in</Header.Button>
                  </Header.Link>
                  <Header.NavBox>
                    <Header.Sign>New Customer?</Header.Sign>
                    <Header.Link to={ROUTES.SIGNUP}>
                    <Header.SignUp>Start here</Header.SignUp>
                    </Header.Link>
                  </Header.NavBox>
                  </>)}
              </Header.SigninBar>
            </Header.NavBox>
          </Header.Wrapper>
          <Header.Wrapper dontShowOnSmallScreen>
            <Header.SmallText>Returns</Header.SmallText>
            <Header.BigText>& Orders</Header.BigText>
          </Header.Wrapper>
          <Header.Link to={ROUTES.CART}>
            <Header.NavBox>
              <Header.Icon>
                <MdAddShoppingCart />
                <Header.Items>{cartItems.length}</Header.Items>
              </Header.Icon>
              <Header.BigText>Cart</Header.BigText>
            </Header.NavBox>
          </Header.Link>
        </Header.NavRight>
      </Header.Navbar>
    </Header>
  );
}
