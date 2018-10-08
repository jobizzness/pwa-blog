
export const PostBehavior = (base) => class extends base{
    _formatDate(date) {
        if(!date) return;
        return date.substring(-1, 17);
    }
    _formatURL(link) {
        if (!link) return;
        return link.replace("https://blogs.oracle.com", "/post");
    }
    _formatAuthor(article) {
        if(!article) return;
        return article['dc:creator'] && article['dc:creator']._text
    }
} 