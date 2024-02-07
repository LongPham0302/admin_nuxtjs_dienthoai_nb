<template>
  <div class="min-h-screen">
    <headerAdmin />
    <div class="grid grid-cols-12 gap-4">
      <navAdmin />
      <nuxt />
    </div>
  </div>
</template>

<script>
import headerAdmin from "@components/admin/headerAdmin";
import navAdmin from "@components/admin/nav";

export default {
  name: "AdminLayout",
  components: {
    headerAdmin,
    navAdmin,
  },
};
</script>
<style></style>
