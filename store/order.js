export const state = {
  order: {},
};
export const getters = {
  detailedOrder: (state) => state.order,
};
export const mutations = {
  SET_ORDER(state, orderData) {
    state.order = orderData; // Cập nhật dữ liệu đơn hàng trong state
  },
};
export const actions = {
  async getListOrder({ commit }, { page = 1 }) {
    try {
      const response = await axiosInstance.get("/orders", {
        params: {
          page: page,
        },
      });
      if (response.status === 200) {
        commit("SET_ORDER", response.data);
        return response.data;
      }
    } catch (error) {}
  },

  async updateOrder({ commit }, { id, data }) {
    try {
      const response = await axiosInstance.put("/orders/" + id, data);
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
