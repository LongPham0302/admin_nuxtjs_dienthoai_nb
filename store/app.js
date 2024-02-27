export const state = {
  totalPages: null,
};
export const getters = {
  gettotalPages: (state) => state.totalPages,
};
export const mutation = {
  SET_TOTAL_PAGES(state, totalPages) {
    state.totalPages = totalPages; // Cập nhật dữ liệu totalPages
  },
};
export const actions = {
  async logIn({ commit, state }, data) {
    try {
      const reuslt = await axiosInstance.post("/auth/login", data);
      if (reuslt.status === 201) {
        localStorage.removeItem("key");
        localStorage.setItem("key", JSON.stringify(reuslt.data));
        let data = JSON.parse(localStorage.getItem("key"));
        if (data) {
          this.$router.push("/");
        }
      }
    } catch (error) {}
  },
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
};
