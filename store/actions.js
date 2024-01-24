// actions.js
import axiosInstance from "@plugins/axios";

export default {
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

  async getlistProducts({ commit }) {
    try {
      const response = await axiosInstance.get("/product/");
      if (response.status === 200) {
        commit("SET_LIST_PRODUCT", response.data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  },

  async upload({ commit }, photo) {
    try {
      const response = await axiosInstance.post("/upload/uploads/", photo);
      if (response.status === 201) {
        return {
          ok: response.data.image,
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
    const reuslt = await axiosInstance.get(`/product/${id}`);
    return reuslt.data;
  },
};
