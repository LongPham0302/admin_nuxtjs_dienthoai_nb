<template>
    <div class="bg-white text-gray-700" id="footer">
        <div class="container mx-auto px-4 py-8">
            <div class="grid grid-cols-4 gap-8">
                <!-- Support Column -->
                <div>
                    <h3 class="font-bold text-lg mb-3">
                        Tổng đài hỗ trợ miễn phí
                    </h3>
                    <p class="mb-2" v-for="(item, index) in menu_1" :key="index">
                        {{ item.text_before }}
                        <strong>{{ item.text_strong }}</strong>
                        {{ item.text_after }}
                    </p>
                </div>
                <!-- Policy Column -->
                <div>
                    <h3 class="font-bold text-lg mb-3">
                        Thông tin và chính sách
                    </h3>
                    <p class="mb-2" v-for="(item, index) in businessItems" :key="index">
                        {{ item.value }}
                    </p>
                </div>
                <!-- Services Column -->
                <div>
                    <h3 class="font-bold text-lg mb-3">
                        Dịch vụ và thông tin khác
                    </h3>
                    <p class="mb-2" v-for="(item, index) in menuItems" :key="index">
                        {{ item.value }}
                    </p>
                </div>
                <!-- Connect Column -->
                <div>
                    <h3 class="font-bold text-lg mb-3">
                        Kết nối với CellphoneS
                    </h3>
                    <h3 class="font-bold text-lg mb-3">
                        Website thành viên
                    </h3>
                    <div class="mb-4">
                        <span>Hệ thống bảo hành sửa chữa Điện thoại - Máy tính</span>
                    </div>
                    <div class="flex justify-end">
                        <button class="text-white bg-red-500 rounded-full px-4 py-2 shadow-lg">
                            <i class="fas fa-arrow-up">
                            </i>
                            Lên đầu
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Fotter",
    data() {
        return {
            menu_1: [
                {
                    id: "1",
                    text_strong: "1800.2097",
                    text_before: "Gọi mua hàng",
                    text_after: "(7h30 - 22h00)"
                },
                {
                    id: "1",
                    text_strong: "1800.2097",
                    text_before: "Gọi mua hàng",
                    text_after: "(7h30 - 22h00)"
                },
                {
                    id: "1",
                    text_strong: "1800.2097",
                    text_before: "Gọi mua hàng",
                    text_after: "(7h30 - 22h00)"
                }
            ],
            menuItems: [
                { id: 1, value: "Mua hàng và thanh toán Online" },
                { id: 2, value: "Mua hàng trả góp Online" },
                { id: 3, value: "Chính sách giao hàng" },
                { id: 4, value: "Chính sách đổi trả hàng" },
                { id: 5, value: "Chính sách bảo hành" },
                { id: 6, value: "Chính sách cho doanh nghiệp" },
                { id: 7, value: "Trả điểm member" },
                { id: 8, value: "Xem ưu đãi member" },
                { id: 9, value: "Tra thông tin đơn hàng" },
                { id: 10, value: "Tra cứu hóa đơn điện tử" },
                { id: 11, value: "Thông tin đơn mua hàng" },
                { id: 12, value: "Trung tâm bảo hành chính hãng" },
                { id: 13, value: "Quy định về việc sao lưu dữ liệu" },
            ],
            businessItems: [
                { id: 1, value: "Khách hàng doanh nghiệp (B2B)" },
                { id: 2, value: "Ưu đãi thanh toán" },
                { id: 3, value: "Quy chế hoạt động" },
                { id: 4, value: "Chính sách Bảo hành" },
                { id: 5, value: "Liên hệ hợp tác kinh doanh" },
                { id: 6, value: "Tuyển dụng" },
                { id: 7, value: "Dịch vụ bảo hành điện thoại" },
                { id: 8, value: "Dịch vụ bảo hành mở rộng" },
            ],
        }
    },
}
</script>
<style>
#footer {
    background-color: #34495e;
    color: white;
}
</style>