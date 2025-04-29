import { DateTime } from "luxon";

export default function(eleventyConfig) {
    eleventyConfig.addFilter('formatDate', (date) => DateTime.fromISO(date, { setZone: true }).setLocale("en").toFormat("d LLLL yyyy"));
}

