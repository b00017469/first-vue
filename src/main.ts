import { createApp } from 'vue'
import App from './App.vue'
import components from './common/UI'

const app = createApp(App)
console.log(app)
components.forEach(component => {
    app.component(component.name, component)
})
console.log(app)
app.mount('#app')
