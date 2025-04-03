class Product {
  constructor({ id, name, price, description }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description || '';
  }

  validate() {
    if (!this.name) throw new Error('Product name is required');
    if (!this.price || this.price <= 0) throw new Error('Valid price is required');
    return true;
  }
}

module.exports = Product;