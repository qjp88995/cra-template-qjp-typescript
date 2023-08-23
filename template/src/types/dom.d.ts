declare interface CustomEventMap {
  [key: string]: CustomEvent;
}

declare interface Window {
  addEventListener<K extends keyof CustomEventMap>(
    type: K,
    listener: (this: Window, ev: CustomEventMap[K]) => void
  ): void;

  removeEventListener<K extends keyof CustomEventMap>(
    type: K,
    listener: (this: Window, ev: CustomEventMap[K]) => void
  ): void;
}
