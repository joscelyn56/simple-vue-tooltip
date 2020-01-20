import Vue from 'vue'
import Tooltip from './Tooltip.vue'

export default {
    install(Vue, options) {
        Vue.component('tooltip', Tooltip)
    }
}
