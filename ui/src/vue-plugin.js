import Component from './components/Component'
import ComponentB from './components/ComponentB'


const version = __UI_VERSION__

function install (app) {
  app.component(Component.name, Component)
  app.component(ComponentB.name, ComponentB)
}

export {
  version,
  Component,
  ComponentB,

  install
}
