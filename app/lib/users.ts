// Fetch paginated users
export async function getUsers(limit = 10, skip = 0) {
  const res = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`);
  return await res.json();
}

// Search users
export async function searchUsers(query: string) {
  const res = await fetch(`https://dummyjson.com/users/search?q=${query}`);
  return await res.json();
}

// Single user details
export async function getUserById(id: string | number) {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  return await res.json();
}
