// Exporting a simple utility function
export function formatDate(date) {
  return date.toISOString().substring(0, 10); //YYYY-MM-DD
}
