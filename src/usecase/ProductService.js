const Product = require('../domain/Product');

class ProductService {
  constructor(productRepository) {
    this.repository = productRepository;
  }

  async createProduct(productData) {
    const product = new Product(productData);
    product.validate();
    return this.repository.create(product);
  }

  async getProduct(id) {
    return this.repository.findById(id);
  }

  async getAllProducts() {
    return this.repository.findAll();
  }

  async updateProduct(id, productData) {
    const product = new Product(productData);
    product.validate();
    return this.repository.update(id, product);
  }

  async deleteProduct(id) {
    return this.repository.delete(id);
  }
}

module.exports = ProductService;