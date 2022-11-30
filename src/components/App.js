import React, { useState } from "react";
import Nav from "./Nav";
import HogCards from "./HogCards"
import Hogs from "../porkers_data";
import Filter from "./Filter"
import Sort from "./sort"
function App() {

	const [hogs, setHogs] = useState(Hogs);
	const [filter, setFilter] = useState(false)

	//sorting by name
	const sortingName = [...hogs].sort((a, b) =>
		a.name > b.name ? 1 : -1,
	);
	/////////////////////////
	//sort by weight///
	const sortingWeight = [...hogs].sort((a, b) => a.weight - b.weight);

	console.log("sorting", sortingWeight);

	//filtering
	const visibleHogs = hogs.filter((hog) => {
		if (filter) {
			return hog.greased === true;
		}
		else {

			return true;
		}
	})
	//////////
	function handleSort(event) {
		if (event.target.value === "name") {
			setHogs(sortingName);
		}
		else if (event.target.value === "weight") {
			setHogs(sortingWeight)
		}
		else {
			setHogs(Hogs)
		}

	}

	return (
		<div className="App">
			<Nav />
			<Filter handleFilter={setFilter} />
			<Sort handleSorting={handleSort} />
			<HogCards hogs={visibleHogs} />
		</div>
	);
}

export default App;
