
export async function captchaIsValid(captchaValue: string): Promise<boolean> {
  try {
    let captchaCall = await fetch(process.env.CAPTCHA_VALIDATION_URL as string, {
      method: 'POST',
      headers: { 'X-API-Key': process.env.CAPTCHA_API_KEY as string, 'Content-Type': 'application/json' },
      body: JSON.stringify({ response: captchaValue, sitekey: process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY })
    });

    if (captchaCall.status !== 200) {
      return false;
    }

    let captchaValidation = await captchaCall.json();
    return captchaValidation?.success as boolean;
  } catch {
    return false;
  }
}
