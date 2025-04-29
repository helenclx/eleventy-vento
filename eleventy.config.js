import { I18nPlugin } from "@11ty/eleventy";
import { VentoPlugin } from 'eleventy-plugin-vento';

import filtersConfig from "./src/_config/filters.js";

export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/assets/");

    eleventyConfig.addPlugin(filtersConfig);

    // eleventyConfig.addPlugin(I18nPlugin, {
    //     defaultLanguage: "en",
    // });
    eleventyConfig.addPlugin(VentoPlugin, {
        autotrim: true,
    });

    return {
        markdownTemplateEngine: "vto",
        htmlTemplateEngine: "vto",
        dir: {
            input: "src"
        }
    };
};
