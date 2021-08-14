import API_ENDPOINT from '../../globals/api-endpoint';

class RestaurantItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set restaurantData(restJsonData) {
    this._restData = restJsonData;
  }

  render() {
    this.innerHTML = `
      <article class="restaurant-item">
          <div class="thumbnail-container">
              <picture>
                  <source media="(max-width: 680px)" data-srcset="${API_ENDPOINT.SMALL_IMAGE(this._restData.pictureId)}">
                  <source media="(max-width: 900px)" data-srcset="${API_ENDPOINT.MEDIUM_IMAGE(this._restData.pictureId)}">
                  <img class="lazyload restaurant-item__thumbnail" data-src="${API_ENDPOINT.LARGE_IMAGE(this._restData.pictureId)}" alt="${this._restData.name} Restaurant">
              </picture>
              <p class="restaurant-item__city">${this._restData.city}</p>
          </div>
          <div class="restaurant-item__content">
              <h1 class="restaurant-item__title"><a href='#/detail/${this._restData.id}'>${this._restData.name}</a></h1>
              <p class="restaurant-item__description">
                  ${this._restData.description}
              </p>
              
              <!-- Rating -->
              <p class="restaurant-item__rating">
                  ${this._restData.rating} 
                  
                  ${this._rating()}
              </p>
          </div>
      </article>
    `;
  }

  _rating() {
    const { rating } = this._restData;
    const roundedRating = Math.round(rating);
    let printedStar;
    let ratingStar = '';
    let neededStar = 5;

    if (rating < roundedRating) {
      printedStar = roundedRating - 1;
    } else {
      printedStar = roundedRating;
    }

    for (let i = 0; i < printedStar; i++) {
      ratingStar += '<i class="fas fa-star"></i>';
    }

    neededStar -= printedStar;
    const isItNeedHalfStar = printedStar !== roundedRating;

    if (isItNeedHalfStar) {
      neededStar -= 1;
      ratingStar += '<i class="fas fa-star-half-alt"></i>';
    }

    for (let i = 0; i < neededStar; i++) {
      ratingStar += '<i class="far fa-star"></i>';
    }

    return ratingStar;
  }
}

customElements.define('restaurant-item', RestaurantItem);
