import Vue from 'vue'

/**
 * System.js creates the Design System Library.
 * It’s used in the system itself and when exporting it.
 *
 * You should & can add your own dependencies here if needed.
 */

// Define contexts to require
const contexts = [
  require.context("@/system/elements/", true, /\.vue$/),
  // require.context("./patterns/", true, /\.vue$/),
  // require.context("./templates/", true, /\.vue$/),
]
  
// Define components
const components = []
contexts.forEach(context => {
  context.keys().forEach(key => components.push(context(key).default))
})

// Install the above defined components
const System = {
  install(Vue) {
    components.forEach(component => Vue.component(component.name, component))
  },
}

Vue.use(System)  