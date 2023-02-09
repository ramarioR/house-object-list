import { getPosts } from "@/service/posts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import Pagination from "../../Pagination/Pagination"
import PostCard from "../../PostCard/PostCard"
import Container from "../../ui/Container/Container";


export default function PostList({serverPosts, totalPages, activePage}) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    // const [posts, setPosts] = useState(serverPosts);
    const [page, setPage] = useState(activePage);

    const clickPagination = async (page) => {
        setIsLoading(true);
        await router.push(`/?page=${page}`);
        setIsLoading(false);
    }


    //Или
    
    // const clickPagination = async (page) => {
    //     setIsLoading(true);
    //     router.push({query: { page: page }});
    //     setPage(page);
    //     const posts = await getPosts(page);
    //     setIsLoading(false);
    //     setPosts(posts.data);
    // }


    const getList = () => {

        //Ну или вешать класс и показывать значек загрузки, чтобы симпотишна было

        if (isLoading) {
            return <>
                <h3>Загрузка...</h3>
            </>
        }

        return (
            <>
                
                {serverPosts && serverPosts.length > 0 ?
                    serverPosts.map(post => {
                        return <PostCard post={post} key={post.id}/>
                    })
                    :
                    <p>Ничего не найдено</p>
                }
            </>
        )
    }

    return (
        <>
            <Container style={{paddingTop: '40px'}}>
                {getList()}
                <Pagination
                    totalPages={totalPages}
                    activePage={activePage}
                    onClick={clickPagination}
                />
            </Container>
        </>
    )
}