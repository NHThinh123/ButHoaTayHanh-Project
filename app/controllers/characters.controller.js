class CharacterController {
  //[GET] /characters
  renderAll(req, res) {
    res.send({ message: "đây là trang hiển thị danh sách các tướng" });
  }
}

module.exports = new CharacterController();
