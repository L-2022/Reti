import AddLogo from "./pages/AddLogo";
import {
  ADD_LOGO_ROUTE,  
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  USER_PROFILE,
  LOGO_ROUTE,
} from "./utils/consts";
import Profile from "./pages/Profile";
import Shop from "./pages/Logo";
import Auth from "./pages/Auth";
import LogoPage from "./pages/LogoPage";

export const authRoutes = [
  {
    path: ADD_LOGO_ROUTE,
    Component: AddLogo,
  },

  {
    path: USER_PROFILE,
    Component: Profile,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: LOGO_ROUTE + "/:id",
    Component: LogoPage,
  },
];
