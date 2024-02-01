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
};
