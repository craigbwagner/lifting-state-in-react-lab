function IngredientList({ availableIngredients, addToBurger }) {
	return (
		<ul>
			{availableIngredients.map((ingredient, idx) => (
				<li
					key={ingredient.name + idx}
					style={{ backgroundColor: ingredient.color }}
					onClick={() => addToBurger(ingredient)}
				>
					{ingredient.name}
				</li>
			))}
		</ul>
	);
}

export default IngredientList;
