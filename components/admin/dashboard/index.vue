<template>
    <div class="container mx-auto p-4 col-span-10">
      <h1 class="text-2xl font-bold mb-4">Dashboard</h1>
      <div class="grid grid-cols-3 gap-4">
        <!-- Số lượng sản phẩm -->
        <div class="bg-white rounded-lg shadow-md p-4">
          <h2 class="text-lg font-semibold mb-2">Số lượng sản phẩm</h2>
          <p class="text-3xl font-bold">{{ productCount }}</p>
        </div>
        <!-- Danh mục -->
        <div class="bg-white rounded-lg shadow-md p-4">
          <h2 class="text-lg font-semibold mb-2">Danh mục</h2>
          <p class="text-3xl font-bold">{{ categoryCount }}</p>
        </div>
        <!-- Số lượng đơn hàng -->
        <div class="bg-white rounded-lg shadow-md p-4">
          <h2 class="text-lg font-semibold mb-2">Số lượng đơn hàng</h2>
          <p class="text-3xl font-bold">{{ orderCount }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DashboardAdminComponent",
    created() {
      this.$store.dispatch("getDashboard");
    },
    computed: {
      productCount() {
        return this.$store.state.dashboard.numberOfProducts;
      },
      categoryCount() {
        return this.$store.state.dashboard.numberOfCategories;
      },
      orderCount() {
        return this.$store.state.dashboard.numberOfOrders;
      },
    },
    data() {
      return {};
    },
  };
  </script>
  
  <style></style>
  