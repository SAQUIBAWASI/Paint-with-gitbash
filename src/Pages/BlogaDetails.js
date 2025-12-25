import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "How to Choose the Right Paint Color for Your Home?",
    content:
      "Choosing the right paint color is essential for setting the mood of your home. Consider the lighting, room purpose, and personal preference when selecting shades. Neutral tones can make a room feel spacious, while bold colors add character and style.",
    image: "/images/blog1.jpg",
  },
  {
    id: 2,
    title: "The Benefits of Professional Painting Services",
    content:
      "Hiring professional painters ensures quality results with durable finishes. Experts bring experience, proper tools, and techniques that save time and enhance the final look. Professional service also guarantees safety and long-term value for your investment.",
    image: "/images/blog2.jpg",
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h1 className="mt-20 text-2xl text-center text-red-500">Blog Not Found</h1>;
  }

  return (
    <div className="max-w-5xl px-4 py-10 mx-auto sm:px-6 lg:px-8">
      <button
        onClick={() => navigate("/blogs")}
        className="mb-6 text-sm font-medium text-blue-600 hover:underline sm:text-base"
      >
        ← Back to Blogs
      </button>

      <img
        src={blog.image}
        alt={blog.title}
        className="object-cover w-full h-64 rounded-lg shadow-md sm:h-80 lg:h-[400px]"
      />

      <h1 className="mt-6 text-2xl font-extrabold text-gray-800 sm:text-3xl lg:text-4xl">
        {blog.title}
      </h1>

      <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
        {blog.content}
      </p>
    </div>
  );
};

export default BlogDetails;
