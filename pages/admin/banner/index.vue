<template>
  <div class="col-span-10">
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 rounded p-3 mt-5 ml-5"
      @click="goToCreateBanner"
    >
      + Create
    </button>
    <div class="flex w-full mt-5">
      <div v-for="(image, index) in getBanner.image" :key="index" class="ml-5">
        <img
          class="w-full h-auto object-cover rounded-lg"
          :src="getImageUrl(image)"
          alt="Banner Image"
          style="width: 200px; height: 200px"
        />
      </div>
    </div>

    <button
      type="button"
      class="text-white bg-red-600 hover:bg-blue-800 rounded p-3 mt-5 ml-5"
      @click="goToUpdateBanner(getBanner._id)"
    >
      + Update
    </button>
  </div>
</template>
<script>
export default {
  name: "BannerPage",
  components: {},
  layout: "admin",
  created() {
    this.$store.dispatch("getBanner");
  },
  computed: {
    getBanner() {
      return this.$store.getters.getBanner || [];
    },
  },
  methods: {
    goToCreateBanner() {
      this.$router.push("/admin/banner/create");
    },
    goToUpdateBanner(_id) {
      this.$router.push(`/admin/banner/update/${_id}`);
    },
    getImageUrl(imagePath) {
      // Thay thế '\' bằng '/' để đảm bảo đường dẫn hợp lệ trên mạng
      // Kết hợp đường dẫn của máy chủ với đường dẫn của hình ảnh
      return `${process.env.apiUrl}/${imagePath}`;
    },
  },
};
</script>
