export const state = {
  headers: [],
};
export const getters = {
  getListHeaders: (state) => state.headers,
};
export const mutations = {
  SET_LIST_HEADERS(state, newValue) {
    state.headers = [...newValue];
  },
};
export const actions = {
  async getListHeaders({ commit }) {
    try {
      const response = await axiosInstance.get("/headers/");
      if (response.status === 200) {
        commit("SET_LIST_HEADERS", response.data);
      }
    } catch (error) {
      console.error("Error fetching headers:", error);
    }
  },

  async getHeader({ commit }, id) {
    try {
      const response = await axiosInstance.get("/headers/" + id);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error("Error fetching headers:", error);
    }
  },

  async updateHeader({ commit }, { data, id }) {
    try {
      const response = await axiosInstance.put("/headers/" + id, data);
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

  async createHeader({ commit }, data) {
    try {
      const response = await axiosInstance.post("/headers/", data);
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

  async deleteHeader({ commit }, id) {
    try {
      const response = await axiosInstance.delete("/headers/" + id);
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
