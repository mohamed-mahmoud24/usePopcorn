import { useEffect, useState } from "react";

export function useLocalStorage(initialState, key) {
    const [value, setValue] = useState(function () {
        const stoeredValue = localStorage.getItem(key);
        return stoeredValue ? JSON.parse(stoeredValue) : initialState;
    });
    useEffect(
        function () {
            localStorage.setItem(key, JSON.stringify(value));
        },
        [value, key]
    );
    return [value, setValue];
}
