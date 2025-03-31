
export function getCurrentDate(): string {
  const time = new Date()
  const day = String(time.getDate()).padStart(2, "0");
  const month = String(time.getMonth() + 1).padStart(2, "0");
  const year = time.getFullYear();
  const now = `${year}-${month}-${day}`;
  return now;
}


