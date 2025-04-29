export default function (eleventyConfig) {
    eleventyConfig.addPairedShortcode("container", (content, el, className="", id="") => {
        const elClass = className ? ` class="${className}"` : '';
        const elId = id ? ` id="${id}"` : '';
        return `<${el}${elId}${elClass}>${content}</${el}>`;
    });
}
