import { UserAction } from './UserAction';
import { Queue } from './Queue';
import { MapModal } from './MapModal';
// import views here

const views: { [key: string]: any } = {
  UserAction,
  Queue,
  MapModal,
  // add viewsName here
};

export const routes = Object.keys(views).map((route) => ({
  options: { headerShown: false },
  name: route,
  key: route,
  component: views[route],
}));
