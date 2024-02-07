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
};
