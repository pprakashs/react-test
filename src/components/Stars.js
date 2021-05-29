function Stars({ rating }) {
	const ratingStr = rating.toString().split('.');
	const remainRating = 10 - rating;

	function getRating(ratings) {
		const ratingArray = [];
		for (let i = 0; ratings > i; i++) {
			ratingArray.push(i);
		}
		return ratingArray;
	}

	const actualRating = getRating(rating);
	const noneStar = getRating(remainRating);

	return (
		<>
			{actualRating.map((star) => (
				<i className="fas fa-star" key={`${star}-rate`}></i>
			))}
			{ratingStr.length > 1 && <i className="fas fa-star-half-alt"></i>}
			{noneStar.map((star) => (
				<i className="far fa-star" key={`${star}-nonerate`}></i>
			))}
		</>
	);
}

export default Stars;
