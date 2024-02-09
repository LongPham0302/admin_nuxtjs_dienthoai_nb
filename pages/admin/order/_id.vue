<template>
  <div class="w-full col-span-10 mt-5" v-if="order">
    <table class="text-center">
      <thead>
        <tr class="border">
          <th class="pr-5">ID</th>
          <th class="pr-5">Người dùng</th>
          <th class="pr-5">Sản phẩm</th>
          <th class="pr-5">Tổng số sản phẩm</th>
          <th class="pr-5">Tổng giá</th>
          <th class="pr-5">Trạng thái</th>
          <th class="pr-5">Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border pr-5">{{ order._id }}</td>
          <td class="border pr-5">{{ order.nameUser }}</td>
          <td class="border pr-5">
            <ul>
              <li v-for="item in order.items" :key="item.id">
                {{ item.name }}
              </li>
            </ul>
          </td>
          <td class="border pr-5">{{ order.totalItems }}</td>
          <td class="border pr-5">
            <strong class="text-lg text-black">{{
              formatPrice(order.totalPrice)
            }}</strong>
            <!-- In đậm số tiền -->
            <br />
            <span class="text-sm text-red-500">{{
              readPrice(order.totalPrice)
            }}</span>
          </td>
          <td class="border pr-5">
            {{ order.status ? "Đã xác nhận" : "Chưa xác nhận" }}
          </td>
          <td class="border">
            <button
              @click="updateOrder(order._id)"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 ml-3"
            >
              Cập nhật
            </button>
            <button
              @click="deleteOrder(order._id)"
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-5 ml-3"
            >
              Xóa
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "",
  layout: "admin",
  created() {
    const orderId = this.$route.params.id;
    this.getDetailedOrder(orderId);
  },
  computed: {
    // Sử dụng computed property để truy cập vào dữ liệu đơn hàng từ store thông qua getters
    order() {
      return this.$store.getters["detailedOrder"];
    },
  },
  methods: {
    async getDetailedOrder(orderId) {
      // Gửi action tới store để lấy thông tin chi tiết đơn hàng
      await this.$store.dispatch("getDetailedOrder", orderId);
    },
    formatPrice(price) {
      // Chia ra đơn vị của số tiền
      return price.toLocaleString("vi-VN");
    },
    readPrice(price) {
      const dong = "đồng";
      let suffix = "";

      if (price === 0) {
        return "Không " + dong;
      }

      const integerPart = Math.floor(price);

      // Hàm chuyển đổi số tiền thành cách đọc đúng
      const convertPriceToReadable = (integerPart, suffix) => {
        if (integerPart === 0) return ""; // Trường hợp số tiền là 0
        let result = "";

        if (integerPart >= 1000000) {
          const millions = Math.floor(integerPart / 1000000);
          result += `${millions} triệu `;
          integerPart %= 1000000;
        }

        if (integerPart >= 1000 && integerPart < 1000000) {
          const thousands = Math.floor(integerPart / 1000);
          result += `${thousands} nghìn `;
          integerPart %= 1000;
        }

        if (integerPart > 0 && integerPart < 1000) {
          if (result !== "") {
            result += "và "; // Thêm "và" chỉ khi có số trước đó
          }
          result += `${integerPart} `;
        }
        console.log("result.trim()", result.trim(), "suffix", suffix);
        return result.trim() + " " + " " + dong;
      };

      switch (true) {
        case price < 1000:
          suffix = "nghìn";
          return convertPriceToReadable(integerPart, suffix);
        case price < 1000000:
          suffix = "nghìn";
          return convertPriceToReadable(integerPart, suffix);
        case price < 1000000000:
          suffix = "triệu";
          return convertPriceToReadable(integerPart, suffix);
        default:
          suffix = "tỷ";
          return convertPriceToReadable(integerPart, suffix);
      }
    },
    updateOrder(id) {
      let data = {
        status: true,
      };
      this.$store.dispatch("updateOrder", { id, data }).then((res) => {
        if (res.ok === true) {
          this.$router.replace("/admin/order/");
        }
      });
    },
  },
};
</script>
