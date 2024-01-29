<template>
  <div class="w-full">
    <br />
    <table class="table-auto w-full text-left">
      <thead>
        <tr class="border-b p-2">
          <th>trạng thái</th>
          <th>số điện thoại người mua</th>
          <th>địa chỉ người người mua</th>
          <th>notes</th>
          <th>phương thức thanh toán</th>
          <th>sản phẩm</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orders" :key="index">
          <td class="pr-5">{{ order.status }}</td>
          <td class="pr-5">{{ order.phoneNumber }}</td>
          <td class="pr-5">{{ order.shippingAddress }}</td>
          <td class="pr-5">{{ order.notes }}</td>
          <td class="pr-5">{{ order.transferType }}</td>
          <td>
            <div class="flex">
              <!-- Sử dụng vòng lặp v-for để duyệt qua tất cả các ảnh trong mảng item.images -->
              <span v-for="(item, imageIndex) in order.items" :key="imageIndex">
                {{ item.name }} * {{ item.count }} *{{ item.price }}
              </span>
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
export default {
  name: "OrderComponent",
  created() {
    this.$store.dispatch("getListOrder").then((res) => (this.orders = res));
  },
  data() {
    return {
      orders: null,
    };
  },
};
</script>

