import Link from "next/link";
import style from "./post_card.module.scss";

export default function PostCard({post}) {
    return (
        <>
            <Link href={`/posts/[id]`} as={`/posts/${post.id}`} className={style.post_card}>
                <h3 className={style.title}>{post.title}</h3>
                <p className={style.text}>{post.body}</p>
            </Link>
        </>
    )
}