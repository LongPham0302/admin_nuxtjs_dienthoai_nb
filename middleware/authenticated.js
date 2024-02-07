// middleware/authenticated.js

let isRedirecting = false; // Biến trạng thái để kiểm tra xem đã chuyển hướng chưa

export default async function ({ app, redirect }) {
  // Kiểm tra xem dữ liệu từ Local Storage có tồn tại không
  const data = JSON.parse(localStorage.getItem("key"));
  if (!data || !data.access_token || !data.id) {
    // Nếu dữ liệu không tồn tại hoặc không đầy đủ
    // và chưa chuyển hướng, thực hiện chuyển hướng
    if (!isRedirecting) {
      isRedirecting = true;
      return redirect("/login");
    }
    return; // Tránh việc tiếp tục xử lý nếu đã chuyển hướng
  }

  try {
    // Dispatch action checkUserLogin và nhận kết quả trả về
    const result = await app.store.dispatch("checkUserLogin", data.id);

    // Kiểm tra xem người dùng có phải là admin hay không
    console.log("User isAdmin:", result.isAdmin);
    if (result.isAdmin !== "admin") {
      // Nếu không phải là admin
      // và chưa chuyển hướng, thực hiện chuyển hướng
      if (!isRedirecting) {
        isRedirecting = true;
        return redirect("/login");
      }
      return; // Tránh việc tiếp tục xử lý nếu đã chuyển hướng
    }
  } catch (error) {
    console.error("Error:", error);
    // Xử lý lỗi nếu có
  }
}
