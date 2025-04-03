class ProductRepository {
    constructor(storage) {
      this.storage = storage;
    }
  
    async create(productData) {
      return this.storage.create(productData);
    }
  
    async findById(id) {
      return this.storage.findById(id);
    }
  
    async findAll() {
      return this.storage.findAll();
    }
  
    async update(id, productData) {
      return this.storage.update(id, productData);
    }
  
    async delete(id) {
      return this.storage.delete(id);
    }
  }
  
  module.exports = ProductRepository;