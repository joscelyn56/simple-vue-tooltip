import Vue from 'vue'
import Tooltip from './Tooltip.vue'

export default {
    install(Vue, options) {
        Vue.directive('tooltip', {
            inserted(el, binding, vnode) {
                const fragment = document.createDocumentFragment()
            
                const element = el.cloneNode(true)
                fragment.appendChild(element)
            
                const tip = document.createElement('div')
                tip.setAttribute('class', 'tip')
                tip.style.display = 'none';
                tip.style.background = '#4d4d4d';
                tip.style.color = '#FFFFFF';
                tip.style.fontWeight = 'normal';
                tip.style.position = 'absolute';
                tip.style.width = 'max-content';
                tip.style.padding = '5px 7px';
                tip.style.borderRadius = '6px';
                tip.style.zIndex = '2';
                tip.style.textTransform = 'capitalize';
                tip.style.fontSize = '12px';
            
                tip.innerText = (binding.value.tip) ? binding.value.tip : 'Specify tip'
            
                if (binding.value.position === 'bottom') {
                    tip.style.top = '25px'
                    tip.style.left = '50%'
                    tip.style.transform = 'translateX(-50%)'
                }
            
                if (binding.value.position === 'bottom-left') {
                    tip.style.top = '25px'
                    tip.style.left = '0'
                    tip.style.transform = 'translateX(0%)'
                }
            
                if (binding.value.position === 'bottom-right') {
                    tip.style.top = '25px'
                    tip.style.left = 'unset'
                    tip.style.right = '50%'
                    tip.style.transform = 'translateX(10%)'
                }
            
                fragment.appendChild(tip)
            
                const tooltip = document.createElement('div')
                tooltip.setAttribute('class', 'element')
                tooltip.style.position = 'relative';
            
                tooltip.addEventListener('mouseenter', function () {
                    let elementTip = this.children[1]
                    elementTip.style.display = 'block'
                })
            
                tooltip.addEventListener('mouseleave', function () {
                    let elementTip = this.children[1]
                    elementTip.style.display = 'none'
                })
            
                tooltip.append(fragment)
            
                vnode.elm.parentElement.replaceChild(tooltip, el);
            }
        })
    }
}
