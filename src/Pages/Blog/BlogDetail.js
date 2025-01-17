import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Cookies from 'js-cookie'; // Import Cookies library
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share'; // Import react-share components

const BlogDetail = () => {
  const { cat_slug, post_id } = useParams(); // Including cat_slug in useParams

  const [post, setPost] = useState(null);
  const [categories, setCategories] = useState([]);
  const [previousPost, setPreviousPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isValid, setIsValid] = useState(true); // State to handle validation
  const [isLoading, setIsLoading] = useState(true); // Loading state

  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;

    const fetchPostData = async () => {
      try {
        const response = await axios.get(`https://www.agency09.in/cms/api/getPosts/${post_id}`);
        const { post, categories, previous_post, next_post, related_posts } = response.data;

        // Validate if the post's category slug matches the cat_slug from URL
        if (!validateCategorySlug(categories, cat_slug)) {
          setIsValid(false); // Slugs do not match, set isValid to false
          setIsLoading(false);
          return;
        }

        setPost(post);
        setCategories(categories);
        setPreviousPost(previous_post);
        setNextPost(next_post);
        setRelatedPosts(related_posts);
        hasFetched.current = true;

        // Increase view count via API and store in cookie
        if (!Cookies.get(`post_${post.id}_viewed`)) {
          await axios.get(`https://www.agency09.in/cms/api/view/${post.id}`);
          Cookies.set(`post_${post.id}_viewed`, 'true', { expires: 1 }); // Store cookie for 1 day
        }
      } catch (error) {
        console.error('Error fetching post data:', error);
        setIsValid(false); // In case of error, set isValid to false
      } finally {
        setIsLoading(false); // Set loading state to false after fetch operation
      }
    };

    fetchPostData();
  }, [cat_slug, post_id]);

  const validateCategorySlug = (categories, cat_slug) => {
    // Check if the category slug exists in the categories array
    return categories.some(category => category.cat_slug === cat_slug);
  };

  if (!isValid && !isLoading) {
    return <Navigate to="/404" />; // Redirect to 404 page if validation fails
  }

  if (isLoading) {
    return <div>Loading...</div>; // Add a loading state here
  }

  if (!post) {
    return null; // You can add error handling here
  }

  const shareUrl = window.location.href;

  return (
    <>
      <Helmet>
        <title>{post.post_name} - AGENCY09</title>
        <meta name="description" content="Detailed blog post about social media tools." />
      </Helmet>

      <Header />

      <div className="spacer"></div>

      <section className="blogDetail">
        <div className="container">
          <div className="blog-detail">
            <div className="blog-header">
              {categories.length > 0 && (
                <span className="blog-category sizeH5 uppercase bold">
                  {categories.map(category => category.cat_name).join(' | ')}
                </span>
              )}
              <h1 className="sizeH1 uppercase">{post.post_name}</h1>
              <div className="blog-meta blog-list-heading">
                <ul>
                  <li>{moment(post.created_at).format('D-MMMM-YYYY')}</li>
                  <li>{post.view} VIEWS</li>
                  <li>{post.user_name}</li>
                </ul>
              </div>
              <div className="blog-image">
                <img src={`https://www.agency09.in/cms/uploads/${post.featured_image}`} alt={post.post_name} />
              </div>
            </div>

            <div className="blog-content">
              {/* Render your blog content here */}
              <aside className='aside-links'>
              <div className="share-buttons">
                  <FacebookShareButton url={shareUrl} quote={post.post_name}>
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  <TwitterShareButton url={shareUrl} title={post.post_name}>
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <LinkedinShareButton url={shareUrl} title={post.post_name}>
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                </div>
              </aside>
              <div className="blog-body">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                <div dangerouslySetInnerHTML={{ __html: post.description }} />
                {post.tags.length > 0 && (
                  <div className="related-topics">
                    <h1 className="sizeH1 uppercase">Related Topics</h1>
                    <div className="topics">
                      {post.tags.map(tag => (
                        <a key={tag.id} href="#">#{tag.tag_name}</a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Social media share buttons */}
                

              </div>
            </div>

            <div className="blog-navigation">
              {previousPost && (
                <div className="prev-post">
                  <a href={`/blog/${previousPost.cat_slug}/${previousPost.slug}`}>Previous</a>
                </div>
              )}
              {nextPost && (
                <div className="next-post">
                  <a href={`/blog/${nextPost.cat_slug}/${nextPost.slug}`}>Next</a>
                </div>
              )}
            </div>

            {relatedPosts.length > 0 && (
              <div className="related-topics">
                <h1 className='sizeH1 uppercase'>Related Post</h1>
                <div className="related-posts">
                  {relatedPosts.map(relatedPost => (
                    <div className="related-post" key={relatedPost.id}>
                      <img src={`https://www.agency09.in/cms/uploads/${relatedPost.featured_image}`} alt={relatedPost.post_name} />
                      <h4>{relatedPost.post_name}</h4>
                      <p>{moment(relatedPost.created_at).format('D-MMMM-YYYY')}</p>
                      <a href={`/blog/${relatedPost.cat_slug}/${relatedPost.slug}`}>Read More</a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogDetail;
