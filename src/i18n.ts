// from https://react.i18next.com/guides/quick-start
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      aboutMe: {
        "title": "About Me",
        "greetings": "hi! I'm <1>Sunny Pun</1>, a <br/><3>Passionate Programmer</3><br/> who also cares about <br/><5>Design & Product</5>, for the sake of <7>next generations</7>."
      },
      experience: {
        "title": "Experience",
      },
      nonWork: {
        "title": "Non-Work",
      },
      gears: {
        "title": "Gears",
      },
      lifeGoals: {
        "title": "Life Goals",
      }
    }
  },
  zh: {
    translation: {
      aboutMe: {
        "greetings": "哈囉！"
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
