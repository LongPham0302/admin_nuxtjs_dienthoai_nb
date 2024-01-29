<template>
  <div class="nav col-span-2 h-screen p-4">
    <div class="text-white">
      <div
        v-for="item in menuItems"
        :key="item.text"
        class="flex items-center p-4 hover:cursor-pointer"
        @click="redirectToPage(item.path)"
      >
        <i :class="item.icon"></i> <span class="ml-5">{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavAdmin",
  data() {
    return {
      menuItems: [
        { text: "Dashboard", icon: "fas fa-tachometer-alt" },
        { text: "Products", icon: "fas fa-icons", path: "/admin/product/" },
        {
          text: "Categories",
          icon: "fas fa-map-marked-alt",
          path: "/admin/category/",
        },
        { text: "Order", icon: "fas fa-bell", path: "/admin/order/" },
      ],
    };
  },
  methods: {
    redirectToPage(path) {
      this.$router.push(path);
    },
  },
};
</script>
<style>
.nav {
  background-color: #2dce89;
}
</style>
