import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

class Favorite {
  static async render() {
    return `
      <h1 class="restaurants__title">Favorite Restaurant</h1>
      <div class="restaurant-list">
          <!-- Restaurant Item -->

      </div>
    `;
  }

  static async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

    if (restaurants.length === 0) {
      this._renderEmptyFavoriteRestaurant();
    } else {
      this._renderFavoriteRestaurant(restaurants);
    }
  }

  static _renderFavoriteRestaurant(restaurants) {
    const restaurantListContainer = document.querySelector('.restaurant-list');
    restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.restaurantData = restaurant;

      restaurantListContainer.appendChild(restaurantItem);
    });
  }

  static _renderEmptyFavoriteRestaurant() {
    const restaurantsTitle = document.querySelector('.restaurants__title');

    restaurantsTitle.insertAdjacentHTML('afterend', '<h2 class="restaurants__no-favorite">There Is No Favorite Restaurant Yet</h2>');
  }
}

export default Favorite;
