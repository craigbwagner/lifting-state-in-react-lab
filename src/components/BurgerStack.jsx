function BurgerStack(props) {
	return (
		<ul>
			{props.stack.map((ingredient, idx) => (
				<li
					key={ingredient.name + idx}
					style={{ backgroundColor: ingredient.color }}
					onClick={props.removeFromBurger}
				>
					{ingredient.name}
				</li>
			))}
		</ul>
	);
}

export default BurgerStack;
