import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export async function mapPostWithCommentCount(): Promise<{ postId: number; title: string; totalComments: number }[]> {
  try {
    const [postsRes, commentsRes] = await Promise.all([
      axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts"),
      axios.get<Comment[]>("https://jsonplaceholder.typicode.com/comments")
    ]);

    return postsRes.data.map(post => ({
      postId: post.id,
      title: post.title,
      totalComments: commentsRes.data.filter(c => c.postId === post.id).length
    }));
  } catch {
    return [];
  }
}