import axios from "axios";

interface input {
    userId: number;
    id: number;
    title: string;
    body: string;
}
interface output{
    id: number;
    title: string;
}
export const getPostsByUser = async (userId:number): Promise<output[]> => {
    try{
        const { data } = await axios.get<input[]>('https://jsonplaceholder.typicode.com/posts')
        if(data.length === 0){
            return[]
        }
        else{
            const result : output[] = [];
            for(const post of data){
                if(post.userId === userId){
                    result.push({
                        id: post.id,
                        title: post.title
                    })
                }
            }
            return result;
        }
    }
    catch (error){
         if(axios.isAxiosError(error)){
            console.log("Axios error")
         }
         return[];
    }
}
