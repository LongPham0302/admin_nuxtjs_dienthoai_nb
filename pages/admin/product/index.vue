<template>
  <div class="col-span-10">
    <productAdmin />
  </div>
</template>

<script>
import productAdmin from "@components/admin/product/index.vue";
export default {
  layout: "admin",
  components: {
    productAdmin,
  },
};
</script>
