'use client'

import { EditorState } from "draft-js";
import { sendContactForm } from "../actions/contact";
import TextEditor from "../ui/commons/TextEditor/TextEditor";
import { createHtmlFromEditorState } from "../ui/commons/TextEditor/TextEditor";
import { useState } from "react";
import { ActionResponse } from "../actions/types";


export default function Contact() {
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());
  const [formIsSubmitted, setFormIsSubmited] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);


  function onTextEditorChange(newState: EditorState) {
    let hiddenInput = document.getElementById('hidden-content')! as HTMLInputElement;
    hiddenInput.value = createHtmlFromEditorState(newState);
    setEditorState(newState);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setFormIsSubmited(true);
    setLoading(true);
    const form = document.querySelector('form')!;
    let formData = new FormData(form);
    let res = await sendContactForm(formData) as ActionResponse;
    if (!res.status) {
      setError(true);
    }
    setLoading(false);
  }

  return (
    <div className="md:col-span-2">
      <p className="header-1">Contact us</p>
      {!formIsSubmitted &&
        <form onSubmit={submit}>
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
            <input type="hidden" name="content" id="hidden-content" />
            <div className="text-center">
              <button type="submit" className="btn">Submit</button>
            </div>
          </div>
        </form>
      }
      {loading &&
        <div role="status" className="text-center">
          <svg aria-hidden="true" className="inline w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-[#445669]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      }
      {formIsSubmitted && !error && !loading &&
        <div className="text-center font-bold p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
          Thank you for your message! We will contact you as soon as possible.
        </div>
      }
      {formIsSubmitted && error &&
        <div className="text-center font-bold p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          Sorry! Something went wrong.
        </div>
      }
    </div>
  );
}
