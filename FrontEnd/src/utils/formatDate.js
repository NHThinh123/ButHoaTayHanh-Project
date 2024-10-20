import { format } from "date-fns";
import vi from "date-fns/locale/vi";

const formatDate = (rawDate) => {
  // Chuyển đổi chuỗi ngày tháng về đối tượng Date
  const date = new Date(rawDate);
  // Hàm để định dạng thời gian
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000); // Tính số giây chênh lệch
  const oneDay = 24 * 60 * 60; // Số giây trong 1 ngày
  const oneWeek = 7 * oneDay; // Số giây trong 1 tuần

  // Điều kiện định dạng
  if (diffInSeconds < 3600) {
    return `${Math.floor(diffInSeconds / 60)} phút trước`; // Dưới 1 giờ
  } else if (diffInSeconds < oneDay) {
    return `${Math.floor(diffInSeconds / 3600)} giờ trước`; // Dưới 1 ngày
  } else if (diffInSeconds < oneWeek) {
    return `${Math.floor(diffInSeconds / oneDay)} ngày trước`; // Dưới 1 tuần
  } else {
    return format(date, "dd/MM/yyyy", { locale: vi }); // Trên 1 tuần
  }
};

export default formatDate;
