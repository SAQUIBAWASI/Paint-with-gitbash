import React from "react";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "How to Choose the Right Paint Color for Your Home?",
    description:
      "Discover expert tips on selecting the perfect paint colors to enhance your home’s beauty and style.",
    image: "/images/b1.jpg",
    date: "March 28, 2025",
  },
  {
    id: 2,
    title: "The Benefits of Professional Painting Services",
    description:
      "Learn why hiring professionals for painting projects ensures long-lasting and high-quality results.",
    image: "/images/b2.jpg",
    date: "March 20, 2025",
  },
  {
    id: 3,
    title: "Interior vs. Exterior Paint: What’s the Difference?",
    description:
      "Understand the key differences between interior and exterior paints and how to choose the best one.",
    image: "/images/b.jpg",
    date: "March 15, 2025",
  },
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen px-4 py-10 bg-gray-100 sm:px-6 lg:px-12">
      <h1 className="mb-12 text-3xl font-extrabold text-center text-purple-600 sm:text-4xl lg:text-5xl">
        Painting Tips & Blogs
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col p-5 transition-transform transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="object-cover w-full rounded-md h-52 sm:h-56 lg:h-64"
            />
            <h2 className="mt-4 text-xl font-bold text-gray-900 sm:text-2xl">{blog.title}</h2>
            <p className="mt-2 text-sm text-gray-700 sm:text-base">{blog.description}</p>
            <p className="mt-3 text-sm text-gray-500">{blog.date}</p>
            <button
              onClick={() => navigate(`/blog/${blog.id}`)}
              className="px-5 py-2 mt-4 text-sm font-semibold text-white transition-colors bg-purple-500 rounded-md hover:bg-purple-600 sm:text-base"
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
