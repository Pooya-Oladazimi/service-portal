
export function getCurrentDate(date: string = ""): string {
  /**
   * Return current data. if an input is provided, it convert the given date to a human readable format.
   * */
  let time = new Date();
  if (date) {
    time = new Date(date);
  }
  const day = String(time.getDate()).padStart(2, "0");
  const month = String(time.getMonth() + 1).padStart(2, "0");
  const year = time.getFullYear();
  const now = `${year}-${month}-${day}`;
  return now;
}


