export async function getPosts() {
    try {
      const response = await fetch('https://dazzling-bublanina-0e6228.netlify.app/public/db.json');
      const data = await response.json();
      return data.posts;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      return [];
    }
  }