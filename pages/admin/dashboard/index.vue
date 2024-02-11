<template>
  <DashboardAdminComponent  />
</template>

<script>
import DashboardAdminComponent  from "@components/admin/dashboard";
export default {
  name: "DashboardAdmin",
  layout: "admin",
  components: {
    DashboardAdminComponent ,
  },
};
</script>

<style scoped>
/* Thêm các quy tắc CSS Tailwind tại đây nếu cần */
</style>
