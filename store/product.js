export const state = {
  products: [],
};
export const getters = {
  getListProduct: (state) => state.products,
};
export const actions = {
  async createProduct({ commit }, data) {
    try {
      const response = await axiosInstance.post("/product/", data);
      if (response.status === 201) {
        return {
          ok: true,
        };
      } else {
        return {
          ok: false,
        };
      }
    } catch (error) {}
  },

  async findProductbyId({ commit }, id) {
    try {
      const result = await axiosInstance.get(`/product/${id}`);
      if (result.status === 200) {
        return result.data;
      }
    } catch (error) {}
  },

  async UpdateProduct({ commit }, { id, data }) {
    try {
      const response = await axiosInstance.put("/product/" + id, data);
      if (response.status === 200) {
        return {
          ok: true,
        };
      } else {
        return {
          ok: false,
        };
      }
    } catch (error) {}
  },
};
