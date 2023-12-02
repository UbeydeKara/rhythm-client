export const beautifyURL = (url: string) => url
    .replace(/\s/g, "-")
    .replace(/-+/g, "-")
    .replace(/[^a-å0-9-]/gi, "")
    .toLowerCase();