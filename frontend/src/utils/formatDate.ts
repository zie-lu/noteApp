export function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleString("pl-PL", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    });
}