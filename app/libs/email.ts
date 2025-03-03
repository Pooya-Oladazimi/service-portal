
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';


type InputProps = {
  subject: string,
  html?: string

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
    const isVerified = await transporter.verify();
    console.log(isVerified)
  } catch (error) {
    return false;
  }
  const info = await transporter.sendMail({
    from: process.env.SERVICE_EMAIL,
    to: process.env.CONTACT_RECV_EMAIL,
    subject: props.subject,
    html: props.html ?? "",
  });
  if (info.accepted.length > 0) {
    return true;
  }
  return false;
}
