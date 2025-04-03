const fs = require('fs').promises;
const path = require('path');
const config = require('../config');
const { v4: uuidv4 } = require('uuid');

class ProductStorage {
  constructor() {
    this.filePath = path.join(__dirname, '../../', config.DATA_FILE);
    this.products = [];
    this.initialize();
  }

  async initialize() {
    try {
      const data = await fs.readFile(this.filePath, 'utf8');
      this.products = JSON.parse(data);
    } catch (err) {
      if (err.code === 'ENOENT') {
        await this.saveProducts([]);
      } else {
        throw err;
      }
    }
  }

  async saveProducts(products = this.products) {
    await fs.writeFile(this.filePath, JSON.stringify(products, null, 2));
  }

  async create(productData) {
    const product = { ...productData, id: uuidv4() };
    this.products.push(product);
    await this.saveProducts();
    return product;
  }

  async findById(id) {
    return this.products.find(p => p.id === id);
  }

  async findAll() {
    return [...this.products];
  }

  async update(id, productData) {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return null;

    this.products[index] = { ...productData, id };
    await this.saveProducts();
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return null;

    const [deleted] = this.products.splice(index, 1);
    await this.saveProducts();
    return deleted;
  }
}

module.exports = ProductStorage;