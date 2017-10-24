export const THIRTY_MINUTES_IN_MS = 30 * 60 * 1000;
export const SIXTY_MINUTES_IN_MS = 2 * THIRTY_MINUTES_IN_MS;
export const ONE_HUNDRED_TWENTY_MINUTES_IN_MS = 4 * THIRTY_MINUTES_IN_MS;

export default class TimeUtils {
    static getTimeInMinFromMs(timeInMs) {
        return timeInMs / (1000 * 60)
    }
}