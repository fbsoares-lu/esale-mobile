import { useEffect, useState } from "react";

interface UseDebounceProps {
    value: string | undefined;
    delay: number
}

export function useDebounce({ value, delay }: UseDebounceProps) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay)

        return () => {
            clearTimeout(timer);
        }
    }, [value, delay])

  return debouncedValue;
}
