class ProductController {
    constructor(productService) {
      this.service = productService;
    }
  
    async create(req, res) {
      try {
        const product = await this.service.createProduct(req.body);
        res.status(201).json(product);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async get(req, res) {
      try {
        const product = await this.service.getProduct(req.params.id);
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.json(product);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async getAll(req, res) {
      try {
        const products = await this.service.getAllProducts();
        res.json(products);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async update(req, res) {
      try {
        const product = await this.service.updateProduct(req.params.id, req.body);
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.json(product);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async delete(req, res) {
      try {
        const result = await this.service.deleteProduct(req.params.id);
        if (!result) return res.status(404).json({ error: 'Product not found' });
        res.status(204).end();
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  }
  
  module.exports = ProductController;