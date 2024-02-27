export const state = {
  banners: {},
};
export const getter = {
  getBanner: (state) => state.banners,
};

export const mutations = {
  SET_BANNERS(state, banners) {
    state.banners = banners; // Cập nhật dữ liệu totalPages
  },
};
export const actions = {
  async getBanner({ commit }) {
    try {
      const result = await axiosInstance.get("/banners/");
      if (result.status === 200) {
        commit("SET_BANNERS", result.data[0]);
      }
    } catch (error) {}
  },
  async createBanner({}, data) {
    try {
      const response = await axiosInstance.post("/banners/", data);
      if (response.status === 201) {
        return {
          ok: true,
        };
      } else {
        return {
          ok: false,
        };
      }
    } catch (error) {
      return error.response.data.message;
    }
  },

  async updateBanner({}, { id, data }) {
    try {
      const response = await axiosInstance.put(`/banners/${id}`, data);
      console.log("response", response);
      if (response.status === 200) {
        return {
          ok: true,
        };
      } else {
        return {
          ok: false,
        };
      }
    } catch (error) {
      return error.response.data.message;
    }
  },
};
