

export const changeRoute = (path, navigate) => {
    navigate(path)
}

export function truncatedText(text, wordCount) {
    if (!text) {
        return '';
    }
    const truncatedText = text.split(' ').slice(0, wordCount).join(' ');
    return truncatedText + '...';

};