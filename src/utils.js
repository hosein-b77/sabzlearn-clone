const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(
                <img
                    key={i}
                    src="/images/svgs/star_fill.svg"
                    alt="rating"
                    className="course-box__star"
                />
            );
        } else {
            stars.push(
                <img
                    key={i}
                    src="/images/svgs/star.svg"
                    alt="rating"
                    className="course-box__star"
                />
            );
        }
    }
    return stars.reverse();
};

export { renderStars }