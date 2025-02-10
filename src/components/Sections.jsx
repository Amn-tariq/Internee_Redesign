import React from "react";
import Card3 from "./Card3";
import "../styles/trusted.css";
import s1 from "../assets/s1.WEBP";
import s2 from "../assets/s2.PNG";
import s3 from "../assets/s3.PNG";
import s4 from "../assets/s4.PNG";

function Sections() {
  const sections = [
    {
      t1: "Our LMS",
      t2: "Guided Tutorials in Learning Management System",
      t3: "Want to learn something but don't know what's the roadmap or your english is not too good? That's why we launch LMS for you.",

      img: s1,
      p1: "Sell Courses and Earn Are you an expert in your field? Share your knowledge on our LMS. Create and sell courses, or contribute as an instructor. Empower others on their learning journey while earning rewards for your expertise.",
      p2: "Certification Complete courses on our LMS and earn certifications that validate your expertise. Showcase your accomplishments to potential employers and stand out in a competitive landscape.",
      p3: "Courses in Urdu Dive into the world of knowledge with our courses in Urdu. Breaking language barriers, Our LMS ensures that education is accessible and relatable for everyone. Learn, grow, and excel in a language that feels like home.",
      p4: "Practice Exercises Theory is just the beginning. Our LMS goes beyond by offering practical exercises that challenge and refine your skills. Apply your knowledge in real-world scenarios, solidifying your understanding and boosting your confidence.",
    },
    {
      t1: "Our own task portal",
      t2: "Manage Project Via Own Task Portal",
      t3: "Welcome to internee.pk task portal. Where Tasks Transform Into Skills",

      img: s2,
      p1: "Hands on Projects we believe in learning by doing. Dive into hands-on projects that simulate real-world scenarios. From coding challenges to creative projects, every task is crafted to impart practical skills that resonate in professional environments.",
      p2: "How to represent yourself More than just completing tasks, It empowers you to showcase your journey. Every completed task contributes to your digital portfolio, a dynamic representation of your skills and accomplishments. Let your work speak volumes about your capabilities.",
      p3: "SDLC Techniques Understanding the Software Development Life Cycle (SDLC) is pivotal in the tech world. Acquire skills that align with industry standards and boost your project management proficiency.",
      p4: "Easy to understand Learning shouldn't be complicated. Our tasks are designed to be easily comprehensible, ensuring a smooth learning experience for everyone. Whether you're a seasoned professional or a beginner.",
    },
    {
      t1: "Are you Tech Instructor or Content Creator?",
      t2: "Create Courses In Local Language & Generate Income",
      t3: "Are you a professional want to start your journey as a tech instructor and content creator to make some revenue? Just visit Our LMS Intructor Portal",

      img: s3,

      p1: "Upload Tutorials & Excersice Transform your expertise into impactful learning materials. As an instructor on Internee.pk LMS, you can effortlessly upload tutorials and exercises, shaping the educational experience for countless learners",
      p2: "Generate Revenue Teach what you love and earn what you deserve. Internee.pk LMS offers instructors the opportunity to generate revenue. Monetize your expertise, reach a global audience, and make a meaningful income from your passion.",
      p3: "Instructor Identity Internee.pk LMS provides a platform for instructors to build their brand. Showcase your skills, experience, and teaching style, creating a unique and recognizable identity in the world of online education.",
      p4: "Perfact Share Ratio We believe in fair partnerships. we enjoy a perfect share ratio that ensures transparency and fairness. Your hard work deserves to be rewarded, and we make sure you get your share",
    },
    {
      t1: "Already have a good skill but looking for job?",
      t2: "Job Portal, Ultimate Place To Find The Best Job",
      t3: "Streamline the approval process with your customer to quickly close the deal, get the sale, and start production.",

      img: s4,
      p1: "100% Mobile friendly online art approvals",
      p2: "Speed up the design process Everything is done online, from mockup to final design.",
      p3: "Communicate easier Add multiple recipients to an Art Approval to reduce traditional email clutter.",
      p4: "Add changes faster Students can add comments to approvals for changes, saving you both time on finalizing designs.",
    },
  ];
  return (
    <>
      <div className="container">
        {sections.map((section, index) => (
          <Card3
            key={index}
            img={section.img}
            t1={section.t1}
            t2={section.t2}
            t3={section.t3}
            p1={section.p1}
            p2={section.p2}
            p3={section.p3}
            p4={section.p4}
            isReversed={index % 2 === 1} // Reverse layout for odd-indexed sections
          />
        ))}
      </div>
    </>
  );
}

export default Sections;
