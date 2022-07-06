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

  return <div>Blog</div>;
}

export default Blog;
