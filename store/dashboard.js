export const state = {
  dashboard: {},
};
export const getter = {
  getReport: (state) => state.dashboard,
};
export const mutations = {
  SET_DASHBOARD(state, dashboard) {
    state.dashboard = dashboard; // Cập nhật dữ liệu totalPages
  },
};
export const actions = {
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
