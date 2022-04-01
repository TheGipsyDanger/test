import { Menu } from './Menu';
import {
  OrdersRoutes as Orders,
  StatusRoutes,
  ReserveRoutes,
} from '../OrdersNavigator';
import CartNavigator from '../CartNavigator';
import Profile from '../ProfileNavigator';
import My from '../MyInfosNavigator/index';
import UserActionNavigator, {
  UserActionQueueRoutes as UserActionQueueNavigator,
} from '../UserActionNavigator/index';
// import views here

const views: { [key: string]: any } = {
  Menu,
  Cart: CartNavigator,
  My,
  Orders,
  Profile,
  Status: StatusRoutes,
  ReserveResume: ReserveRoutes,
  UserActionNavigator,
  UserActionQueueNavigator,
  // add viewsName here
};

export const routes = Object.keys(views).map((route) => ({
  options: { headerShown: false },
  name: route,
  key: route,
  component: views[route],
}));
