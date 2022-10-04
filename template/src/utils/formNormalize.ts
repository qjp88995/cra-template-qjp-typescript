export const formNormalize = {
  /**
   * 去除非数字字符
   * @param str 字符串
   * @returns 
   */
  numeric(str: string) {
    return str.replace(/\D/g, '');
  },
  /**
   * 去除数字字符
   * @param str 字符串
   * @returns 
   */
  nonnumeric(str: string) {
    return str.replace(/\d/g, '');
  },
  /**
   * 去除空白字符
   * @param str 字符串
   * @returns 
   */
  nonempty(str: string) {
    return str.replace(/\s/g, '');
  },
  /**
   * 去除前后空格
   * @param str 
   * @returns 
   */
  trim(str: string) {
    return str.trim();
  },
};
