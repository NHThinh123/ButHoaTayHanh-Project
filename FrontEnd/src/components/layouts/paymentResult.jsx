const PaymentResult = ({ status, message }) => {
  return (
    <div>
      <h2>Kết quả thanh toán</h2>
      <p>Trạng thái: {status}</p>
      <p>Thông báo: {message}</p>
    </div>
  );
};

export default PaymentResult;
