import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import PostList from '@/components/Posts/PostList/PostList'
import { getPosts } from '@/service/posts'
import { useEffect } from 'react'
import Pagination from '@/components/Pagination/Pagination'
import MainLayout from '@/components/Layout/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home({posts, totalPages, activePage}) {
  return (
    <>
      <MainLayout
        title={`Главная ${activePage && +activePage !== 1 ? `- страница ${activePage}` : ''}`}
      >
        <PostList serverPosts={posts} totalPages={totalPages} activePage={activePage}/>  
      </MainLayout>
    </>
  )
}

export async function getServerSideProps({query}) {
  const page = query.page || 1;
  const posts = await getPosts(page);

  return {
    props: {
      posts: posts.data,
      totalPages: posts.totalPages,
      activePage: page,
    }
  }
}