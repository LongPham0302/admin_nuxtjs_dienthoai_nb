<template>
  <div class="">
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 rounded p-3 mt-4"
      @click="createCategory"
    >
      + Create
    </button>
    <br />
    <table class="table-auto w-full text-left mt-5">
      <thead>
        <tr class="border-b p-2">
          <th>id</th>
          <th>name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in getListCategories" :key="index">
          <td>{{ item._id }}</td>
          <td>{{ item.name }}</td>
          <button
            type="button"
            class="text-white bg-green-700 mr-5 p-3 rounded mt-5"
            @click="updateCategory(item._id)"
          >
            Update
          </button>
          <button
            type="button"
            class="text-white bg-red-700 p-3 rounded"
            @click="deleteCategory(item._id)"
          >
            Delete
          </button>
        </tr>
      </tbody>
    </table>
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
  name: "categoriesAdmin",
  data() {
    return {
      showModal: false,
      idCategorydeleted: "",
    };
  },
  created() {
    this.$store.dispatch("getlistCategories");
  },
  computed: {
    ...mapGetters(["getListCategories"]),
  },
  methods: {
    createCategory() {
      this.$router.replace("/admin/category/create");
    },
    updateCategory(categoryId) {
      this.$router.replace(`/admin/category/update/${categoryId}`);
    },
    async deleteCategory(_id) {
      this.showModal = true;
      this.idCategorydeleted = _id;
    },
    async confirmDelete() {
      const result = await this.$store.dispatch(
        "deleteCategory",
        this.idCategorydeleted
      );
      if (result.ok === true) {
        this.$router.go();
      }
    },
    cancelDelete() {
      this.showModal = false;
    }
  },
};
</script>
