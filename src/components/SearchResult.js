import Stars from './Stars';
function SearchResult({ movies }) {
	const style = {
		list: {
			margin: '0 0 15px 0',
			display: 'flex',
		},
		left: {
			width: '70%',
		},
		h2: {
			fontSize: '15px',
		},
		movie: {
			border: '1px solid #000',
			padding: '15px 15px 0',
			margin: '15px 0 0 0',
		},
	};

	return (
		<>
			{movies.length > 0 && (
				<div style={style.movie}>
					{movies.map((movie) => (
						<div style={style.list} key={movie.title}>
							<div style={style.left}>
								<h2 style={style.h2}>{movie.title}</h2>
								<div>
									<Stars rating={movie.rating} />
								</div>
							</div>
							<span>{movie.category}</span>
						</div>
					))}
				</div>
			)}
		</>
	);
}

export default SearchResult;
