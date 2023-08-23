export const formNormalize = {
  /**
   * 去除非数字字符
   */
  numeric(str: string) {
    return str.replace(/\D/g, '');
  },

  /**
   * 去除数字字符
   */
  nonnumeric(str: string) {
    return str.replace(/\d/g, '');
  },

  /**
   * 去除空白字符
   */
  nonempty(str: string) {
    return str.replace(/\s/g, '');
  },

  /**
   * 去除前后空格
   */
  trim(str: string) {
    return str.trim();
  },
};
