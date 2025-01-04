require("dotenv").config();
const { HfInference } = require("@huggingface/inference");
const hf = new HfInference(process.env.HF_API_TOKEN);

exports.getChatResponse = async (req, res) => {
  const { message, context = "" } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    // Tạo prompt với yêu cầu trả lời bằng tiếng Việt
    const systemPrompt =
      "Bạn là trợ lý AI thông minh. Hãy trả lời bằng tiếng Việt một cách tự nhiên, đầy đủ và chuyên nghiệp. Luôn sử dụng tiếng Việt có dấu.";
    const prompt = `${systemPrompt}\n\nContext: ${context}\nNgười dùng: ${message}\nTrợ lý: `;

    const response = await hf.textGeneration({
      model: "mistralai/Mistral-7B-Instruct-v0.2",
      inputs: prompt,
      parameters: {
        max_new_tokens: 200,
        temperature: 0.2,
        top_p: 0.95,
        do_sample: true,
        repetition_penalty: 1.1,
        stop: ["Người dùng:", "\n\n"], // Dừng khi gặp các ký tự này
      },
    });

    // Xử lý và làm sạch phản hồi
    let cleanedResponse = response.generated_text
      .replace(prompt, "")
      .replace("Trợ lý:", "")
      .trim();

    // Kiểm tra nếu câu trả lời không phải tiếng Việt
    if (!/[\u00C0-\u1EF9]/.test(cleanedResponse)) {
      cleanedResponse =
        "Xin lỗi, tôi không thể xử lý yêu cầu này. Vui lòng thử lại.";
    }

    res.status(200).json({
      response: cleanedResponse,
      model: "Mistral-7B-Instruct",
      timestamp: new Date().toISOString(),
      language: "vi",
    });
  } catch (error) {
    console.error("Error generating response:", error);
    res.status(500).json({
      error: "Không thể tạo câu trả lời",
      details: error.message,
    });
  }
};

// Middleware xử lý lỗi
exports.errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Lỗi hệ thống",
    message: err.message,
  });
};
