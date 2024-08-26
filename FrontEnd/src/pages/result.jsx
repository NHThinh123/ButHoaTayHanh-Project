import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PaymentResult from "../components/templates/payment-result";

const ResultPage = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const status = params.get("resultCode") === "0" ? "Thành công" : "Thất bại";
    const message = params.get("message") || "Không có thông báo";
    setPaymentStatus({ status, message });
  }, [location]);

  return (
    <div>
      <h1>Kết quả thanh toán</h1>
      {paymentStatus && (
        <PaymentResult
          status={paymentStatus.status}
          message={paymentStatus.message}
        />
      )}
    </div>
  );
};

export default ResultPage;
