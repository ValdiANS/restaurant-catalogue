/* eslint-disable class-methods-use-this */
import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';

class LikeButtonHelper {
  constructor(restaurantData) {
    this._restData = restaurantData;
  }

  async renderLikeButton() {
    if (await this._isRestaurantLiked(this._restData.id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  }

  _renderLike() {
    // console.log('tombol like belum ditekan');

    const likeContainer = document.querySelector('.like-container');
    likeContainer.innerHTML = this._likeButton();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restData);
      await this.renderLikeButton();
    });
  }

  _renderLiked() {
    // console.log('tombol like sudah ditekan');

    const likeContainer = document.querySelector('.like-container');
    likeContainer.innerHTML = this._unlikeButton();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restData.id);
      await this.renderLikeButton();
    });
  }

  async _isRestaurantLiked(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurantDetail(id);
    return !!restaurant;
  }

  _likeButton() {
    return `
      <button aria-label="like this restaurant" class="like" id="likeButton">
          <i class="far fa-heart"></i>
      </button>
    `;
  }

  _unlikeButton() {
    return `
      <button aria-label="unlike this restaurant" class="like liked" id="likeButton">
          <i class="fas fa-heart"></i>
      </button>
    `;
  }
}

export default LikeButtonHelper;
