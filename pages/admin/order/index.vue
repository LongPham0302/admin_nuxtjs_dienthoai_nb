<template>
  <div class="col-span-10">
    <Order />
  </div>
</template>
<script>
import Order from "@components/admin/order";
export default {
  name: "OrderPage",
  layout: "admin",
  components: {
    Order,
  },
};
</script>
