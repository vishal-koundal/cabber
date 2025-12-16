const ReviewItem = ({ review }) => {
  if (!review) return null;

  const renderStars = (rating) => {
    const stars = [];
    const numRating = parseInt(rating) || 5;

    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill={i < numRating ? 'currentColor' : 'none'}
          stroke={i < numRating ? 'currentColor' : 'currentColor'}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div>
      <blockquote
        className="
          bg-white border borderLight rounded-xl p-6 sm:p-7 lg:p-8
          shadow-sm hover:shadow-lg transition-all duration-300
        "
      >
        {/* Stars + Name */}
        <div className="text-center sm:text-left">
          <div className="flex justify-center sm:justify-start gap-0.5 text-primary mb-2">
            {renderStars(review.rating)}
          </div>

          <h4 className="text-secondary font-semibold text-base sm:text-lg">
            {review.name}
          </h4>
        </div>

        {/* Review Text */}
        <p className="mt-4 text-sm sm:text-base text-grayDark leading-relaxed">
          “{review.review}”
        </p>
      </blockquote>
    </div>
  );
};

export default ReviewItem;
