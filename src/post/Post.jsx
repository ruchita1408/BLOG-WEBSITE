import './post.css'

export default function Post() {
  return (
    <div className='post'>
      <img src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="postImg" />
       <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit, amet 
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
       </div>
       <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A qui voluptatem eligendi? Necessitatibus amet qui sit laudantium quas, quo illo perferendis, nisi voluptatibus reprehenderit minima!
       Lorem ipsum dolor sit amet consectetur adipisicing elit. A qui voluptatem eligendi? Necessitatibus amet qui sit laudantium quas, quo illo perferendis, nisi voluptatibus reprehenderit minima!Lorem ipsum dolor sit amet consectetur adipisicing elit. A qui voluptatem eligendi? Necessitatibus amet qui sit laudantium quas, quo illo perferendis, nisi voluptatibus reprehenderit minima! </p>
    </div>
  )
}
