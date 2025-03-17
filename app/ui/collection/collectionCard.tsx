import { Collection } from "@/app/api/actions/types";
import { TrashIcon } from "../commons/icons";
import './styles.css';


type CmpProps = {
  collection: Collection
}

export default function CollectionCard(props: CmpProps) {
  return (
    <div className="collection-card" key={props.collection.id}>
      <TrashIcon />
      <p className="header-4" key={"collection-title"}>{props.collection.label}</p>
      <p key={"collection-id"}>{props.collection.id}</p>
      <p key={"collection-desc"} dangerouslySetInnerHTML={{ __html: props.collection.description }}></p>
      <p key={"collection-terminologies"}>{props.collection.terminologies.join(", ")}</p>
    </div>
  );
}
