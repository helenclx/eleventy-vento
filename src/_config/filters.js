import { DateTime } from "luxon";

export const formatDate = (date) => DateTime.fromISO(date, { setZone: true }).setLocale("en").toFormat("d LLLL yyyy");

export default {
    formatDate,
};
