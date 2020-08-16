import { useEffect, useRef, useState } from 'react';
import { Target } from './dom';

export const useEventListener = (
  eventName: keyof HTMLElementEventMap,
  handler: EventListener,
  target: Target = window
): void => {
  const savedHandler = useRef<EventListener>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = target && target.addEventListener;
    if (!isSupported) return;

    const eventListener = (event: Event): void =>
      savedHandler.current && savedHandler.current(event);
    target.addEventListener(eventName, eventListener);
    return (): void => {
      target.removeEventListener(eventName, eventListener);
    };
  }, [eventName, target]);
};

export const useClickOutside = (target: HTMLElement, handler: Function): void => {
  useEffect(() => {
    const listener = (event: MouseEvent): void => {
      if (!target || target.contains(event.target as HTMLElement)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('click', listener);
    return (): void => {
      document.removeEventListener('click', listener);
    };
  }, [target, handler]);
};

export function useDebounce<T>(value: T, delay = 300): [T] {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return (): void => {
      window.clearTimeout(handler);
    };
  }, [value, delay]);

  return [debouncedValue];
}

/**
 * Use a local ref and also support an external ref by using React.forwardRef.
 * @param refs 
 */
export function useMergeRefs<T = any>(...refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}