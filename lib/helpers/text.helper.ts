export function removeInlineElements(content: string): string {
    return content.replace(/\r?\n|\r/g, ' ');
}

export function stripHtmlTags(text: string): string {
    return text.replace(/<\/?[^>]+(>|$)/g, '');
}
