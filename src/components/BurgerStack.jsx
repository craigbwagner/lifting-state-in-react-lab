function BurgerStack({ stack, removeFromBurger }) {
	return (
		<ul>
			{stack.map((ingredient) => (
				<li
					key={ingredient.key}
					style={{ backgroundColor: ingredient.color }}
					onClick={() => removeFromBurger(ingredient)}
				>
					{ingredient.name}
				</li>
			))}
		</ul>
	);
}

export default BurgerStack;
