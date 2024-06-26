function BurgerStack(props) {
	return (
		<ul>
			{props.stack.map((ingredient, idx) => (
				<li
					key={ingredient.name + idx}
					style={{ backgroundColor: ingredient.color }}
				>
					{ingredient.name}
				</li>
			))}
		</ul>
	);
}

export default BurgerStack;
