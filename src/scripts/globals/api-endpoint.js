import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SMALL_IMAGE: (id) => `${CONFIG.BASE_IMAGE_URL}small/${id}`,
  MEDIUM_IMAGE: (id) => `${CONFIG.BASE_IMAGE_URL}medium/${id}`,
  LARGE_IMAGE: (id) => `${CONFIG.BASE_IMAGE_URL}large/${id}`,
};

export default API_ENDPOINT;
