<template>
  <div
    class="flex items-center justify-between px-10 py-4 bg-gray-800"
    id="app"
  >
    <h1 class="text-2xl font-bold">DASHBOARD</h1>
    <div class="flex items-center">
      <button
        class="text-gray-300 hover:text-white focus:outline-none mr-4"
        @click="toggleNotification"
      >
        <i class="fas fa-heart"> </i>
        <span v-if="newOrderCount > 0" class="text-white">{{
          newOrderCount
        }}</span>
      </button>
    </div>
    <div
      v-if="isNotificationVisible"
      class="absolute bg-white rounded-lg shadow-md p-2 top-8 right-0 z-10"
    >
      <!-- Nội dung thông báo -->
      <p>New order received!</p>
      <!-- Nút đóng thông báo -->
      <button @click="closeNotification" class="text-blue-500 underline">
        Close
      </button>
    </div>
  </div>
</template>

<script>
import socket from "@plugins/socket.js";
import { showNotification } from "@plugins/notification";

export default {
  name: "headerAdmin",
  data() {
    return {
      newOrderCount: 0,
      isNotificationVisible: false,
    };
  },
  methods: {
    toggleNotification() {
      this.isNotificationVisible = !this.isNotificationVisible;
    },
    closeNotification() {
      this.isNotificationVisible = false;
    },
    showNotification() {
      showNotification("New Order", {
        body: "A new order has been received!",
      });
    },
  },
  mounted() {
    socket.on("newOrder", (order) => {
      console.log("New Order:", order);
      this.newOrderCount += 1;

      // Thêm xử lý để hiển thị thông báo khi có order mới
      this.showNotification();
    });
  },
};
</script>
