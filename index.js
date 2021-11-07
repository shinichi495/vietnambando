const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || '3000';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render(
    'index', 
    { 
      title: 'Coming Soon!', 
      mainText: 'Bản Đồ Việt Nam', 
      subText: `Chúng Tôi Cung Cấp Dịch Vụ Bản Đồ Cho Developer Tại Việt Nam. 
      <br>Brought to you by amazing people`
    }
    );
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
