'use client'

import { TextInput } from "@/app/ui/commons/snippets";
import TextEditor from "@/app/ui/commons/TextEditor/TextEditor";
import AutoCompleteTSS from "@/app/ui/widgets/autocomplete";
import { LeftArrowIcon } from "@/app/ui/commons/icons";


export default function NewCollection() {
  return (
    <div className="md:col-span-2 content-panel">
      <a className="btn" href="/collection/myCollections/" key={"back-btn"}><LeftArrowIcon />Collection list</a>
      <p className="header-2" key={"heading"}>Define your new collection</p>
      <form key={"collection-form"} className="mt-10">
        <TextInput
          id="collection-title"
          name="collection-title"
          type="text"
          labelText="Collection Title"
          placeHolder="please add the collection title ..."
          key={"collection-title"}
          required
        />
        <div className="form-input-group" key={"terminology-list"}>
          <AutoCompleteTSS
            setSelectedTerm={() => { }}
            label="Terminologies"
            className="autocomplete-in-form"
            placeholder="Choose your terminologies ..."
            required
          />
        </div>
        <TextEditor
          key={"collection-desc"}
          required
          labelText="Description"
          name="collection-decs"
          placeholder="please add a description for your collection ..."
          textSizeOptions={['Normal', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code']}
          wrapperId=""
        />
        <div className="text-center" key={"submit-btn"}>
          <button type="submit" className="btn">Create</button>
        </div>
      </form>
    </div>
  );
}
