import React, { createContext, useState, ReactNode, PropsWithChildren } from "react";
import { MainContextInterface, PostInterface } from "../types";

export const MainContext = createContext<MainContextInterface | null>(null);

interface PropsInterface extends PropsWithChildren {
	a?: number
}

export const MainContextProvider = (props: PropsWithChildren) => {
  console.log(props.children);
  const [posts, setPosts] = useState<PostInterface[]>([]);

  const renderPosts = () => {
    return (
      <div className="posts">
        {posts.map((post:any) => (
          <div key={post.title}>
            <p>{post.title}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <MainContext.Provider
      value={{
        posts: posts,
        setPosts: setPosts,
        renderPosts: renderPosts
      }}
    >
      {props.children}
    </MainContext.Provider>
  );

};


