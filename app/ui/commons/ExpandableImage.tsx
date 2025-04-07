
import Image from "next/image";
import { Modal, ModalButton } from "./modal";
import { ExpandIcon } from "./icons";


type CmpProps = {
  imagePath: string,
  altText: string
  width: number,
  height: number
}

export default function ExpandableImage(props: CmpProps) {
  return (
    <>
      <div className="w-full text-center" key={'image'}>
        <Image src={props.imagePath} width={props.width} height={props.height} alt={props.altText} className="mx-auto"></Image>
        <ModalButton key={"image-big"} label={<ExpandIcon />} targetModalId="image-expand" classNames="!p-1 !mx-auto" />
        <Modal
          key={"image-modal"}
          id="image-expand"
          title=""
          content={<Image src={props.imagePath} width={1500} height={1500} alt={props.altText} className="mx-auto" />}
          imageExpandModal
        />
      </div>
    </>
  );
}
