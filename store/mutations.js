export default {
    SET_LIST_CATEGORIES(state, newValue) {
        state.categories = [...newValue];
    },
    SET_LIST_PRODUCT(state, newValue) {
        state.products = [...newValue];
    },
};