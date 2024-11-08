import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAGp922WQj4lKBc0XK6G-rpYkeKvA84h3I");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", response_mime_type: "text/plain" });

export { model };
