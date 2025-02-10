import React from "react";
import "../styles/trusted.css";
import Card2 from "./Card2";
import b1 from "../assets/b1.jpeg";
import b2 from "../assets/b2.jpeg";
import b3 from "../assets/b3.jpeg";
import b4 from "../assets/b3.jpeg";

function Blog() {
  const blogs = [
    {
      title: "Complete all of the task but didn't get certification yet? 😓🤦‍♀️",
      imgSrc: b1,
      text: "Drop us a quick email at issues@internee.pk with the subject Didn&apos;t get certification yet. Our team will swiftly resolve the matter, ensuring you get your recognition promptly.",
    },
    {
      title: "Looking to make a meaningful impact in the community?🌟🎉",
      imgSrc: b2,
      text: "Our goal is to make Pakistan as an IT Hub. For this, we need more hands-on developers and tech enthusiast who will lift the Pakistan's IT export into the top👨‍💻. Your guidance and help may create a significant impact on some one's career. 🚀.",
    },
    {
      title: "🚀Calling communities to Empower Students with Internee.pk!✌",
      imgSrc: b3,
      text: "We'd love to discuss how a collaboration with Internee.pk can benefit your universites , socities, institutes and educational institutions and specially with students.",
    },
    {
      title: "Ready to Showcase Your Expertise? Follow These Simple Steps! 🌟",
      imgSrc: b4,
      text: "To complete the process, send us all the task details via email at careers@internee.pk. This ensures that we have all the necessary information to validate your certification.",
    },
  ];
  return (
    <>
      <section className="blog-section sec">
        <h1>Recent Blogs</h1>

        <div className="row row-cols-1 row-cols-md-4 g-4">
          {blogs.map((blog, index) => (
            <Card2
              key={index}
              title={blog.title}
              imgSrc={blog.imgSrc}
              text={blog.text}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Blog;
