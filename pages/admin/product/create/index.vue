<template>
  <div class="col-span-10 mt-20 ml-10">
    <label class="block mb-1 text-sm" for="input1"> Tên sản phẩm:</label>

    <input
      v-model="name"
      id="input1"
      class="w-3/5 border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
      type="text"
      autofocus
      placeholder="Full name..."
    />
    <span v-if="error" class="font-medium">Info alert!</span> {{ error }}
    <label class="block mb-1 text-sm mt-5" for="input1"> Gía:</label>

    <input
      v-model="price"
      id="input1"
      class="w-3/5 mt-5 border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
      type="number"
      autofocus
      placeholder="Full price..."
    />
    <label class="block mb-1 text-sm mt-5" for="input2"> Số Tháng Bảo Hành:</label>

    <input
      v-model="guarantee"
      id="input2"
      class="w-3/5 mt-5 border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
      type="number"
      autofocus
      placeholder="Full price..."
    />

    <div class="mt-5">
      <label>
        <input
          type="radio"
          id="inStock"
          value="true"
          v-model="status"
          name="productStatus"
        />
        Còn hàng
      </label>
    </div>

    <label>
      <input
        type="radio"
        id="outOfStock"
        value="false"
        v-model="status"
        name="productStatus"
      />
      Hết hàng
    </label>

    <select
      v-model="category"
      id="countries"
      class="w-3/5 mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option selected>Chọn loại category</option>
      <option
        v-for="(item, index) in getListCategories"
        :key="index"
        :value="item._id"
      >
        {{ item.name }}
      </option>
    </select>

    <label for="message" class="mt-5 block mb-2 text-gray-900 dark:text-white"
      >Chi Tiết Sản Phẩm</label
    >
    <textarea
      v-model="basicInfo"
      id="message"
      rows="4"
      class="block mt-5 p-2.5 w-3/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Write your thoughts here..."
    ></textarea>

    <br />
    <input type="file" ref="file" multiple="multiple" />
    <br />

    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 rounded p-3 mt-4"
      @click="handleCreateProduct()"
    >
      tạo Product
    </button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  layout: "admin",

  created() {
    this.$store.dispatch("getlistCategories");
  },
  data() {
    return {
      name: "",
      category: null,
      price: 0,
      error: "",
      images: null,
      status: true,
      basicInfo: "",
      guarantee: 0,
    };
  },
  computed: {
    ...mapGetters(["getListCategories"]),
  },
  methods: {
    handleCategoryChange(_id) {
      this.category = _id;
    },
    chooseStatus(status) {
      this.status = status;
    },

    async handleUploadImage() {
      let formData = new FormData();

      for (var i = 0; i < this.$refs.file.files.length; i++) {
        formData.append("photo", this.$refs.file.files[i]);
      }
      const result = await this.$store.dispatch("upload", formData);
      this.images = result.ok;
    },
    async handleCreateProduct() {
      await this.handleUploadImage();
      const data = {
        name: this.name,
        price: this.price,
        status: this.status,
        basicInfo: this.basicInfo.split('\n'),
        images: this.images,
        category: this.category,
        guarantee: this.guarantee,
      };
      this.$store.dispatch("createProduct", data).then((res) => {
        if (res.ok === true) {
          return this.$router.replace("/admin/product/");
        }
      });
    },
  },
};
</script>
