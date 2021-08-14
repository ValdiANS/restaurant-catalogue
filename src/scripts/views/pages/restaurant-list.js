import RestaurantDataSource from '../../data/restaurant-data-source';

class RestaurantList {
  static async render() {
    return `
      <h1 class="restaurants__title">Restaurant List</h1>
      <div class="restaurant-list">

          <!-- Restaurant Item -->

      </div>
    `;
  }

  static async afterRender() {
    const restaurants = await RestaurantDataSource.getAllList();
    const restaurantListContainer = document.querySelector('.restaurant-list');

    restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.restaurantData = restaurant;

      restaurantListContainer.appendChild(restaurantItem);
    });
  }
}

export default RestaurantList;
