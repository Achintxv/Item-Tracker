const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/wallmart-item-tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected!'))
.catch(err => console.error('❌ Mongo connection error:', err));


const AdminSchema = new mongoose.Schema({
    email: String,
    password: String
});
const Admin = mongoose.model('Admin', AdminSchema);

const ClientSchema = new mongoose.Schema({
  email: String,
  password: String
});
const Client = mongoose.model('Client', ClientSchema);
module.exports = Client;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Item = require('./Item');

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (admin) {
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: admin._id }, 'secretKey');
    return res.json({ token, role: 'admin' });
  }

  const client = await Client.findOne({ email });
  if (client) {
    const isPasswordValid = await bcrypt.compare(password, client.password);
    if (!isPasswordValid) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: client._id }, 'secretKey');
    return res.json({ token, role: 'client' });
  }

  return res.status(404).json({ message: 'User not found' });
});

app.post('/register-client', async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newClient = new Client({ email, password: hashedPassword });
    await newClient.save();
    console.log('Client registered:', newClient);
    res.json({ message: 'Client registered!' });
  } catch (err) {
    console.error('Error in /register-client:', err);
    res.status(500).json({ message: 'Error registering user', error: err.message });
  }
});

app.post('/add-item', async (req, res) => {
    console.log('Received /add-item POST')
    console.log('Request body:', req.body);  
  const { name, price, expiryDate, maxDiscount } = req.body;

  const newItem = new Item({
    name,
    price: Number(price),
    expiryDate: new Date(expiryDate),
    maxDiscount: Number(maxDiscount)
  });

  try {
    await newItem.save();
    res.status(201).json({ message: 'Item added successfully!' });
  } catch (error) {
    console.error('Error saving item:', error.message);
    console.error(error);
    res.status(500).json({ message: 'Error adding item', error });
  }
});

app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    console.log('Items found:', items);
    res.json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ message: 'Error fetching items', error });
  }
});


app.get('/test', (req, res) => {
  res.send('Server is live!');
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});