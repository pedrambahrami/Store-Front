import axios from "axios";

const API_URL = "https://example.com/api/promo-banners";

export const promoBannerService = {
  getPromoBanners() {
    return axios.get(API_URL).then(res => res.data);
  },

  addPromoBanner(newBanner) {
    return axios.post(API_URL, newBanner).then(res => res.data);
  },

  deletePromoBanner(id) {
    return axios.delete(`${API_URL}/${id}`).then(res => res.data);
  }
};
