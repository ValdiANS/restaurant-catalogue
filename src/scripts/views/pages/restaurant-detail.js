import RestaurantDataSource from '../../data/restaurant-data-source';
import UrlParser from '../../routes/parser';

class RestaurantDetail {
  static async render() {
    return `
      <h1 class="restaurants__title">Restaurant Detail</h1>
      <div class="restaurant-detail">

          <!-- Restaurant detail -->

      </div>
    `;
  }

  static async afterRender() {
    const url = UrlParser.parseCurrentUrlWithoutCombiner();
    const restaurant = await RestaurantDataSource.getDetail(url.id);

    const restaurantDetailContainer = document.querySelector('.restaurant-detail');
    const restaurantDetailComponent = document.createElement('restaurant-detail-component');
    restaurantDetailComponent.restaurantData = restaurant;

    restaurantDetailContainer.appendChild(restaurantDetailComponent);
  }
}

export default RestaurantDetail;
