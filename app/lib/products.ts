// Product list with pagination
export async function getProducts(limit = 10, skip = 0) {
  const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  return await res.json();
}

// Search products
export async function searchProducts(query: string) {
  const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  return await res.json();
}

// Filter by category
export async function getProductsByCategory(category: string) {
  const res = await fetch(`https://dummyjson.com/products/category/${category}`);
  return await res.json();
}

// Single product details
export async function getProductById(id: string | number) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return await res.json();
}
