export function formatDate(dateString: string) {
  // Create a new Date object from the input string
  const date = new Date(dateString);

  // Create an options object for formatting
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Use toLocaleDateString to format the date
  return date.toLocaleDateString("en-US", options);
}
