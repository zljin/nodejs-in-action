const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // 跨域
const userRoutes = require('./userRoutes');

const app = express();
const port = 8081;

app.use(cors()); // 跨域
app.use(bodyParser.json());
app.use('/api', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
