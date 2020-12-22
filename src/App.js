import { BrowserRouter, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Browse, Cart, Home, SignIn, SignUp, Error } from "./pages";
import useAuth from "./hooks/use-auth";
import { UserRedirect, ProtectedRoute } from "./routes-helper";
import { CartContext } from "./addCart";

function App() {
  const { user } = useAuth();
  // console.log(user)
  return (
    <BrowserRouter>
      <CartContext>
        <Switch>
          <UserRedirect
            user={user}
            loggedin={ROUTES.BROWSE}
            path={ROUTES.HOME}
            exact
          >
            <Home />
          </UserRedirect>

          <ProtectedRoute user={user} path={ROUTES.BROWSE}>
            <Browse />
          </ProtectedRoute>

          <ProtectedRoute user={user} path={ROUTES.CART}>
            <Cart />
          </ProtectedRoute>

          <UserRedirect
            user={user}
            loggedin={ROUTES.BROWSE}
            path={ROUTES.SIGNIN}
          >
            <SignIn />
          </UserRedirect>
          <UserRedirect
            user={user}
            loggedin={ROUTES.BROWSE}
            path={ROUTES.SIGNUP}
          >
            <SignUp />
          </UserRedirect>
          {/* <Route path={ROUTES.ERROR}><Error /></Route> */}
        </Switch>
      </CartContext>
    </BrowserRouter>
  );
}

export default App;
