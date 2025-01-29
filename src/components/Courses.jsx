const CourseCard = ({ image, title, description }) => {
    return (
      <div className="course-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="btn btn-primary">Apply Now</button>
      </div>
    );
  };
  