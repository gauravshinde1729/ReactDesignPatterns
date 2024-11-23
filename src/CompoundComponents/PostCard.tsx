import React, { createContext, useContext } from 'react'
import "./postcard.styles.css"


type PostCardContext = {
    post: Post
}

type Post = {
    title: string
    content: string
    user: {
        userName: string;
        id: number
    }
}

type PostCardChildren = {
    children: React.ReactNode
}

type PostCardType = PostCardChildren & {
    post: Post
}

const postCardContext = createContext<PostCardContext | undefined>(undefined)

const usePostCardContext = ()=>{
    const context = useContext(postCardContext)

    if(!context){
        throw Error("usePostCardContext should be inside the PostCard Provider.")
    }
    return context
}


const PostCard = ({children,  post }: PostCardType) => {
    return (
        <postCardContext.Provider value={{ post }}>
            <div className='container'>
                {children}
            </div>
        </postCardContext.Provider>
    )
}


PostCard.Title = function PostCardTitle() {
    const {post} = usePostCardContext()
    return <span>{post.title}</span>
}
PostCard.Content = function PostCardTitle() {
    const {post} = usePostCardContext()
    return <p>{post.content}</p>
}

PostCard.User = function PostCardTitle() {
    const {post} = usePostCardContext()
    return <span>{post.user.userName}</span>
}


export default PostCard