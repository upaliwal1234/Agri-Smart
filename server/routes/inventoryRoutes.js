const express = require('express');
const router = express.Router();
const Inventory = require('../model/Inventory');
const Expenditure = require('../model/Expenditure');
const Sales = require('../model/Sales');
const User = require('../model/User');

router.get('/inventory', async (req, res) => {
  try {
    const inventoryItems = await Inventory.find();
    res.json(inventoryItems);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/inventory', async (req, res) => {
  try {
    const { cropName, amount, season, year, userId } = req.body;
    const user = await User.findById(userId);
    const newInventoryItem = await Inventory.create({
      cropName: cropName,
      amount: amount,
      season: season,
      year: year,
    });
    user.inventory.push(newInventoryItem);
    await user.save();
    res.status(201).json({ message: 'Inventory item added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.get('/expenditure', async (req, res) => {
  try {
    const expenditureRecords = await Expenditure.find();
    res.json(expenditureRecords);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/expenditure', async (req, res) => {
  try {
    const { cropName, expenditure, season, year } = req.body;
    const newExpenditureRecord = await Expenditure.create({
      cropName: cropName,
      expenditure: expenditure,
      season: season,
      year: year,
    });
    res.status(201).json({ message: 'Expenditure record added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/sales', async (req, res) => {
  try {
    const salesRecords = await Sales.find();
    res.json(salesRecords);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/sales', async (req, res) => {
  try {
    const { cropName, sales, season, year } = req.body;
    const newSalesRecord = await Sales.create({
      cropName: cropName,
      sales: sales,
      season: season,
      year: year,
    });
    res.status(201).json({ message: 'Sales record added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
