const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/api/balance', (req, res) => {
    res.json({ balance: 230.50, currency: 'USD' });
});

app.get('/api/transactions', (req, res) => {
    res.json([
        { id: 1, date: '2026-03-25', description: 'Grocery Store Fresh Foods', amount: -65.20 },
        { id: 2, date: '2026-03-24', description: 'Salary Deposit TechCorp', amount: 4500.00 },
        { id: 3, date: '2026-03-22', description: 'Electric Bill Utility Co', amount: -120.00 }
    ]);
});

module.exports = app;
