<template>
  <q-select

    stack-label="I18n"
    :options="[
     { label: 'English (US)', value: 'en-us' },
      { label: 'English (UK)', value: 'en-uk' },
      { label: 'Polish',     value: 'pl' },
      { label: 'Deutsche',     value: 'de' }
      
    ]"
    v-model="lang"
  />
 
</template>

<script>
import { QSelect } from 'quasar'

export default {
 name: 'Language',
 components: {QSelect},  
  data () {
    return {
      lang: this.$q.i18n.lang
    }
  },
  methods:
  {
    setLocale(lang){
            this.$locale.change(lang);
            lang = snakeToCamel(lang); 
              
               /*
      import(`quasar-framework/i18n/${lang}`).then(lang => {
  
        this.$q.i18n.set(lang.default)
     
      });
*/
              import(`src/i18n/${lang}`).then(lang => {
              
                this.$q.i18n.set(lang.default)
        
                console.log(this.$locale.getLocale(),this.$t('success'));
              })
    }
  },
  mounted(){
  
   this.setLocale(this.lang);
  },
  watch: {
    lang (lang) {
           this.setLocale(this.lang); 
    }
  }
}
function snakeToCamel (str) {
  return str.replace(/(-\w)/g, m => { return m[1].toUpperCase() })
}
</script>