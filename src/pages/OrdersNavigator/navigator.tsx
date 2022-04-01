import { Orders } from './Orders';
import { Status } from './Status';
import { ReserveResume } from './ReserveResume';
import { ReserveResumeStep2 } from './ReserveResumeStep2';
import { MapModal } from '../UserActionNavigator/MapModal';
// import views here

const views: { [key: string]: any } = {
  Orders,
  Status,
  ReserveResume,
  ReserveResumeStep2,
  MapModal,
  // add viewsName here
};

export const routes = Object.keys(views).map((route) => ({
  options: { headerShown: false },
  name: route,
  key: route,
  component: views[route],
}));
