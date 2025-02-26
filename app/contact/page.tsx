import { sendContactForm } from "../actions/contact";


export default function Contact() {
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
            <label htmlFor="content-input" className="block">Content</label>
            <textarea name="content" id="content-input" placeholder="Please describe your query" />
          </div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}
