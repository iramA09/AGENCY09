import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../Components/Post'; // Adjust the import path as needed
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
//import Pagination from './Pagination'; // Import your Pagination component if it's in a separate file

const getRandomDate = () => {
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day - getRandomNumber(1, 6)} / ${month - getRandomNumber(1, 6)} / ${year}`;
};

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => {
        console.log(error);
      });
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <Header />
      <div className="spacer"></div>
      <div className="blog">
        <h1 className="title text-center bg-accept text-light p-2 mb-4">blog List</h1>
        <div className="container">
          {/* <h2 className="subtitle text-left text-accept">Posts</h2> */}
          <ul>
            {currentPosts.map(post => (
              <Post key={post.id} id={post.id} title={post.title} body={post.body} date={getRandomDate()} />
            ))}
          </ul>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
        <ul className="pagination">
            {pageNumbers.map(number => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                <a onClick={() => paginate(number)} href="#!" className="page-link">
                {number}
                </a>
            </li>
            ))}
        </ul>
        </nav>
    );
};
export default Blog;
