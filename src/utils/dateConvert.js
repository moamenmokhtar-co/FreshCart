export default function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}

// Example usage
// const dateStr = "2024-08-28T21:04:08.172Z";
// console.log(formatDate(dateStr)); // Output: August 28, 2024
