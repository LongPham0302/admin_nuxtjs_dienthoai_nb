<template>
  <div class="col-span-10 mt-20 ml-10" v-if="callApi">
    <label class="block mb-1 text-sm" for="input1"> name:</label>

    <input
      v-model="name"
      id="input1"
      class="w-3/5 border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
      type="text"
      autofocus
      placeholder="Full name..."
    />
    <span v-if="error" class="font-medium">Info alert!</span> {{ error }}
    <label class="block mb-1 text-sm mt-5" for="input1"> price:</label>

    <input
      v-model="price"
      id="input1"
      class="w-3/5 mt-5 border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
      type="number"
      autofocus
      placeholder="Full price..."
    />
    <label class="block mb-1 text-sm mt-5" for="input2"> guarantee:</label>

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

    <label for="message" class="mt-5 block mb-2 text-gray-900 dark:text-white"
      >detail</label
    >
    <textarea
      v-model="basicInfo"
      id="message"
      rows="4"
      class="block mt-5 p-2.5 w-3/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Write your thoughts here..."
    ></textarea>

    <br />
    <div class="flex">
      <img
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        class="mr-2 object-cover w-12 h-12"
        :src="`http://localhost:4000/${image}`"
        alt=""
      />
    </div>
    <br />

    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 rounded p-3 mt-4"
      @click="handleUpdateProduct()"
    >
      update Product
    </button>
  </div>
</template>
<script>
export default {
  layout: "admin",
  created() {
    this.callApi = false;
    this.$store
      .dispatch("findProductbyId", this.$route.params.id)
      .then((res) => {
        console.log("res", res.basicInfo);
        this.name = res.name;
        this.price = res.price;
        this.images = res.images;
        this.status = res.status;
        this.basicInfo = res.basicInfo.join("\n");
        this.guarantee = res.guarantee;
      });
    this.callApi = true;
  },

  data() {
    return {
      name: "",
      price: 0,
      error: "",
      images: null,
      status: true,
      basicInfo: "",
      guarantee: 0,
      callApi: false,
    };
  },
  methods: {
    handleUpdateProduct() {
      const data = {
        name: this.name,
        price: this.price,
        status: this.status,
        basicInfo: this.basicInfo.split("\n"),
        guarantee: this.guarantee,
      };
      const id = this.$route.params.id;
      this.$store.dispatch("UpdateProduct", { id, data }).then((res) => {
        if (res.ok === true) {
          this.$router.replace("/admin/product");
        }
      });
    },
  },
};
</script>
