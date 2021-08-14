/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Showing empty liked restaurants', ({ I }) => {
  I.see('There Is No Favorite Restaurant Yet', '.restaurants__no-favorite');
});

Scenario('Liking one restaurant', async ({ I }) => {
  await likingRestaurant(I);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  await likingRestaurant(I);

  // Unliking

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  I.click(locate('.restaurant-item__title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('There Is No Favorite Restaurant Yet', '.restaurants__no-favorite');
});

const likingRestaurant = async (I) => {
  I.see('There Is No Favorite Restaurant Yet', '.restaurants__no-favorite');

  I.amOnPage('/');

  I.seeElement('.restaurant-item__title a');

  const firstRestaurant = locate('.restaurant-item__title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-item__title');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
};
