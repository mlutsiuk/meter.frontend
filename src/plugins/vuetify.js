import Cookies from 'js-cookie';
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import uk from 'vuetify/lib/locale/uk';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: Cookies.get('theme') === 'dark',
        options: {
            customProperties: true
        },
        themes: {
            light: {
                primary: '#007BFF',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107'
            },
            dark: {
                secondary: colors.grey.lighten1
            }
        }
    },
    lang: {
        locales: { uk },
        current: 'uk'
    }
});
