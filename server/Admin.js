const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost:27017/wallmart-item-tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const AdminSchema = new mongoose.Schema({
  email: String,
  password: String
});

const Admin = mongoose.model('Admin', AdminSchema);

bcrypt.hash('admin123', 10, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
    mongoose.connection.close();
    return;
  }

  const newAdmin = new Admin({
    email: 'admin@example.com',
    password: hash
  });

  newAdmin.save()
    .then(() => {
      console.log('✅ Admin user added successfully!');
      mongoose.connection.close();
    })
    .catch((error) => {
      console.error('❌ Error adding admin:', error);
      mongoose.connection.close();
    });
});
