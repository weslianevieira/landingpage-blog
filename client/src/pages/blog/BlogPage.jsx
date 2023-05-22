import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { useLocation } from "react-router";
import "./blogPage.css";
import Post from "../../components/blog/post/Post";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <main>
      <div>
      <h1 className="heading-post">Meu Blog</h1>
      {posts.map((posts) => (
        <Post post={posts} />
      ))}
      </div>
      <div className='sidebar' id="sidebar">
        <Sidebar />
      </div>
    </main>
  );
}
