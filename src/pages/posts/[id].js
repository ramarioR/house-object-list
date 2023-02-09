import MainLayout from '@/components/Layout/MainLayout';
import Button from '@/components/ui/Button/Button';
import Container from '@/components/ui/Container/Container';
import { getPost } from '@/service/posts'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function PostPage({post}) {
  const router = useRouter();

  return (
    <>
      <MainLayout
        title={post.title}
        description={post.body}
      >
        <Container>
          <Button 
            onClick={_ => router.back()}
          >
            Назад
          </Button>
          <h1>{post.title}</h1>
          <p>{post.body}</p>          
        </Container>
      </MainLayout>
    </>
  )
}

export async function getServerSideProps({params}) {
  const post = await getPost(params.id)
  
  return {
    props: {
      post: post,
    }
  }
}