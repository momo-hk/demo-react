/**
 * @Module Define all Student Search form normalizer
 */

/**
 * Restrict user to input number only. Any non-numeric character is ignored.
 * @param {string} value - value from input text box
 */
export const normalizeNumber = value => {
  value = value.replace(/[^0-9]/g, "");
  return value;
};
