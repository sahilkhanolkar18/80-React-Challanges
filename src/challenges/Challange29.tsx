import { useContext, useState, createContext } from "react";

const translations = {
  en: {
    hello: "Hello!",
    welcome: "Welcome to our app!",
  },
  es: {
    hello: "¡Hola!",
    welcome: "¡Bienvenido a nuestra aplicación!",
  },
  fr: {
    hello: "Bonjour !",
    welcome: "Bienvenue dans notre application !",
  },
  de: {
    hello: "Hallo!",
    welcome: "Willkommen in unserer App!",
  },
};

const languageContext = createContext({
  language: "en",
  changeLanguage: () => {},
  translation: (key: any) => key,
});

const LanguageProvider = ({ children }: any) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (newLanguage: any) => {
    setLanguage(newLanguage);
  };

  const translation = (key: any) => {
    //@ts-ignore
    return translations[language]?.[key] || key;
  };

  return (
    //@ts-ignore
    <languageContext.Provider value={{ language, changeLanguage, translation }}>
      {children}
    </languageContext.Provider>
  );
};

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useContext(languageContext);

  return (
    <div>
      <select
        value={language}
        //@ts-ignore
        onChange={(e: any) => changeLanguage(e.target.value)}
        className="px-2 py-1 bg-[black] rounded-sm w-[90px] mt-1 mb-2 text-[orange] border border-[orange] text-sm"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  );
};

const Greeting = () => {
  const { translation } = useContext(languageContext);

  return (
    <div className="text-[white]">
      <h1 className="text-[22px] font-semibold">{translation("hello")}</h1>
      <p className="text-md">{translation("welcome")}</p>
    </div>
  );
};

const Challange29 = () => {
  return (
    <LanguageProvider>
      <div className="h-full flex flex-col gap-1 justify-center items-center ">
        <div className="w-[250px] ">
          <LanguageSwitcher />
          <Greeting />
        </div>
      </div>
    </LanguageProvider>
  );
};

export default Challange29;
