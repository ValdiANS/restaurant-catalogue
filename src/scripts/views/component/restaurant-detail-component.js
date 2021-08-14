/* eslint-disable class-methods-use-this */
import API_ENDPOINT from '../../globals/api-endpoint';
import LikeButtonHelper from '../../utils/like-button-helper';

class RestaurantDetailComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set restaurantData(restJsonData) {
    this._restData = restJsonData;
  }

  async render() {
    this.innerHTML = `
        <div class="restaurant-detail__content">
            <img class="lazyload restaurant-detail__content__thumbnail" data-src="${API_ENDPOINT.LARGE_IMAGE(this._restData.pictureId)}" alt="${this._restData.name} Restaurant">
            <div class="restaurant-detail__content__info">
                <div class="restaurant-detail__content__title-container">
                    <h1 class="restaurant-detail__content__title">${this._restData.name}</h1>
                    <p class="restaurant-detail__content__rating">⭐ ${this._restData.rating} </p>
                    <p class="restaurant-detail__content__address">${this._restData.address}, ${this._restData.city}</p>
                </div>

                <h4>Kategori Menu</h4>
                <p>${this._categories()}</p>
                
                <h4>Menu Makanan</h4>
                <ul>
                    ${this._menu(this._restData.menus.foods)}
                </ul>

                <h4>Menu Minuman</h4>
                <ul>
                    ${this._menu(this._restData.menus.drinks)}
                </ul>
            </div>
        </div>
        
        <div class="like-container">
        </div>

        <div class="restaurant-detail__description">
            <h2>Deskripsi</h2>
            <p>${this._restData.description}</p>
        </div>

        <div class="restaurant-detail__review">
            <h2>Review</h2>
            ${this._customerReview()}
        </div>
    `;

    const likeButtonHelper = new LikeButtonHelper(this._restData);
    await likeButtonHelper.renderLikeButton();
  }

  _categories() {
    const categoriesList = [];
    this._restData.categories.forEach((category) => categoriesList.push(category.name));

    return categoriesList.join(', ');
  }

  _menu(menus) {
    let menuElement = '';

    menus.forEach((menu) => {
      menuElement += `<li>${menu.name}</li>`;
    });

    return menuElement;
  }

  _customerReview() {
    let customerReview = '';

    this._restData.customerReviews.forEach((customer) => {
      customerReview += `<p>${customer.name}, ${customer.date} : ${customer.review}</p>`;
    });

    return customerReview;
  }
}

customElements.define('restaurant-detail-component', RestaurantDetailComponent);
export default RestaurantDetailComponent;
