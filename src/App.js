import { useState } from 'react';
import SearchResult from './components/SearchResult';
import Ratings from './components/Ratings';
import Genre from './components/Genre';

function App() {
	const movies = [
		{
			title: 'The Matrix',
			rating: 7.5,
			category: 'Action',
		},
		{
			title: 'Focus',
			rating: 6.9,
			category: 'Comedy',
		},
		{
			title: 'The Lazarus Effect',
			rating: 6.4,
			category: 'Thriller',
		},
		{
			title: 'Everly',
			rating: 5.0,
			category: 'Action',
		},
		{
			title: 'Maps to the Stars',
			rating: 7.5,
			category: 'Drama',
		},
	];

	const style = {
		outer: {
			display: 'flex',
			padding: '50px',
			alignItems: 'flex-start',
		},
		search: {
			width: '60%',
		},
		input: {
			border: '1px solid #979797',
			width: '100%',
			fontSize: '14px',
			padding: '20px',
			outline: 'none',
		},
		select: {
			padding: '20px 15px',
			margin: '0 0 0 15px',
			border: '1px solid #979797',
			width: '15%',
		},
	};
	const [searchList, setSearchList] = useState([]);
	const [searchKey, setSearchKey] = useState(null);

	const handleSearch = (e) => {
		const inputVal = e.target.value;
		setSearchKey(inputVal.toLowerCase());
		const interval = setInterval(() => {
			movies.forEach((movie) => {
				if (movie.title.toLowerCase().match(inputVal.toLowerCase())) {
					setSearchList((prevState) => {
						const filterPrevState = prevState.filter((a) => a.title !== movie.title);
						return [...filterPrevState, movie];
					});
				}
			});
			if (inputVal === '') {
				setSearchList([]);
			}
			clearInterval(interval);
		}, 500);
	};
	function filterMethod(selected, type) {
		let filterBy = [];

		if (searchKey !== null && searchKey !== '' && selected.length !== 0) {
			selected.forEach((select) =>
				movies.forEach((movie) => {
					if (movie[type] === select.item && movie.title.toLowerCase().match(searchKey) && searchKey !== '') {
						filterBy.push(movie);
					}
				})
			);
		}
		if (selected.length === 0) {
			movies.forEach((movie) => {
				if (movie.title.toLowerCase().match(searchKey)) {
					filterBy.push(movie);
				}
			});
		}
		setSearchList(filterBy);
	}

	const handleFilterGenre = (genre) => filterMethod(genre, 'category');

	const handleRating = (ratings) => filterMethod(ratings, 'rating');

	return (
		<div style={style.outer}>
			<div style={style.search} className="w-3/5">
				<input type="text" style={style.input} onChange={handleSearch} placeholder="Enter movie names" />

				<SearchResult movies={searchList} />
			</div>
			<Ratings ratingFilter={handleRating} />
			<Genre genreFilter={handleFilterGenre} />
		</div>
	);
}

export default App;
