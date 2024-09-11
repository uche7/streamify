import React from "react";

type InputProps = {
	Id?: string;
	className?: string;
	Name: string;
	inputType: string;
	value?: string;
	required?: boolean;
	min?: string | number;
	max?: string | number;
	maxLength?: number;
	placeholder?: string;
	onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onPaste?: React.ClipboardEventHandler<HTMLInputElement>;
};

const Inputs = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const {
		Id,
		className,
		Name,
		inputType,
		value,
		required,
		min,
		max,
		maxLength,
		placeholder,
		onKeyDown,
		onChange,
		onPaste,
	} = props;

	return (
		<input
			id={Id}
			className={className}
			name={Name}
			value={value}
			min={min}
			max={max}
			ref={ref}
			maxLength={maxLength}
			required={required}
			onKeyDown={onKeyDown}
			onChange={onChange}
			onPaste={onPaste}
			type={inputType}
			placeholder={placeholder}
		/>
	);
});

Inputs.displayName = "Input";

export default Inputs;
