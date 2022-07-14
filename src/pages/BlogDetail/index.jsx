import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Divider, Tag, List, Avatar, Modal } from "antd";

// Style
import "./style.scss";

function BlogDetail() {
  const { id } = useParams();

  const blog = useSelector((state) => state.blog);
  const [currentBlog, setCurrentBlog] = useState({});

  useEffect(() => {
    console.log(blog);
  }, [blog]);

  useEffect(() => {
    setCurrentBlog(blog.find((record) => record.id === parseInt(id)));
  }, [id, blog]);

  return (
    <div className="page-blog-detail">
      <div className="container">
        <div className="blog-wrapper">
          <Divider />
          <h4 className="blog-title">
            {id ? currentBlog && currentBlog.title : "All Blogs"}
          </h4>
          <Divider />
          {id ? (
            currentBlog && (
              <div className="blog">
                <div className="blog-content">
                  <img
                    className="blog-img"
                    src={`${process.env.REACT_APP_URL}${currentBlog.image}`}
                    alt={currentBlog.title}
                  />
                  <div>
                    <h4 className="blog-title">
                      {currentBlog && currentBlog.title}
                    </h4>

                    <p className="blog-description">
                      {currentBlog.description}
                    </p>
                  </div>
                </div>
                <Divider />
                <p>
                  Tags: <Tag color="geekblue">{currentBlog.tags}</Tag>
                </p>
                <Divider />
              </div>
            )
          ) : (
            <ul className="blogs">
              <List
                itemLayout="horizontal"
                dataSource={blog}
                pagination={{
                  onChange: (page) => {
                    console.log(page);
                  },
                  pageSize: 6,
                }}
                renderItem={(item) => (
                  <List.Item>
                    <Link to={`/blogs/${item.id}`}>
                      <List.Item.Meta
                        avatar={
                          <img
                            className="blog-img"
                            src={`${process.env.REACT_APP_URL}${item.image}`}
                            alt={`blog-img-${item.id}`}
                          />
                        }
                        title={<p className="blog-title">{item.title}</p>}
                        description={`${item.short_description}`}
                      />
                    </Link>
                  </List.Item>
                )}
              />
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
export default BlogDetail;
