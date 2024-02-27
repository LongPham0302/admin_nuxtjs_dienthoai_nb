export const state = {
  footer: [],
};
export const getters = {
  getListFooter: (state) => state.footer,
};
export const mutations = {
  SET_LIST_FOOTER(state, newValue) {
    state.footer = [...newValue];
  },
};
export const actions = {
  async getListFooter({ commit }) {
    try {
      const res = await axiosInstance.get("/footer");
      if (res.status === 200) {
        commit("SET_LIST_FOOTER", res.data);
      }
    } catch (error) {
      console.error("Error fetching footer:", error);
    }
  },

  async getFooterById({ commit }, id) {
    try {
      const res = await axiosInstance.get(`/footer/${id}`);
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      console.error("Error fetching footer:", error);
    }
  },

  async createFooter({ commit }, data) {
    try {
      const res = await axiosInstance.post("/footer", data);
      if (res.status === 201) {
        return {
          ok: true,
        };
      }
      return {
        ok: false,
      };
    } catch (error) {
      return error.response.data.message;
    }
  },

  async updateFooter({ commit }, { id, data }) {
    try {
      const res = await axiosInstance.put(`/footer/${id}`, data);
      if (res.status === 200) {
        return {
          ok: true,
        };
      }
      return {
        ok: false,
      };
    } catch (error) {
      return error.response.data.message;
    }
  },

  async deleteFooter({ commit }, id) {
    try {
      const res = await axiosInstance.delete(`/footer/${id}`);
      if (res.status === 200) {
        return {
          ok: true,
        };
      }
      return {
        ok: false,
      };
    } catch (error) {
      return error.response.data.message;
    }
  },
};
