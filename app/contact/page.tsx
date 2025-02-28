'use client'

import { EditorState } from "draft-js";
import { sendContactForm } from "../actions/contact";
import TextEditor from "../ui/commons/TextEditor/TextEditor";
import { createHtmlFromEditorState } from "../ui/commons/TextEditor/TextEditor";
import { useState } from "react";
import { ActionResponse, ContactForm } from "../actions/types";
import { Loading, SuccessAlert, ErrotAlert } from "../ui/commons/snippets";


export default function Contact() {
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());
  const [formIsSubmitted, setFormIsSubmited] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);


  function onTextEditorChange(newState: EditorState) {
    //@ts-ignore
    document.getElementsByClassName('rdw-editor-main')[0].style.border = '';
    let hiddenInput = document.getElementById('hidden-content')! as HTMLInputElement;
    hiddenInput.value = createHtmlFromEditorState(newState);
    setEditorState(newState);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    let form = document.querySelector('form')!;
    let formData = new FormData(form);
    let contactFormData: ContactForm = {
      title: formData.get('title')! as string,
      email: formData.get('email')! as string,
      content: formData.get('content') as string
    };
    if (!contactFormData.content || contactFormData.content === "<p></p>") {
      //@ts-ignore
      document.getElementsByClassName('rdw-editor-main')[0].style.border = '#445669 !important';
      return;
    }
    setFormIsSubmited(true);
    setLoading(true);
    let res = await sendContactForm(contactFormData) as ActionResponse;
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
              <label htmlFor={"title-input"} className="block required-label">Title</label>
              <input type="text" name="title" id="title-input" placeholder="Please enter your topic" required />
            </div>
            <div className="form-input-group">
              <label htmlFor={"email-input"} className="block required-label">Email</label>
              <input type="email" name="email" id="email-input" placeholder="Please enter your email" required />
            </div>
            <div className="form-input-group">
              <label htmlFor={""} className="block required-label">Message</label>
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
      {loading && <Loading />}
      {formIsSubmitted && !error && !loading &&
        <SuccessAlert
          message="Thank you for your message! We will contact you as soon as possible."
        />
      }
      {formIsSubmitted && error && !loading &&
        <ErrotAlert
          message="Sorry! Something went wrong."
        />
      }
      {formIsSubmitted && !loading &&
        <a className="btn" href={'/contact'}>New message</a>
      }
    </div>
  );
}
