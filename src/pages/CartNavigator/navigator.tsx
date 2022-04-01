import { Cart } from './Cart';
import { Payment } from '../PaymentNavigator/Payment';
// import views here

const views: { [key: string]: any } = {
  Cart,
  Payment,
  // add viewsName here
};

export const routes = Object.keys(views).map((route) => ({
  options: { headerShown: false },
  name: route,
  key: route,
  component: views[route],
}));
