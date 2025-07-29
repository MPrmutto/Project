//1. Importing Dependencies
import express from 'express'; //นำเข้าโมดูล express

//2. Configuration
const app = express(); //กำหนดตัวแปร app เพื่อใช้สำหรับสร้าง API
const PORT = process.env.PORT || 4000; //กำหนด port การทำงานของ API server

//3. Defining API Endpoints
// Hello World
app.get('/', (req, res) => {
  res.send('Hello, World!'); // ส่งข้อความ "Hello, World!" เมื่อเข้าถึง root path
});

//4. Starting Web Server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
