
import * as d3 from 'd3';

export default async function fetchData() {
	// replace this block with your data fetching code
	let data = await d3.csv('indian_food.csv');

	// return your finalized data here
	// you can return any variable
	// for example, if you take "data" and group it
	// you can return your groupedData variable instead
	return data;
}