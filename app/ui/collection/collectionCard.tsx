'use client'

import { Collection } from "@/app/api/actions/types";
import { TrashIcon } from "../commons/icons";
import { ModalButton, Modal } from "../commons/modal";
import { WarningAlert } from "../commons/snippets";
import './styles.css';


type CmpProps = {
  collection: Collection
}

export default function CollectionCard(props: CmpProps) {
  return (
    <div className="collection-card" key={props.collection.id}>
      <div className="grid grid-cols-10" key={"collection-card-header"}>
        <p className="header-4 col-span-9" key={"collection-title"}>{props.collection.label}</p>
        <div className="col-span-1" key={"trash-icon"}>
          <ModalButton label={<TrashIcon />} targetModalId={"delete-collection-conf-" + props.collection.id} />
          <Modal
            id={"delete-collection-conf-" + props.collection.id}
            title={"Delete Collection: " + props.collection.label}
            content={<WarningAlert message="Are you sure about deleting this collection? This action is irreversible!" />}
            actionBtn
            actionBtnLabel="Yes, I am sure"
            actionBtnCallback={() => { }}
          />

        </div>
      </div>
      <p key={"collection-id"}>{props.collection.id}</p>
      <p key={"collection-desc"} dangerouslySetInnerHTML={{ __html: props.collection.description }}></p>
      <p key={"collection-terminologies"}><b>Terminologies:</b> {props.collection.terminologies.join(", ")}</p>
    </div>
  );
}
