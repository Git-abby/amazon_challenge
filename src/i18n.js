import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        searchPlaceHolder: "Search Amazone.ca",
        hello: "Hello",
        signOut: "Sign Out",
        signIn: "Sign In",
        guest: "Guest",
        returns: "Returns",
        orders: "Orders",
        your: "Your",
        prime: "Prime",
        TheLeanStartup:
          "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
        Kenwood:
          "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
        KPSPET_SmartWatch:
          "KOSPET Smart Watch - Smart Sleep Tracking Huge Battery (Call Receive/Dial) 5ATM Waterproof Outdoor Rugged Watch Tracker for iPhone Android with 70 Sports Modes - 1.85",
        AmazoneEcho:
          "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
        AppleiPad:
          "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
        SamsungMonitor:
          "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
        YOurShippingBasket: "Your Sopping Basket",
        EmptyBasket: "Your basket is empty.",
        subtotal: "Subtotal",
        gift: "This order contains a gift",
        proceedCheckout: "Proceed to checkout",
        checkout: "Checkout",
        items: "Items",
      },
    },
    ar: {
      translation: {
        searchPlaceHolder: "ابحث عن Amazone.ca",
        hello: "مرحبا",
        signOut: "تسجيل الخروج",
        signIn: "تسجيل الدخول",
        guest: "ضيف",
        returns: "ارجاع",
        orders: "اوامر",
        your: "الخاص بك",
        prime: "مقتبل",
        TheLeanStartup:
          "بدء التشغيل الهزيل: كيف يخلق الابتكار المستمر أعمالا ناجحة بشكل جذري غلاف عادي",
        Kenwood:
          "كينوود ،خلاطة كي ميكس للخبز ، خلاط مطبخ أنيق مع مضرب على شكل حرف K ، خطاف عجين ومضرب ، وعاء زجاجي سعة 5 لتر",
        KPSPET_SmartWatch:
          "KOSPET ساعة ذكية - تتبع النوم الذكي بطارية ضخمة (تلقي المكالمات / الاتصال) 5ATM للماء في الهواء الطلق وعرة ووتش المقتفي لفون الروبوت مع 70 وضعا رياضيا - 1.85",
        AmazoneEcho:
          "الأمازون صدى (الجيل 3) | مكبر صوت ذكي مع Alexa ، قماش فحمي",
        AppleiPad:
          "ابل ايباد برو الجديد (12.9 بوصة، واي فاي، 128 جيجابايت) - فضي (الجيل الرابع)",
        SamsungMonitor:
          "ابل ايباد برو الجديد (12.9 بوصة، واي فاي، 128 جيجابايت) - فضي (الجيل الرابع)",
        YOurShippingBasket: "سلة الاستغاثة الخاصة بك",
        EmptyBasket: "سلتك فارغة.",
        subtotal: "المجموع الفرعي",
        gift: "يحتوي هذا الطلب على هدية",
        proceedCheckout: "انتقل إلى الخروج",
        checkout: "",
      },
    },
    es: {
      translation: {
        hello: "Inicio",
        title: "Aplicación en varios idiomas",
        label: "Selecciona otro lenguaje!",
        about: "Sobre mí",
      },
    },
    it: {
      translation: {
        hello: "Casa",
        title: "Applicazione multilingue",
        label: "Selezionare un'altra lingua ",
        about: "Su di me",
      },
    },
  },
});

export default i18n;
