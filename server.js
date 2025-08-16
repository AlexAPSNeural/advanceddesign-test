const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to AdvancedDesign Test API');
});

app.post('/design', (req, res) => {
  const designData = req.body;
  // Processing designData for advanced psychological design generation
  res.status(201).json({ message: 'Design processed successfully', data: designData });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});