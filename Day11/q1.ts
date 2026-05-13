// q1.ts

interface Album {
  userId: number;
  id: number;
  title: string;
}

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

// Test
fetchData<Album>("https://jsonplaceholder.typicode.com/albums/1")
  .then(data => console.log(data))
  .catch(err => console.error(err));