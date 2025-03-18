import { ModalButtonProps, ModalProps } from "./types";

export function ModalButton(props: ModalButtonProps) {
  return (
    <button
      onClick={() => {
        let modal = (document.getElementById(props.targetModalId)! as HTMLDivElement);
        modal.classList.remove("hidden");
        document.body.style.overflow = 'hidden';
        (modal.previousSibling as HTMLDivElement).classList.remove("hidden");

      }}
      className="btn !bg-transparent !p-0 !float-end"
      type="button"
    >
      {props.label}
    </button>
  );
}



export function Modal(props: ModalProps) {
  return (
    <>
      <div className="modal-bg hidden" key={"modal-bg"}></div>
      <div id={props.id} tabIndex={-1} aria-hidden="true" data-modal-backdrop="static" className="hidden overflow-y-auto overflow-x-hidden fixed top-1/4 lg:right-1/3 right-1/4 z-50 justify-center items-center" key={"modal"}>
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200" key={"modal-header"}>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{props.title}</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide={props.id}
                onClick={() => {
                  let modal = (document.getElementById(props.id)! as HTMLDivElement);
                  modal.classList.add("hidden");
                  document.body.style.overflow = '';
                  (modal.previousSibling as HTMLDivElement).classList.add("hidden");
                }}
              >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4" key={"modal-body"}>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
              </p>
            </div>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600" key={"modal-footer"}>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
