import React, { useState } from 'react';
function Genre({ genreFilter }) {
	const [visible, setVisible] = useState(false);

	const handleSelect = () => {
		const genreArray = [];
		document.querySelectorAll('input[name="genre"]').forEach((input) => {
			if (input.checked) {
				genreArray.push({ item: input.value });
			}
		});
		genreFilter(genreArray);
	};

	return (
		<div className="relative ml-2 w-1/5">
			<button
				type="button"
				className="p-4 cursor-pointer flex text-left bg-white w-full border border-gray-400 p-4 items-center"
				onClick={() => setVisible(!visible)}
			>
				<span>Genre</span>
				{!visible ? <i className="fas fa-chevron-down ml-auto"></i> : <i className="fas fa-chevron-up ml-auto"></i>}
			</button>
			{visible && (
				<div className="absolute top-full left-0 w-40 border border-black w-full mt-2">
					<button type="button" className="flex focus:outline-none cursor-pointer w-full">
						<label className="w-full block text-left cursor-pointer p-3">
							<input type="checkbox" name="genre" className="mr-3" defaultValue="Any genre" onClick={handleSelect} />
							Any genre
						</label>
					</button>
					<button type="button" className="flex focus:outline-none cursor-pointer w-full">
						<label className="w-full block text-left cursor-pointer p-3">
							<input type="checkbox" name="genre" className="mr-3" defaultValue="Action" onClick={handleSelect} />
							Action
						</label>
					</button>
					<button type="button" className="flex focus:outline-none cursor-pointer w-full">
						<label className="w-full block text-left cursor-pointer p-3">
							<input type="checkbox" name="genre" className="mr-3" defaultValue="Comedy" onClick={handleSelect} />
							Comedy
						</label>
					</button>
					<button type="button" className="flex focus:outline-none cursor-pointer w-full">
						<label className="w-full block text-left cursor-pointer p-3">
							<input type="checkbox" name="genre" className="mr-3" defaultValue="Drama" onClick={handleSelect} />
							Drama
						</label>
					</button>
					<button type="button" className="flex focus:outline-none cursor-pointer w-full">
						<label className="w-full block text-left cursor-pointer p-3">
							<input type="checkbox" name="genre" className="mr-3" defaultValue="Thriller" onClick={handleSelect} />
							Thriller
						</label>
					</button>
				</div>
			)}
		</div>
	);
}

export default Genre;
