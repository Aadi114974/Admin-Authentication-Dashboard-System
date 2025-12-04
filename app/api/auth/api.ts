const BASE_URL = "https://dummyjson.com";

export async function loginDummy(data: { username: string; password: string }) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Invalid login");

  return res.json();
}

export async function getUsers(limit = 10, skip = 0) {
  const res = await fetch(`${BASE_URL}/users?limit=${limit}&skip=${skip}`);
  return res.json();
}

export async function searchUsers(query: string) {
  const res = await fetch(`${BASE_URL}/users/search?q=${query}`);
  return res.json();
}

export async function getSingleUser(id: string) {
  const res = await fetch(`${BASE_URL}/users/${id}`);
  return res.json();
}

export async function getProducts(limit = 10, skip = 0) {
  const res = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);
  return res.json();
}

export async function searchProducts(query: string) {
  const res = await fetch(`${BASE_URL}/products/search?q=${query}`);
  return res.json();
}

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/products/categories`);
  return res.json();
}

export async function filterByCategory(category: string) {
  const res = await fetch(`${BASE_URL}/products/category/${category}`);
  return res.json();
}

export async function getSingleProduct(id: string) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
}
