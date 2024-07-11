import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="spacer"></div>
      <div className="post-detail">
        <h1 className="title text-center bg-accept text-light p-2 mb-4">{post.title}</h1>
        <div className="container">
          <p>{post.body}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostDetail;
