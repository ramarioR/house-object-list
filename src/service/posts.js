export const getPosts = async (page = 1, limit = 10) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`, {
        method: "GET"
    });
    const totalCount = res.headers.get('x-total-count');
    const totalPages = totalCount / limit;
    const data = await res.json();

    return {
        data: data,
        totalPages: totalPages
    };
}

export const getPost = async (postId) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "GET"
    });
    const data = await res.json();

    return data;
}