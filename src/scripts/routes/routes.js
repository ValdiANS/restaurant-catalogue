import RestaurantList from '../views/pages/restaurant-list';
import Favorite from '../views/pages/favorite';
import RestaurantDetail from '../views/pages/restaurant-detail';

const routes = {
  '/': RestaurantList,
  '/favorite': Favorite,
  '/detail/:id': RestaurantDetail,
};

export default routes;
