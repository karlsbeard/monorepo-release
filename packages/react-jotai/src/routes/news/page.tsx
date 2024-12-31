import { atom, Provider, useAtom, useSetAtom } from "jotai";
import { Suspense } from "react";
import Parser from 'html-react-parser'
import { a, useSpring } from '@react-spring/web'

type PostData = {
  by: string;
  descendants?: number;
  id: number;
  kids?: number[];
  parent: number;
  score?: number;
  text?: string;
  time: number;
  title?: string;
  type: "comment" | "story";
  url?: string;
};

const postId = atom(9001)

const propsData = atom(async (get) => {
  const id = get(postId);
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  const data: PostData = await res.json();
  return data
});

const Id = () => {
  const [id] = useAtom(postId)
  const props = useSpring({form: {id}, id, reset: true})
  return <a.h1>{props.id.to(Math.round)}</a.h1>
}

const Next = () => {
  const setPostId = useSetAtom(postId)
  return (
    <button onClick={() => setPostId((id) => id + 1)}>
      <div>{'->'}</div>
    </button>
  )
}


const PostTitle = () => {
    const [{by, text, title, time, url}] = useAtom(propsData)
  return (
    <>
      <h2>{by}</h2>
      <h6>{new Date(time * 1000).toLocaleDateString('en-US')}</h6>
      {title && <h4>{title}</h4>}
      {url && <a href={url}></a>}
      {text && <div>{Parser(text)}</div>}
    </>
  );
};

export default function News() {
  return (
    <Provider>
      <Id></Id>
      <div>
        <Suspense fallback={<h2>loading...</h2>}>
          <PostTitle></PostTitle>
        </Suspense>
      </div>
      <Next></Next>
    </Provider>
  );
}
