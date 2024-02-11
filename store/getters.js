export default {
  // Rút gọn các getter chỉ có một dòng trả về
  getListCategories: (state) => state.categories,
  getListProduct: (state) => state.products,
  getListHeaders: (state) => state.headers,
  getListFooter: (state) => state.footer,
  detailedOrder: (state) => state.order,
  gettotalPages: (state) => state.totalPages,
  getBanner: (state) => state.banners,
  getReport: (state) => state.dashboard,
};
