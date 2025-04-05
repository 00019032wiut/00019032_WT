const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Парсим данные из форм
app.use(express.urlencoded({ extended: false }));

// Подключаем статику из /public
app.use(express.static(path.join(__dirname, 'public')));

// Подключаем роуты
const indexRoutes = require('./routes/index');     // <-- ищет файл Book-App/routes/index.js
const reviewRoutes = require('./routes/reviews'); // <-- ищет файл Book-App/routes/reviews.js

app.use('/', indexRoutes);
app.use('/reviews', reviewRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
