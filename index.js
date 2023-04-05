const express = require('express');
const authRoutes = require('./src/auth/routes');
const app = express();
const cors = require('cors');

const PORT_NUMBER = 3000;

// middleware

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Word');
});

app.use('/api/v1', authRoutes);

app.listen(PORT_NUMBER, () => {
    console.log(`server has started on port ${PORT_NUMBER}`);
});
