<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
</head>
<body>

  <h1>🛒 Item Tracker 📦</h1>
  <p>A full-stack web application to manage item inventory, track expiry dates, and dynamically compute discounts using AI.</p>

  <h2>📂 Project Structure</h2>
  <pre>
project-root/
├── /               // React frontend
├── src/
│   ├── components/   // Reusable UI components (Header, ItemCard etc.)
│   ├── pages/        // App pages (LoginPage, ItemListPage, etc.)
│   ├── services/     // API call files (Api.js)
│   ├── App.js
│   └── package.json
│
├── server/               // NodeJS + Express backend
│   ├── Item.js           // Mongoose Item schema
│   ├── Admin.js         // Mongoose Client schema
│   ├── server.js
│   └── package.json
│
└── README.md
  </pre>

  <h2>📦 Features</h2>
  <ul>
    <li>Admin and Client login/register system.</li>
    <li>Admin can add items with expiry date, price, and max discount.</li>
    <li>Client can view list of available items.</li>
    <li>AI microservice to calculate real-time discounts (upcoming).</li>
    <li>MongoDB for item and user storage.</li>
  </ul>

  <h2>🚀 How to Run</h2>
  <ol>
    <li>Start MongoDB server locally.</li>
    <li>In <code>server/</code>:
      <pre>
npm install
node server.js
      </pre>
    </li>
    <li>In <code>file-name</code>:
      <pre>
npm install
npm start
      </pre>
    </li>
  </ol>

  <h2>📊 Tech Stack</h2>
  <ul>
    <li>ReactJS (frontend)</li>
    <li>NodeJS + Express (backend)</li>
    <li>MongoDB + Mongoose</li>
    <li>Python + Flask (AI microservice)</li>
  </ul>

  <h2>📞 API Endpoints</h2>
  <table border="1" cellpadding="5" cellspacing="0">
    <thead>
      <tr>
        <th>Method</th>
        <th>Endpoint</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>POST</td>
        <td>/login</td>
        <td>User/admin login</td>
      </tr>
      <tr>
        <td>POST</td>
        <td>/register-client</td>
        <td>Client registration</td>
      </tr>
      <tr>
        <td>GET</td>
        <td>/items</td>
        <td>Get all items</td>
      </tr>
      <tr>
        <td>POST</td>
        <td>/add-item</td>
        <td>Add a new item (Admin only)</td>
      </tr>
    </tbody>
  </table>

</body>
</html>
