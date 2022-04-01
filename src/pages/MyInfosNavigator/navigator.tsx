import { My } from './My';
// import views here

const views: { [key: string]: any } = {
  My,
  // add viewsName here
};

export const routes = Object.keys(views).map((route) => ({
  options: { headerShown: false },
  name: route,
  key: route,
  component: views[route],
}));
