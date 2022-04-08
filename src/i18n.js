const lng = "en";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          Welcome: "Welcome to React",
        },
      },
      zh: {
        translation: {
          Welcome: "欢迎进入react",
        },
      },
    },
    lng: lng,
    fallbackLng: lng,
    interpolation: {
      escapeValue: false,
    },
  });
