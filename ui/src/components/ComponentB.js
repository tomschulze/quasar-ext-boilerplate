import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'MyComponent2',

  setup () {
    return () => h(QBadge, {
      class: 'MyComponent2',
      label: 'MyComponent2'
    })
  }
}
