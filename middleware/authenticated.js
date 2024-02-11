// middleware/authenticated.js

let isRedirecting = false; // Biến trạng thái để kiểm tra xem đã chuyển hướng chưa

export default async function ({ app, redirect, route }) {
  if (route.path === "/login") {
    return; // Nếu đang ở trang login thì không cần chuyển hướng
  }
  // Kiểm tra xem dữ liệu từ Local Storage có tồn tại không
  const data = JSON.parse(localStorage.getItem("key"));
  if (!data || !data.access_token || !data.id) {
    // Nếu dữ liệu không tồn tại hoặc không đầy đủ
    // và chưa chuyển hướng, thực hiện chuyển hướng
    if (!isRedirecting) {
      isRedirecting = true;
      redirect("/login");
    }
    return; // Tránh việc tiếp tục xử lý nếu đã chuyển hướng
  }

  try {
    const key = JSON.parse(localStorage.getItem("key"));
    const token = key.access_token;
    const isValidToken = await checkAccessTokenValidity(token);
    if (!isValidToken) {
      // Nếu token không hợp lệ
      // và chưa chuyển hướng, thực hiện chuyển hướng
      if (!isRedirecting) {
        isRedirecting = true;
        return redirect("/login");
      }
      return; // Tránh việc tiếp tục xử lý nếu đã chuyển hướng
    }
    // Dispatch action checkUserLogin và nhận kết quả trả về
    const result = await app.store.dispatch("checkUserLogin", data.id);

    // Kiểm tra xem người dùng có phải là admin hay không
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

  async function checkAccessTokenValidity(access_token) {
    try {
      // Thực hiện kiểm tra tính hợp lệ của access_token
      // Trả về true nếu access_token hợp lệ và false nếu không hợp lệ
      const result = await app.store.dispatch(
        "verifyAccessToken",
        access_token
      );
      if (result) {
        return result;
      }
    } catch (error) {
      console.error("Error while checking access token validity:", error);
      return false;
    }
  }
}
