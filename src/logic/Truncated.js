export default function TruncatedText(text, wordCount) {
    if (!text) {
        return '';
    }
    const truncatedText = text.split(' ').slice(0, wordCount).join(' ');
    return truncatedText + '...';

};