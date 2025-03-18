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
	type: "text" | "email" | "password",
	name: string,
	placeHolder: string,
	labelText: string
}

export type FileInputProps = Omit<TextInputProps, 'type'> & {
	accept: string
}


export type SelectionInputProps = {
	id: string,
	required?: boolean,
	label: string,
	defaultOptionLabel: string,
	options: { label: string, value: string }[],
	onSelection: (event: React.ChangeEvent<HTMLSelectElement>) => void
}


export type ModalButtonProps = {
	label: string | React.ReactNode,
	targetModalId: string
}


export type ModalProps = {
	id: string,
	title: string,
	content: string | React.ReactNode,
	withCloseBtn?: boolean,
	actionBtn?: boolean,
	actionBtnLabel?: string,
	actionBtnCallback?: () => void
}
