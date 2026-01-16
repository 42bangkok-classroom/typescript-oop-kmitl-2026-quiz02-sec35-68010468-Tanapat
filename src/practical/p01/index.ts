async function getEdgePosts() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`error: ${response.status}`);
    }
    const posts = await response.json();

    if (posts.length === 0) {
      return []; 
    }
    const firstPost = posts[0];
    const lastPost = posts[posts.length - 1];

    const formattedFirstPost = {
      id: firstPost.id,
      title: firstPost.title
    };

    const formattedLastPost = {
      id: lastPost.id,
      title: lastPost.title
    };

    return [formattedFirstPost, formattedLastPost];

  } catch (error) {
    return null; 
  }
}
getEdgePosts()
