import { Dispatch, JSX } from "react";

export interface MainContextInterface {
	posts: PostInterface[];
	//properly typizated setter
	setPosts: Dispatch<PostInterface[]>;
	renderPosts: () => JSX.Element;
}

export interface PostInterface {
	body: string;
    id: number;
    title: string;
    userId: number
}