class FallbackPageComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2 class="fallback-title">404 - Error Not Found</h2>
      <h3 class="fallback-description">The page you're looking for is not exist</h3>
      
      <div class="fallback-link-container">
          <a href="/" class="fallback-link">Back To Home</a>
      </div>
    `;
  }
}

customElements.define('fallback-page-component', FallbackPageComponent);
