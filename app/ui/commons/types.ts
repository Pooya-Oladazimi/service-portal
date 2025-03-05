export type TextEditorProps = {
	wrapperClassName?: string,
	editorClassName?: string,
	placeholder: string,
	wrapperId: string,
	textSizeOptions: any,
	labelText: string,
	required: boolean,
	name: string
}

export type TextInputProps = {
	id: string,
	required: boolean,
	type: "text" | "email",
	name: string,
	placeHolder: string,
	labelText: string
}

export type FileInputProps = Omit<TextInputProps, 'type'>


export type SelectionInputProps = {
	id: string,
	required?: boolean,
	label: string,
	defaultOptionLabel: string,
	options: { label: string, value: string }[],
	onSelection: (event: React.ChangeEvent<HTMLSelectElement>) => void
}
