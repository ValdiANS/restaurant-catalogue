const UrlParser = {
  parseCurrentUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splittedUrl = this._urlSplitter(url);
    return this._urlCombiner(splittedUrl);
  },

  parseCurrentUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlSplit = url.split('/');
    return {
      resource: urlSplit[1] || null,
      id: urlSplit[2] || null,
    };
  },

  _urlCombiner(splittedUrl) {
    const { resource, id } = splittedUrl;
    return (resource ? `/${resource}` : '/') + (id ? '/:id' : '');
  },
};

export default UrlParser;
