import { TextInputProps, FileInputProps, SelectionInputProps } from "./types";


export function TextInput(props: TextInputProps) {
  return (
    <div className="form-input-group">
      <label htmlFor={props.id} className={"block " + (props.required ? "required-label" : "")} key={"label"}>{props.labelText}</label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeHolder}
        required={props.required}
        key={"input"}
      />
    </div>
  );

}


export function FileInput(props: FileInputProps) {
  return (
    <div className="form-input-group">
      <label htmlFor={props.id} className={"block " + (props.required ? "required-label" : "")} key={"label"} dangerouslySetInnerHTML={{ __html: props.labelText }}></label>
      <input
        type="file"
        className="file-input"
        name={props.name}
        id={props.id}
        placeholder={props.placeHolder}
        required={props.required}
        key={"input"}
        accept={props.accept}
      />
    </div>
  );

}


export function SelectionInput(props: SelectionInputProps) {
  return (
    <div>
      <label htmlFor={props.id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" key={"label"}>{props.label}</label>
      <select id={props.id} defaultValue={""} onChange={props.onSelection} key={"input"}>
        <option value={""} key={"defaultValue"}>{props.defaultOptionLabel}</option>
        {props.options.map((stat) => {
          return (
            <option value={stat.value} key={stat.label}>{stat.label}</option>
          )
        })}
      </select>
    </div>
  );

}


export function Loading() {
  return (
    <>
      <div role="status" className="text-center">
        <svg aria-hidden="true" className="inline w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-[#445669]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>

    </>
  );
}


export function SuccessAlert(props: { message: string }) {
  return (
    <div className="text-center font-bold p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
      {props.message}
    </div>
  );
}


export function ErrorAlert(props: { message: string }) {
  return (
    <div className="text-center font-bold p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {props.message}
    </div>
  );
}

export function InfoAlert(props: { title: string, body: string }) {
  return (
    <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mb-4" role="alert">
      <div className="flex">
        <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
        <div>
          <p className="font-bold">{props.title}</p>
          <p dangerouslySetInnerHTML={{ __html: props.body }} className="text-sm"></p>
        </div>
      </div>
    </div>
  );
}
