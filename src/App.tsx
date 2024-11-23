import { useState } from "react"
import PostCard from "./CompoundComponents/PostCard"

const App = () => {

  const [reverse, setReverse] = useState<boolean>(false)

  return (
    <>
      <PostCard
        post={{
          title: "Post 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum alias illo sed provident voluptate perspiciatis iste rem repudiandae odio iure nam sit, ducimus ut dolor quis voluptatibus consequatur facere laudantium?",
          user: {
            userName: "Gaurav Shinde",
            id: 12
          }

        }} >

        {
          !reverse ? <>
            <PostCard.Title />
            <PostCard.Content />
            <PostCard.User /></> : <>
            <PostCard.User />
            <PostCard.Content />
            <PostCard.Title />

          </>
        }

      </PostCard>

      <button onClick={()=>setReverse(!reverse)}>reverse</button>
    </>


  )
}

export default App