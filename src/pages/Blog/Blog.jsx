import React, { useEffect, useState } from "react";

// Api
import { getBlogs } from "../../api/blog";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="page-blog">
      <div className="container">
        <p>Blog</p>
      </div>
    </div>
  );
}

export default Blog;
