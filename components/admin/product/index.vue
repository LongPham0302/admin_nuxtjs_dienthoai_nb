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
          <td  class="pr-5">{{ item.price }}</td>
          <td>
            <div class="flex mr-2">
              <!-- Sử dụng vòng lặp v-for để duyệt qua tất cả các ảnh trong mảng item.images -->
              <img
                v-for="(image, imageIndex) in item.images"
                :key="imageIndex"
                class="mr-2 object-cover w-5 h-5 mt-5"
                :src="`http://localhost:4000/${image}`"
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "productAdmin",
  created() {
    this.$store.dispatch("getlistProducts");
  },
  computed: {
    ...mapGetters(["getListProduct"]),
  },
  methods: {
    createProduct() {
      this.$router.replace("/admin/product/create");
    },
    updateProduct(productId) {
      this.$router.replace(`/admin/product/update/${productId}`);
    },
    deleteProduct(_id) {
      // this.$router.replace(`'/admin/Product/update'/${_id}`)
    },
  },
};
</script>

<style scoped></style>
