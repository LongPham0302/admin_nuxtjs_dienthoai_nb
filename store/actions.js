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

  async getlistProducts({ commit }, { page = 1 }) {
    try {
      const response = await axiosInstance.get("/product/product", {
        params: {
          page: page,
        },
      });
      if (response.status === 200) {
        commit("SET_LIST_PRODUCT", response.data.products);
        commit("SET_TOTAL_PAGES", response.data.pagination.totalPages);
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

  //Orer
  async getListOrder({ commit }, { page = 1 }) {
    try {
      const response = await axiosInstance.get("/orders", {
        params: {
          page: page,
        },
      });
      if (response.status === 200) {
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

  async logIn({ commit, state }, data) {
    try {
      const reuslt = await axiosInstance.post("/auth/login", data);
      if (reuslt.status === 201) {
        localStorage.removeItem('key');
        localStorage.setItem("key", JSON.stringify(reuslt.data));
        this.$router.push("/");
      }
    } catch (error) {}
  },
  async checkUserLogin({}, id) {
    try {
      const response = await axiosInstance.get("/auth/" + id);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error("Error fetching headers:", error);
    }
  },

  async getDetailedOrder({ commit }, id) {
    try {
      const result = await axiosInstance.get(`/orders/${id}`);
      if (result.status === 200) {
        commit("SET_ORDER", result.data);
        return result.data;
      }
    } catch (error) {}
  },

  async deleteCategory({}, id) {
    try {
      const res = await axiosInstance.delete(`/categories/${id}`);
      if (res.status === 200) {
        return {
          ok: true,
        };
      }
      return {
        ok: false,
      };
    } catch (error) {}
  },

  async deleteProduct({}, id) {
    try {
      const res = await axiosInstance.delete(`/product/${id}`);
      if (res.status === 200) {
        return {
          ok: true,
        };
      }
      return {
        ok: false,
      };
    } catch (error) {}
  },

  //banner
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
  async getBanner({ commit }) {
    try {
      const result = await axiosInstance.get("/banners/");
      if (result.status === 200) {
        commit("SET_BANNERS", result.data[0]);
      }
    } catch (error) {}
  },

  //verifyAccessToken
  async verifyAccessToken({ commit }, access_token) {
    try {
      const response = await axiosInstance.post(
        "/auth/verify-access-token",
        access_token
      );
      if (response.status === 201) {
        return response.data;
      }
    } catch (error) {
    } finally {
    }
  },

  //Dashboard

  async getDashboard({ commit }) {
    try {
      const response = await axiosInstance.get("/reports");
      if (response.status === 200) {
        commit("SET_DASHBOARD", response.data[0]);
      }
    } catch (error) {
      console.error("Error fetching dashboard:", error);
    }
  },
};
