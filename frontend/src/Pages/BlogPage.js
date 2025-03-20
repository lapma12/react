import { Link } from "react-router-dom";
import "../Styles/Blog.css"

const BlogPage = () => {
  const blogPosts = [
    {
      title: "The Future of Web Development",
      date: "March 15, 2025",
      content:
        "Web development is rapidly evolving, and it's important to stay on top of the latest trends. In this post, we discuss the future of JavaScript, the rise of new frameworks, and how AI is changing the development process.",
    },
    {
      title: "5 Tips for Effective Time Management",
      date: "March 12, 2025",
      content:
        "Time management is crucial for productivity. Learn how to plan your day effectively, avoid procrastination, and boost your focus with these 5 simple tips.",
    },
    {
      title: "Understanding React Hooks",
      date: "March 10, 2025",
      content:
        "React hooks have become one of the most powerful features in React development. This blog post covers the basics of hooks, how they work, and some examples of how to use them in your projects.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="blog-header">
        <h1 className="text-4xl font-bold mb-6">Our Latest Blog Posts</h1>
        <p>
          Stay up to date with the latest trends in web development, time
          management, and more!
        </p>
      </div>

      {blogPosts.map((post, index) => (
        <div key={index} className="blog-post">
          <h2>{post.title}</h2>
          <p className="text-sm text-gray-400 mb-4">{post.date}</p>
          <p>{post.content}</p>
          <Link to={`/blog/${index}`}>
            <button className="read-more-button mt-4">Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
