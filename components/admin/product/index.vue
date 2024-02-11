<template>
  <div>
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 rounded p-3 mt-4"
      @click="createProduct"
    >
      + Create
    </button>
    <br />
    <table class="table-auto w-full text-left mt-5">
      <thead>
        <tr class="border-b p-2">
          <th>id</th>
          <th>name</th>
          <th>price</th>
          <th>images</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in getListProduct" :key="index">
          <td class="pr-5">{{ item._id }}</td>
          <td class="pr-5">{{ item.name }}</td>
          <td class="pr-5">{{ item.price }}</td>
          <td>
            <div class="flex mr-2">
              <!-- Sử dụng vòng lặp v-for để duyệt qua tất cả các ảnh trong mảng item.images -->
              <img
                v-for="(image, imageIndex) in item.images"
                :key="imageIndex"
                class="mr-2 object-cover w-5 h-5 mt-5"
                :src="getImageUrl(image)"
                alt=""
              />
            </div>
          </td>
          <div class="flex mt-5">
            <button
              type="button"
              class="text-white bg-green-700 mr-5 p-3 rounded"
              @click="updateProduct(item._id)"
            >
              Update
            </button>
            <button
              type="button"
              class="text-white bg-red-700 p-3 rounded"
              @click="deleteProduct(item._id)"
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
        style="position: sticky; left: 10; right: 0;"
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
    <div>
      <!-- Modal overlay -->
      <div
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        v-if="showModal"
      >
        <!-- Modal content -->
        <div class="bg-white p-8 rounded-lg">
          <!-- Nội dung modal -->
          <p>Bạn có chắc chắn muốn xóa?</p>

          <!-- Button xác nhận xóa -->
          <button
            @click="confirmDelete"
            class="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
          >
            Xác nhận
          </button>

          <!-- Button hủy bỏ -->
          <button
            @click="cancelDelete"
            class="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "productAdmin",
  data() {
    return {
      showModal: false,
      idProductdeleted: "",
      currentPage: 0,
    };
  },
  created() {
    this.$store.dispatch("getlistProducts", { page: 1 });
  },
  computed: {
    ...mapGetters(["getListProduct", "gettotalPages"]),
    totalPages() {
      return this.gettotalPages;
    },
  },
  methods: {
    changePage(index) {
      // Xử lý khi chuyển trang, ví dụ: lưu trang hiện tại vào data
      this.currentPage = index;
      this.$store.dispatch("getlistProducts", {
        page: index + 1, // Chú ý: Trang bắt đầu từ 1, còn index bắt đầu từ 0
      });
    },
    createProduct() {
      this.$router.replace("/admin/product/create");
    },
    updateProduct(productId) {
      this.$router.replace(`/admin/product/update/${productId}`);
    },
    async deleteProduct(_id) {
      this.showModal = true;
      this.idProductdeleted = _id;
    },
    async confirmDelete() {
      const result = await this.$store.dispatch(
        "deleteProduct",
        this.idProductdeleted
      );
      if (result.ok === true) {
        this.$router.go();
      }
    },
    cancelDelete() {
      this.showModal = false;
    },
    getImageUrl(imagePath) {
      // Thay thế '\' bằng '/' để đảm bảo đường dẫn hợp lệ trên mạng
      // Kết hợp đường dẫn của máy chủ với đường dẫn của hình ảnh
      return `${process.env.apiUrl}/${imagePath}`;
    },
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
