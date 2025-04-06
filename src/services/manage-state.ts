interface UseStateProps {
    key: string,
    value: string,
}

interface GetStateProps {
    key: string,
}

const state: any = {};

const useState = (props: UseStateProps) => {
    const propsKey = props.key;
    state[propsKey] = props.value;

    return state;
}

const getState = (props: GetStateProps) => {
    const key = props.key;
    if (state[key]) return state[key];
}

export { useState, getState };