/**
 * @Module Define All Student Search Form validators
 */

/**
 * If text is input, only allow chinese characters
 * @param {string} value - value from input text box
 */
export const validateChineseChars = value => {
  if (value) {
    let regex = /[^\u2E80-\u2FD5\u3400-\u4DBF\u4E00-\u9FCC]/g;
    if (regex.test(value)) {
      return "Only allow Chinese characters";
    }
  }
  return undefined;
};

/**
 * If text is input, only allow english characters
 * @param {string} value - value from input text box
 */
export const validateEnglishChars = value => {
  if (value) {
    let regex = /[^a-zA-Z\u0020]/g;
    if (regex.test(value)) {
      return "Only allow English characters";
    }
  }
  return undefined;
};
