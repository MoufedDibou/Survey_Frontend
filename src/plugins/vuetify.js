// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light: {
        anchor: '#ffffff', // defaults to 'primary', overrided to another color
      },
    },
  },
}
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)
