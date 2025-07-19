import React from "react";
import { Newspaper, FileText, BookOpenText, Megaphone } from "lucide-react";

const blogPosts = [
  {
    title: "Tech Updates",
    description:
      "Stay updated with the latest trends, frameworks, and tools in the tech world.",
    icon: <Newspaper className="w-8 h-8 text-blue-600" />,
    link: "/blog/tech-updates",
  },
  {
    title: "Case Studies",
    description:
      "Deep dive into real projects we've solved with modern solutions and efficient workflows.",
    icon: <FileText className="w-8 h-8 text-green-600" />,
    link: "/blog/case-studies",
  },
  {
    title: "How-To Guides",
    description:
      "Step-by-step tutorials on web development, automation, hosting, and more.",
    icon: <BookOpenText className="w-8 h-8 text-purple-600" />,
    link: "/blog/how-to-guides",
  },
  {
    title: "Company News",
    description:
      "Explore our company announcements, achievements, and team milestones.",
    icon: <Megaphone className="w-8 h-8 text-yellow-600" />,
    link: "/blog/company-news",
  },
];

const Blog: React.FC = () => {
  return (
    <div className="bg-white py-16 px-6 pt-[138px]" id="blog">
      <div className="text-center mb-12 py-10">
        <h2 className="text-4xl font-bold text-gray-800">Blog & Resources</h2>
        <p className="text-gray-600 mt-2">
          Learn, explore, and grow with our curated content and updates.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              {post.icon}
              <h3 className="text-xl font-semibold text-gray-700">
                {post.title}
              </h3>
            </div>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <a
              href={post.link}
              className="text-sm text-indigo-600 hover:underline font-medium"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
