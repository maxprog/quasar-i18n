import VueI18n from 'vue-i18n'
import messages from 'src/i18n'

export default ({ app, Vue }) => {
  Vue.use(VueI18n)

  // Set i18n instance on app
  app.i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages
  })


   
  

  Vue.prototype.$locale = {
    change (language) {
      app.i18n.locale = language;
    },
    getLocale () {
      return app.i18n.locale;
    }
  };
  
}
