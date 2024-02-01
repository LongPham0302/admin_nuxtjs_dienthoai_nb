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
      const response = await axiosInstance.get("/product/product");
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

  async getListOrder({ commit }) {
    try {
      const response = await axiosInstance.get("/orders");
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {}
  },

  //Header
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

  //Footer
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
