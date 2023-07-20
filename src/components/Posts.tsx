import React, {useContext, useEffect} from 'react'
import { MainContext } from '../context/MainContext';

export const Posts = () => {
    const {posts, setPosts, renderPosts} = useContext(MainContext)!;
    console.log(posts, "POSTS");

    // first render
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setPosts(json);
        });
    }, []);

  return (
    <div>
        <h1>Posts</h1>
        {renderPosts()}
    </div>
  )
}