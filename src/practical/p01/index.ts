import axios from 'axios';

interface ApiResult { id: number; title: string; }
interface PostResult { id: number; title: string; }

export const getEdgePosts = async (): Promise<PostResult[]> => {
  try {
    const { data } = await axios.get<ApiResult[]>('https://jsonplaceholder.typicode.com/posts');
    
    if (data.length === 0) return [];

    return [data[0], data[data.length - 1]].map(({ id, title }) => ({ id, title }));

  } catch (error) {
    throw new Error(axios.isAxiosError(error) ? error.message : 'Unknown Error');
  }
};