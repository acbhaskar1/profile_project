const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
const profileRoutes = require('./routes/profileRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', profileRoutes);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


