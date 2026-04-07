import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
    locale = routing.defaultLocale;
  }

  const [common, header, footer] = await Promise.all([
    import(`../../messages/${locale}/common.json`),
    import(`../../messages/${locale}/header.json`),
    import(`../../messages/${locale}/footer.json`),
  ]);

  return {
    locale,
    messages: {
      ...common.default,
      header: header.default,
      footer: footer.default,
    },
  };
});
