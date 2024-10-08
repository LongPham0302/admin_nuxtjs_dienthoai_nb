export default {
  SET_LIST_CATEGORIES(state, newValue) {
    state.categories = [...newValue];
  },
  SET_LIST_PRODUCT(state, newValue) {
    state.products = [...newValue];
  },
  SET_LIST_HEADERS(state, newValue) {
    state.headers = [...newValue];
  },
  SET_LIST_FOOTER(state, newValue) {
    state.footer = [...newValue];
  },
  SET_ORDER(state, orderData) {
    state.order = orderData; // Cập nhật dữ liệu đơn hàng trong state
  },
  SET_TOTAL_PAGES(state, totalPages) {
    state.totalPages = totalPages; // Cập nhật dữ liệu totalPages
  },
  SET_BANNERS(state, banners) {
    state.banners = banners; // Cập nhật dữ liệu totalPages
  },
  SET_DASHBOARD(state, dashboard) {
    state.dashboard = dashboard; // Cập nhật dữ liệu totalPages
  },
  SET_LOADING(state, loading) {
    state.loading = loading; // Cập nhật dữ liệu totalPages
  },
};
