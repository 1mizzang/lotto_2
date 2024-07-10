const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// MongoDB 연결 문자열
const uri = "mongodb+srv://test:1234@cluster0.dfioo8z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// MongoDB 연결 설정
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Express 기본 라우팅
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 서버 실행
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
