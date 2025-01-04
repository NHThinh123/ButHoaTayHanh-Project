// services/huggingfaceService.js
require("dotenv").config();
const { HfInference } = require("@huggingface/inference");

class HuggingFaceService {
  constructor() {
    this.hf = new HfInference(process.env.HUGGINGFACE_TOKEN);
  }

  async generateText(prompt) {
    try {
      const result = await this.hf.conversational({
        model: "facebook/blenderbot-400M-distill",
        inputs: {
          past_user_inputs: [],
          generated_responses: [],
          text: prompt,
        },
      });

      return result.generated_text;
    } catch (error) {
      console.error("Hugging Face API Error:", error);
      throw new Error("Không thể sinh response từ AI");
    }
  }

  // Các phương thức khác cho các task khác
  async translateText(text, sourceLanguage, targetLanguage) {
    try {
      const result = await this.hf.translation({
        model: "facebook/nllb-200-distilled-600M",
        inputs: text,
        parameters: {
          source_lang: sourceLanguage,
          target_lang: targetLanguage,
        },
      });

      return result[0].translation_text;
    } catch (error) {
      console.error("Translation Error:", error);
      throw new Error("Không thể dịch văn bản");
    }
  }
}

module.exports = new HuggingFaceService();
