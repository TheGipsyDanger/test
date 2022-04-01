import { Payment } from './Payment';

// import views here

const views: { [key: string]: any } = {
  Payment,
};

export const routes = Object.keys(views).map((route) => ({
  options: { headerShown: false },
  name: route,
  key: route,
  component: views[route],
}));
