
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import EmailTemplate from '../ui/email/template';


type InputProps = {
  subject: string,
  html?: string,
  file?: File,
  senderEmail: string

}


type EmailMessage = {
  from?: string,
  to?: string,
  subject: string,
  html: string,
  attachments?: {
    filename: string,
    content: any,
    encoding: string
  }[]
}


export async function sendEmail(props: InputProps): Promise<Boolean> {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST_NAME,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  } as SMTPTransport.Options);


  try {
    const smtpServerVerfied = await transporter.verify();
    console.log(smtpServerVerfied)
  } catch (error) {
    return false;
  }

  const message: EmailMessage = {
    from: process.env.SERVICE_EMAIL,
    to: process.env.CONTACT_RECV_EMAIL,
    subject: props.subject,
    html: EmailTemplate({ title: props.subject, content: props.html ?? "", senderEmail: props.senderEmail })
  };

  if (props.file) {
    const fileBuffer = await props.file.arrayBuffer()!;
    const buffer = new Uint8Array(fileBuffer) as Buffer;
    message['attachments'] = [
      {
        filename: props.file.name,
        content: buffer,
        encoding: 'base64'
      },
    ]
  }

  const info = await transporter.sendMail(message);
  if (info.accepted.length > 0) {
    return true;
  }
  return false;
}
