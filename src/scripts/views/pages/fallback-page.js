class FallbackPage {
  static async render() {
    const restaurantsElement = document.querySelector('.restaurants');
    const fallbackComponent = document.createElement('fallback-page-component');

    restaurantsElement.appendChild(fallbackComponent);
  }
}

export default FallbackPage;
