import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// Function for speaking text
const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.pitch = 1;
  utterance.rate = 1;
  speechSynthesis.speak(utterance);
};

const Chatbot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: "bot", text: "Hi! 👋 I'm Sameera's personal assistant." },
  ]);
  const [userInput, setUserInput] = useState("");

  // Handle sending message
  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    // Add user message
    setChatMessages((prev) => [...prev, { sender: "user", text: userInput }]);
    const question = userInput;
    setUserInput("");

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(question);
      const reply = result.response.text();

      // Add bot reply
      setChatMessages((prev) => [...prev, { sender: "bot", text: reply }]);

      // Speak reply
      speak(reply);
    } catch (err) {
      setChatMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error connecting to Gemini API." },
      ]);
    }
  };

  return (
    <div className="absolute bottom-4 right-4">
      {!chatOpen ? (
        <button
          className="bg-blue-600 text-white p-3 rounded-full shadow hover:bg-blue-500"
          onClick={() => {
            setChatOpen(true);
            speak("Hi! I'm Sameera's personal assistant. How can I help you?");
          }}
        >
          💬
        </button>
      ) : (
        <div className="bg-gray-800 w-64 h-80 rounded-lg shadow-lg flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-2 flex justify-between">
            <span>Chatbot</span>
            <button onClick={() => setChatOpen(false)}>✖</button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-2 overflow-auto text-sm">
            {chatMessages.map((msg, i) => (
              <div
                key={i}
                className={`mb-1 ${
                  msg.sender === "bot" ? "text-green-400" : "text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 border-t border-gray-700 flex">
            <input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-1 text-black text-sm p-1 rounded"
              placeholder="Type message..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 text-white px-2 ml-1 rounded"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
