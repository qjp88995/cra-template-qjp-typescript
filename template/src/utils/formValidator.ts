import { RuleRender } from 'antd/lib/form';
import validator from 'validator';

export const formValidator = {
  /**
   * 验证是否是手机号
   * @param name 字段
   * @param message 错误消息
   * @returns 
   */
  mobile(name: string, message: string) {
    return {
      validator: (_: Record<string, any>, value: string) => {
        if (validator.isMobilePhone(value, ['zh-CN'])) {
          return Promise.resolve();
        }
        if (process.env.NODE_ENV === 'development') {
          console.warn(name, message);
        }
        return Promise.reject(new Error(message));
      },
    };
  },
  /**
   * 验证两个值是否相等
   * @param name 字段
   * @param withName 比较的字段
   * @param message 错误消息
   * @returns 
   */
  consistent(name: string, withName: string, message: string): RuleRender {
    return ({ getFieldValue }) => ({
      validator: (_: Record<string, any>, value: string) => {
        const withValue = getFieldValue(withName);
        if (withValue === value) {
          return Promise.resolve();
        }
        if (process.env.NODE_ENV === 'development') {
          console.warn(name, value);
          console.warn(withName, withValue);
          console.warn(message);
        }
        return Promise.reject(new Error(message));
      },
    });
  },
};
