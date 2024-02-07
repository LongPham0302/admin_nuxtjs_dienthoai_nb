<template>
  <div class="w-full mx-auto h-screen relative">
    <br />
    <table class="table-auto w-full text-left" style="height: calc(100vh - 200px); overflow-y: auto;">
      <thead>
        <tr class="border-b p-2">
          <th>trạng thái</th>
          <th>số điện thoại người mua</th>
          <th>phương thức thanh toán</th>
          <th>sản phẩm</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orders" :key="index">
          <td class="pr-5">{{ order.status ? 'Đã xác nhận' : 'Chưa xác nhận' }}</td>
          <td class="pr-5">{{ order.phoneNumber }}</td>
          <td class="pr-5">{{ order.transferType }}</td>
          <td>
            <div class="flex">
              <!-- Sử dụng vòng lặp v-for để duyệt qua tất cả các ảnh trong mảng item.images -->
              <span v-for="(item, imageIndex) in order.items" :key="imageIndex">
                {{ item.name }} * {{ item.count }} *{{ item.price }}
              </span>
            </div>
          </td>
          <div class="flex mt-5 pr-5">
            <button
              type="button"
              class="text-white bg-green-700 mr-5 p-3 rounded"
              @click="updateOrder(order._id)"
            >
              Update
            </button>
            <button
              type="button"
              class="text-white bg-red-700 p-3 rounded"
              @click="deleteOrder(item._id)"
            >
              Delete
            </button>
          </div>
        </tr>
      </tbody>
    </table>
    <div class="pagination-container">
      <div
        class="flex items-center top-2/3 right-0 bg-white p-4 justify-end"
        v-if="totalPages"
        style="position: sticky; left: 10; right: 0; z-index: 10;"

      >
        <div class="pagination">
          <div
            v-for="(item, index) in totalPages"
            :key="index"
            :class="{ 'page-item': true, active: index === currentPage }"
            @click="changePage(index)"
          >
            {{ index }}
          </div>
          <!-- Add more page items as needed -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OrderComponent",
  created() {
    this.$store
      .dispatch("getListOrder", { page: 1 })
      .then(
        (res) => (
          (this.orders = res.orders),
          (this.totalPages = res.pagination.totalPages)
        )
      );
  },
  data() {
    return {
      orders: null,
      currentPage: 0,
      totalPages: 0,
    };
  },
  methods: {
    changePage(index) {
      // Xử lý khi chuyển trang, ví dụ: lưu trang hiện tại vào data
      this.currentPage = index;
      this.$store
        .dispatch("getListOrder", {
          page: index + 1, // Chú ý: Trang bắt đầu từ 1, còn index bắt đầu từ 0
        })
        .then((res) => {
          this.orders = res.orders;
          this.totalPages = res.pagination.totalPages;
        });
    },
    updateOrder(orderId) {
      console.log("orderId",orderId);
      // Chuyển hướng người dùng đến trang chi tiết của order
      this.$router.push(`/admin/order/${orderId}`);
    }
  },
};
</script>
<style scoped>
.pagination {
  @apply flex;
}

.page-item {
  @apply px-4 py-2 mx-1 border border-gray-300 cursor-pointer;
}

.page-item:hover {
  @apply bg-gray-100;
}

.page-item {
  padding: 8px 12px;
  margin: 0 4px;
  border: 1px solid #e2e8f0;
  cursor: pointer;
}

.page-item:hover {
  background-color: #e53e3e;
}

.active {
  background-color: #e53e3e; /* Màu đỏ */
  color: white; /* Màu chữ trắng để đảm bảo đọc được trên nền đỏ */
}
</style>
