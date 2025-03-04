

type CmpProps = {
  senderEmail: string,
  content: string,
  title: string

}

export default function EmailTemplate(props: CmpProps): string {
  return (
    `<div className="grid grid-rows-1">
      <h3>${props.title}</h3>
      <b>from</b>: ${props.senderEmail}
      <p>${props.content}</p>
    </div>`
  );
}
