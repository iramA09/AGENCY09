import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useParams } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const Blog = () => {
    const location = useLocation();
    const { cat_slug } = useParams();

    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true); // State for loading indicator
    const postsPerPage = 5;

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://www.agency09.in/cms/api/getCategory');
                setCategories(response.data.category);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        const fetchPosts = async () => {
            setLoading(true); // Start loading
            try {
                let apiUrl = 'https://www.agency09.in/cms/api/getPosts';
                if (cat_slug) {
                    apiUrl += `?cat=${cat_slug}`;
                }
                const response = await axios.get(apiUrl);
                setPosts(response.data.posts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchCategories();
        fetchPosts();
    }, [cat_slug]);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling
        });
    };
    
    return (
        <>
            <Helmet>
                <title> Blog – AGENCY09</title>
                <meta name="description" content="Clients achieve better ROI with integrated digital & inbound marketing strategies. Peek at our lead based campaigns, website designs, SEO and ORM." />
            </Helmet>

            <Header />
            <div className="spacer"></div>

            <section className='blogMain'>
                <div className='container'>
                    <div className='Heading center HeadingIcon'>
                        <h2 className='sizeH1 uppercase'>Blogs</h2>
                    </div>

                    <div className="blog-main-header">
                        <ul className='navBarC'>
                            <li><Link to='/blog' className={cat_slug === undefined ? 'active' : ''}>All</Link></li>
                            {/* Render categories dynamically */}
                            {categories.map(category => (
                                <li key={category.cat_slug}>
                                    <Link to={`/blog/${category.cat_slug}`} className={cat_slug === category.cat_slug ? 'active' : ''}>{category.cat_name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {loading ? (
                        <div className="loading">Loading...</div>
                    ) : (
                        <>
                            <div className="blog-min-box">
                                {currentPosts.map(post => (
                                    <div className="blog-list" key={post.id}>
                                        <Link to={`/blog/${post.cat_slug}/${post.slug}`}>
                                            <div className="blog-img">
                                                <div className='thumb-img'>
                                                    <img src={`https://www.agency09.in/cms/uploads/${post.featured_image}`} alt={post.post_name} width="1000" height="517" />
                                                </div>
                                                <div className="hover-overlay">
                                                    <div className="hover-text">
                                                        <h3>View Details</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="blog-list-heading">
                                                {post.categories.length > 0 && (
                                                    <span className="blog-category">
                                                        {post.categories.map(category => category.name).join(' | ')}
                                                    </span>
                                                )}
                                                <h2><a href="#">{post.post_name}</a></h2>
                                                <ul>
                                                    <li><a href="#">{moment(post.created_at).format('D-MMMM-YYYY')}</a></li>
                                                    <li><a href="#">{post.view} VIEWS</a></li>
                                                    <li><a href="#"><b>Author:</b> {post.user_name}</a></li>
                                                </ul>
                                                <div className="list-btn"><span>View Post</span></div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="pagination">
                                {[...Array(Math.ceil(posts.length / postsPerPage)).keys()].map(number => (
                                    <button
                                        key={number + 1}
                                        onClick={() => paginate(number + 1)}
                                        className={currentPage === number + 1 ? 'active' : ''}
                                    >
                                        {number + 1}
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>
            <Footer />
            {/* Inline CSS */}
            <style jsx>{`
                .loading {
                    text-align: center;
                    padding: 50px 0;
                    font-size: 18px;
                    font-weight: bold;
                    color: #333;
                }

                .pagination button {
                    margin: 0 5px;
                    padding: 8px 16px;
                    border: none;
                    background-color: #f0f0f0;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }

                .pagination button.active {
                    background-color: #007bff;
                    color: #fff;
                }

                .pagination button:hover:not(.active) {
                    background-color: #007bff;
                    color: #fff;
                }
            `}</style>
        </>
    );
};

export default Blog;
