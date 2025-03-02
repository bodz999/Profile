function updateCountdown() {
  // Lấy ngày hiện tại
  const now = new Date();
  // Tạo đối tượng ngày cho ngày 18/10 của năm hiện tại
  let targetDate = new Date(now.getFullYear(), 9, 18); // Tháng 10: chỉ số 9 vì tháng tính từ 0

  // Nếu ngày hiện tại đã vượt qua 18/10, chuyển sang năm sau
  if (now > targetDate) {
    targetDate = new Date(now.getFullYear() + 1, 9, 18);
  }

  // Tính hiệu chênh thời gian giữa targetDate và hiện tại (tính bằng miligiây)
  const diff = targetDate - now;

  // Chuyển đổi miligiây sang ngày, giờ, phút, giây
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Cập nhật giá trị vào các phần tử HTML
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

// Cập nhật bộ đếm ngược mỗi giây
setInterval(updateCountdown, 1000);

// Gọi ngay lần đầu
updateCountdown();