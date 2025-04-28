import { I18nPlugin } from "@11ty/eleventy";
import { VentoPlugin } from 'eleventy-plugin-vento';

import filters from "./src/_config/filters.js";

export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/assets/");

    // eleventyConfig.addPlugin(I18nPlugin, {
    //     defaultLanguage: "en",
    // });
    eleventyConfig.addPlugin(VentoPlugin, {
        autotrim: true,
    });

    eleventyConfig.addFilter('formatDate', filters.formatDate);

    return {
        markdownTemplateEngine: "vto",
        htmlTemplateEngine: "vto",
        dir: {
            input: "src"
        }
    };
};
