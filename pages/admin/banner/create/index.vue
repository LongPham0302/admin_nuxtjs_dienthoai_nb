<template>
  <div class="col-span-10">
    <div class="flex w-full mt-5 pr-5">
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          multiple="multiple"
          @change="handleFileChange"
        />
      </label>
    </div>
    <button
      class="bg-blue-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-5"
      @click="uploadPhoto"
    >
      Upload
    </button>
  </div>
</template>

<script>
export default {
  name: "BannerPage",
  layout: "admin",
  data() {
    return {
      selectedFiles: [],
    };
  },
  methods: {
    handleFileChange(event) {
      // Xử lý khi người dùng chọn file
      // Bạn có thể truy cập các file đã chọn thông qua event.target.files
      this.selectedFiles = event.target.files;
    },
    async uploadPhoto() {
      let formData = new FormData();

      for (var i = 0; i < this.selectedFiles.length; i++) {
        formData.append("photo", this.selectedFiles[i]);
      }

      try {
        const result = await this.$store.dispatch("upload", formData);
        let data = {
          image: result.ok,
        };
        if (result) {
          this.$store.dispatch("createBanner", data).then((res) => {
            res.ok === true ? this.$router.push("/admin/banner/") : null;
          });
        }
        // Xử lý kết quả từ action upload
      } catch (error) {
        console.error("Error uploading photo:", error);
        // Xử lý lỗi nếu có
      }
    },
  },
};
</script>
