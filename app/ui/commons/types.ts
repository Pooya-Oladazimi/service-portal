import { EditorState } from "draft-js"

export type TextEditorProps = {
	editorState: any,
	textChangeHandlerFunction: (newState: EditorState) => void,
	wrapperClassName: string,
	editorClassName: string,
	placeholder: string,
	wrapperId: string,
	textSizeOptions: any

}
