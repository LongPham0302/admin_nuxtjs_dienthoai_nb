export const state = {
  categories: [],
};
export const getters = {
  getListCategories: (state) => state.categories,
};
export const mutations = {
  SET_LIST_CATEGORIES(state, newValue) {
    state.categories = [...newValue];
  },
};
export const actions = {
  async getlistCategories({ commit }) {
    try {
      const response = await axiosInstance.get("/categories/");
      if (response.status === 200) {
        commit("SET_LIST_CATEGORIES", response.data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  },

  async getCategory({ commit }, id) {
    try {
      const response = await axiosInstance.get("/categories/" + id);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  },

  async updateCategory({ commit }, { data, id }) {
    try {
      const response = await axiosInstance.put("/categories/" + id, data);
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

  async createCategory({ commit }, data) {
    try {
      const response = await axiosInstance.post("/categories/", data);
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
};
