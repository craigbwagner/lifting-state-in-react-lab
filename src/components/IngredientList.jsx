function IngredientList(props) {
  return (
		<ul>
			{props.availableIngredients.map((ingredient) => (
				<li
					key={ingredient.name}
					style={{ backgroundColor: ingredient.color }}
					onClick={props.addToBurger}
				>
					{ingredient.name}
				</li>
			))}
		</ul>
  );
}

export default IngredientList;
