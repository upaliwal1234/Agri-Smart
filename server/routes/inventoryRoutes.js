const express = require('express');
const router = express.Router();
const Inventory = require('../model/Inventory');
const Expenditure = require('../model/Expenditure');
const Sales = require('../model/Sales');

// GET all inventory items
router.get('/inventory', async (req, res) => {
    try {
      const inventoryItems = await Inventory.find();
      res.json(inventoryItems);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // POST a new inventory item
  router.post('/inventory', async (req, res) => {
    try {
      const { cropName, amount, season, year } = req.body;
      const newInventoryItem = await Inventory.create({
        cropName: cropName,
        amount: amount,
        season: season,
        year: year,
      });
      res.status(201).json({ message: 'Inventory item added successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

// GET all expenditure records
router.get('/', async (req, res) => {
    try {
      const expenditureRecords = await Expenditure.find();
      res.json(expenditureRecords);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // POST a new expenditure record
  router.post('/', async (req, res) => {
    try {
      const { cropName, expenditure, season, year } = req.body;
  
      // Create a new expenditure record
      const newExpenditureRecord = await Expenditure.create({
        cropName,
        expenditure,
        season,
        year
      });
  
      // Save the new expenditure record to the database
      await newExpenditureRecord.save();
  
      res.status(201).json({ message: 'Expenditure record added successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

// GET all sales records
router.get('/sales', async (req, res) => {
    try {
      const salesRecords = await Sales.find();
      res.json(salesRecords);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // POST a new sales record
  router.post('/sales', async (req, res) => {
    try {
      const { cropName, sales, season, year } = req.body;
  
      // Create a new sales record
      const newSalesRecord = await Sales.create({
        cropName,
        sales,
        season,
        year
      });
  
      // Save the new sales record to the database
      await newSalesRecord.save();
  
      res.status(201).json({ message: 'Sales record added successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = router;
