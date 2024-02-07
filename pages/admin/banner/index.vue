<template>
  <div>
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 rounded p-3 mt-4"
      @click="goToCreateBanner"
    >
      + Create
    </button>
  </div>
</template>
<script>
export default {
  name: "BannerPage",
  components: {},
  layout: "admin",
  methods: {
    goToCreateBanner() {
      this.$router.push("/admin/banner/create");
    },
  },
};
</script>
