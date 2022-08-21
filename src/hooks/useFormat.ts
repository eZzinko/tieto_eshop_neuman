/**
 * Hook that return formatters
 */
export const useFormat = () => {
  // czech localization
  const CZ_LOCALIZATION = "cs-cz";

  /**
   * format number style
   * @param {number} value
   * @param {string} locale
   * @param {Intl.NumberFormatOptions} settings
   * @return {string}
   */
  const formatNumber = (
    value: number,
    settings?: Intl.NumberFormatOptions,
    locale?: string
  ) =>
    Intl.NumberFormat(locale ?? CZ_LOCALIZATION, { ...settings }).format(value);

  /**
   * format price style
   * @param {number} value
   * @param {string} locale
   * @param {Intl.NumberFormatOptions} settings
   * @return {string}
   */
  const formatPrice = (
    value: number,
    settings?: Intl.NumberFormatOptions,
    locale?: string
  ) =>
    Intl.NumberFormat(locale ?? CZ_LOCALIZATION, {
      style: "currency",
      currency: "CZK",
      ...settings,
    }).format(value);

  return {
    number: formatNumber,
    price: formatPrice,
  };
};
