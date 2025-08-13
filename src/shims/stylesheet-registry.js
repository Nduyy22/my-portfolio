// Shim for react-native-web StyleSheet registry
import { StyleSheet } from 'react-native-web'

const registry = {
  add: () => {},
  remove: () => {},
  clear: () => {},
  getStyleSheet: () => ({ textContent: '' })
}

export default registry
