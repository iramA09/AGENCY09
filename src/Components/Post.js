import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ id, title = "title", body = "blog text", date = "dd/mm/yyyy" }) => {
  return (
    <div className="mb-4">
      <div className="alert alert-info d-flex flex-column">
        <h3 className="subtitle">
          <Link to={`/blog/${id}`} className="text-decoration-none text-reset">
            {capitalizeFirstLetter(title)}
          </Link>
        </h3>
        <p>{body}</p>
        <small style={{ width: "100%" }} className="text-right text-accept">
          {date}
        </small>
      </div>
    </div>
  );
};

// Utility function
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Post;
