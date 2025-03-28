import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "How to Choose the Right Paint Color for Your Home?",
    content:
      "Choosing the right paint color is essential for setting the mood of your home...",
    image: "/images/blog1.jpg",
  },
  {
    id: 2,
    title: "The Benefits of Professional Painting Services",
    content:
      "Hiring professional painters ensures quality results with durable finishes...",
    image: "/images/blog2.jpg",
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h1 className="mt-10 text-3xl text-center">Blog Not Found</h1>;
  }

  return (
    <div className="max-w-4xl p-5 mx-auto">
      <button onClick={() => navigate("/blogs")} className="mb-4 text-blue-500">
        ← Back to Blogs
      </button>
      <img src={blog.image} alt={blog.title} className="w-full rounded-lg" />
      <h1 className="mt-5 text-4xl font-bold">{blog.title}</h1>
      <p className="mt-3 text-gray-700">{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
