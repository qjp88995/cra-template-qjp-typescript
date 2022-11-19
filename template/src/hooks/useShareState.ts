import { useCallback, useEffect, useState } from "react";

/**
 * 获取共享状态事件名称
 */
export const getShareStateEventName = (key: string) => {
  return ('sharestate' + key + 'change').toLowerCase();
};

/**
 * 获取共享状态存储名称
 */
export const getShareStateStoreName = (key: string) => {
  return ('share_state_store_' + key).toUpperCase();
};

/**
 * 获取共享状态值
 */
 export const getShareStateValue = <T = any>(key: string): T | null => {
  const value = localStorage.getItem(getShareStateStoreName(key));
  return value && JSON.parse(value);
};

/**
 * 设置共享状态值
 */
export const setShareStateValue = <T = any>(key: string, value: T) => {
  if (!value) localStorage.removeItem(getShareStateStoreName(key));
  localStorage.setItem(getShareStateStoreName(key), JSON.stringify(value));
  const event = new CustomEvent(getShareStateEventName(key), {
    detail: value,
  });
  window.dispatchEvent(event);
};

/**
 * 全局跨页面共享状态
 */
export const useShareState = <T = any>(key: string): [T | null, (value: T | null) => void] => {
  const [data, setData] = useState(getShareStateValue<T>(key));

  // key变化时修改data
  useEffect(() => {
    setData(getShareStateValue<T>(key));
  }, [key]);

  // 自定义事件监听
  useEffect(() => {
    const onChange = (e: CustomEvent<T>) => {
      setData(e.detail);
    };
    window.addEventListener(getShareStateEventName(key), onChange);
    return () => {
      window.removeEventListener(getShareStateEventName(key), onChange);
    };
  }, [key]);

  // storage事件监听
  useEffect(() => {
    const onChange = (e: StorageEvent) => {
      if (e.key === getShareStateStoreName(key)) {
        setData(e.newValue && JSON.parse(e.newValue));
      }
    };
    window.addEventListener('storage', onChange);
    return () => {
      window.removeEventListener('storage', onChange);
    };
  }, [key]);

  const setValue = useCallback((value: T | null) => {
    setShareStateValue(key, value);
  }, [key]);

  return [data, setValue];
};
