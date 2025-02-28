'use client'

import { EditorState } from "draft-js";
import { sendContactForm } from "../actions/contact";
import TextEditor from "../ui/commons/TextEditor/TextEditor";
import { useState } from "react";


export default function Contact() {
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());

  function onTextEditorChange(newState: EditorState) {
    setEditorState(newState);
  }

  return (
    <div className="md:col-span-2">
      <p className="header-1">Contact us</p>
      <p>
        Feel free to contact us at
        <a href="ts4nfdi@lists.nfdi.de">ts4nfdi@lists.nfdi.de</a>
      </p>
      <form action={sendContactForm}>
        <div className="grid grid-rows-1 form">
          <div className="form-input-group">
            <label htmlFor={"title-input"} className="block">Title</label>
            <input type="text" name="title" id="title-input" placeholder="Please enter your topic" />
          </div>
          <div className="form-input-group">
            <TextEditor
              editorState={editorState}
              textChangeHandlerFunction={onTextEditorChange}
              wrapperClassName="contact-text-editor-wrapper"
              editorClassName="contact-text-editor"
              placeholder="Please describe your query..."
              wrapperId=""
              textSizeOptions={['Normal', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code']}
            />
          </div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}
