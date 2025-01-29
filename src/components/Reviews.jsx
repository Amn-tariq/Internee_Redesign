import React from "react";
import "../styles/Reviews.css";

const reviewsData = [
  {
    name: "Rabia Zain",
    location: "Lahore, Pakistan",
    review:
      "This platform helps students to boost their careers with hands-on practice with learning as well.",
    rating: 5,
  },
  {
    name: "Ali Raza",
    location: "Karachi, Pakistan",
    review:
      "Internee.pk has been a turning point in my professional journey. Great platform!",
    rating: 5,
  },
  {
    name: "Ayesha Khan",
    location: "Islamabad, Pakistan",
    review:
      "The practical projects and mentorship here are incredibly helpful.",
    rating: 4,
  },
];

function Reviews() {
  const renderStars = (count) => {
    return Array(count)
      .fill(0)
      .map((_, index) => (
        <svg
          key={index}
          className="star"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ));
  };

  return (
    <section className="reviews py-5 bg-gray-50">
      <div className="container text-center">
        <h2 className="title">What Students are saying about internee.pk</h2>
        <p className="description">
          Around 1500+ students have said how good internee.pk helped them in
          their career 👨🏻‍🎓
        </p>
        <div className="review-grid mt-4">
          {reviewsData.map((review, index) => (
            <div key={index} className="review-card">
              <div className="rating">{renderStars(review.rating)}</div>
              <blockquote className="review-text">{review.review}</blockquote>
              <div className="reviewer">
                <p className="name">{review.name}</p>
                <p className="location">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
