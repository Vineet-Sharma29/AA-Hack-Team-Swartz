import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        welcomeMsg: 'Fasttrack user onboarding on AA',
        subHeading: 'Verified Agent Portal',
        email: 'email',
        password: 'password',
        login: 'login',
    },
    'hi': {
        welcomeMsg: 'AA पर उपयोगकर्ता ऑनबोर्डिन!',
        subHeading: 'सत्यापित एजेंट पोर्टल',
        email: 'ईमेल',
        password: 'कुंजिका',
        login: 'लॉग इन करें'
    }
};

export const i18n = new VueI18n({
    locale: 'hi', // set locale    
    fallbackLocale: 'en', // set fallback locale    
    messages, // set locale messages
});
