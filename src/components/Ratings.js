import { useState } from 'react';
import Stars from './Stars';

function Ratings({ ratingFilter }) {
	const [visible, setVisible] = useState(false);

	const handleSelect = () => {
		const ratingArray = [];
		document.querySelectorAll('input[name="rating"]').forEach((input) => {
			if (input.checked) {
				ratingArray.push({ item: Number(input.value) });
			}
		});
		ratingFilter(ratingArray);
	};
	return (
		<div className="relative ml-2 w-1/5">
			<button
				type="button"
				className="p-4 cursor-pointer flex text-left bg-white w-full border border-gray-400 p-4 items-center"
				onClick={() => setVisible(!visible)}
			>
				<span>Rating</span>
				{!visible ? <i className="fas fa-chevron-down ml-auto"></i> : <i className="fas fa-chevron-up ml-auto"></i>}
			</button>
			{visible && (
				<div className="absolute top-full left-0 w-40 border border-black w-80 mt-2">
					<button type="button" className="flex focus:outline-none cursor-pointer w-full">
						<label className="w-full block text-left cursor-pointer p-3">
							<input type="checkbox" name="rating" className="mr-3" defaultValue="Any Star" onClick={handleSelect} />
							Any Star
						</label>
					</button>
					<button type="button" className="flex focus:outline-none cursor-pointer w-full">
						<label className="w-full block text-left cursor-pointer p-3">
							<input type="checkbox" name="rating" className="mr-3" defaultValue="1" onClick={handleSelect} />
							<Stars rating={1} />
						</label>
					</button>
					<button type="button" className="flex focus:outline-none cursor-pointer w-full">
						<label className="w-full block text-left cursor-pointer p-3">
							<input type="checkbox" name="rating" className="mr-3" defaultValue="2" onClick={handleSelect} />
							<Stars rating={2} />
						</label>
					</button>
					<button type="button" className="flex focus:outline-none cursor-pointer w-full">
						<label className="w-full block text-left cursor-pointer p-3">
							<input type="checkbox" name="rating" className="mr-3" defaultValue="3" onClick={handleSelect} />
							<Stars rating={3} />
						</label>
					</button>
					<button type="button" className="flex focus:outline-none cursor-pointer w-full">
						<label className="w-full block text-left cursor-pointer p-3">
							<input type="checkbox" name="rating" className="mr-3" defaultValue="4" onClick={handleSelect} />
							<Stars rating={4} />
						</label>
					</button>
					<button type="button" className="flex focus:outline-none cursor-pointer w-full">
						<label className="w-full block text-left cursor-pointer p-3">
							<input type="checkbox" name="rating" className="mr-3" defaultValue="5" onClick={handleSelect} />
							<Stars rating={5} />
						</label>
					</button>
					<button type="button" className="flex focus:outline-none cursor-pointer w-full">
						<label className="w-full block text-left cursor-pointer p-3">
							<input type="checkbox" name="rating" className="mr-3" defaultValue="6" onClick={handleSelect} />
							<Stars rating={6} />
						</label>
					</button>
					<button type="button" className="flex focus:outline-none cursor-pointer w-full">
						<label className="w-full block text-left cursor-pointer p-3">
							<input type="checkbox" name="rating" className="mr-3" defaultValue="7" onClick={handleSelect} />
							<Stars rating={7} />
						</label>
					</button>
					<button type="button" className="flex focus:outline-none cursor-pointer w-full">
						<label className="w-full block text-left cursor-pointer p-3">
							<input type="checkbox" name="rating" className="mr-3" defaultValue="8" onClick={handleSelect} />
							<Stars rating={8} />
						</label>
					</button>
					<button type="button" className="flex focus:outline-none cursor-pointer w-full">
						<label className="w-full block text-left cursor-pointer p-3">
							<input type="checkbox" name="genre" className="mr-3" defaultValue="9" onClick={handleSelect} />
							<Stars rating={9} />
						</label>
					</button>
					<button type="button" className="flex focus:outline-none cursor-pointer w-full">
						<label className="w-full block text-left cursor-pointer p-3">
							<input type="checkbox" name="genre" className="mr-3" defaultValue="10" onClick={handleSelect} />
							<Stars rating={10} />
						</label>
					</button>
				</div>
			)}
		</div>
	);
}

export default Ratings;
