type Callback = (newValue: any) => void;

const state: any = {};
const subscribers: Record<string, Callback[]> = {}

const useState = (key: string, value: any) => {
    state[key] = value;

    /**
     * Notify all the subscribers about the state update
     */
    if (subscribers[key]) {
        subscribers[key].map(fn => fn(value));
    }

    return state[key];
}

const getState = (key: string, fn?: Callback) => {

    if (fn) {

        /**
         * If the current key is not subscribed for updates
         * create an empty array for it to store the callback
         */
        if (!subscribers[key]) {
            subscribers[key] = [];
        }

        /**
         * Store the callback mapped to the key
         */
        subscribers[key].push(fn);
    }

    return state[key] ?? null;
}

export { useState, getState };