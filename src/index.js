export default {
    install(Vue, options) {
        Vue.directive('tooltip', {
            inserted(el, binding, vnode) {
                const fragment = document.createDocumentFragment()
        
                const element = el.cloneNode(true)
                if(binding.value.event && binding.value.action){
                    let event = binding.value.event
                    let action = binding.value.action
            
                    let actionArgs = ""
                    if(binding.value.actionArgs){
                        actionArgs = binding.value.actionArgs
                    }
                    element.addEventListener(event, function(){
                        action(actionArgs)
                    })
                }
        
                fragment.appendChild(element)
        
                const tip = document.createElement('div')
                tip.setAttribute('class', 'tip')
                tip.style.background = '#4d4d4d';
                tip.style.color = '#FFFFFF';
                tip.style.fontWeight = 'normal';
                tip.style.position = 'absolute';
                tip.style.width = 'max-content';
                tip.style.padding = '5px 10px';
                tip.style.borderRadius = '4px';
                tip.style.zIndex = 2;
                tip.style.textTransform = 'capitalize';
                tip.style.fontSize = '12px';
        
                tip.innerText = (binding.value.tip) ? binding.value.tip : 'No tip specified'
        
                const arrow = document.createElement('div')
                arrow.setAttribute('class', 'arrow')
                arrow.style.width = 0
                arrow.style.height = 0
        
                const tipGroup = document.createElement('div')
                tipGroup.style.display = 'none'
                tipGroup.style.position = 'absolute'
                tipGroup.style.left = 0
                tipGroup.style.right = 0
                tipGroup.style.margin = 'auto'
                tipGroup.style.justifyContent = 'center'
        
                if(binding.value.position) {
                    if (binding.value.position === 'top') {
                        tipGroup.style.top = '-10px'
                
                        arrow.style.borderRight = '6px solid transparent'
                        arrow.style.borderLeft = '6px solid transparent'
                        arrow.style.borderTop = '8px solid #4d4d4d'
                
                        tip.style.top = '-25px'
                        tip.style.left = '50%'
                        tip.style.transform = 'translateX(-50%)'
                    }
            
                    if (binding.value.position === 'top-left') {
                        tipGroup.style.top = '-10px'
                
                        arrow.style.borderRight = '6px solid transparent'
                        arrow.style.borderLeft = '6px solid transparent'
                        arrow.style.borderTop = '8px solid #4d4d4d'
                
                        tip.style.top = '-25px'
                        tip.style.left = '-5px'
                    }
            
                    if (binding.value.position === 'top-right') {
                        tipGroup.style.top = '-10px'
                
                        arrow.style.borderRight = '6px solid transparent'
                        arrow.style.borderLeft = '6px solid transparent'
                        arrow.style.borderTop = '8px solid #4d4d4d'
                
                        tip.style.top = '-25px'
                        tip.style.left = 'unset'
                        tip.style.right = '50%'
                        tip.style.transform = 'translateX(10%)'
                    }
            
                    if (binding.value.position === 'bottom') {
                        tip.style.bottom = '-25px'
                        tip.style.left = '50%'
                        tip.style.transform = 'translateX(-50%)'
                    }
            
                    if (binding.value.position === 'bottom-left') {
                        tip.style.bottom = '-25px'
                        tip.style.left = 0
                        tip.style.transform = 'translateX(0%)'
                    }
            
                    if (binding.value.position === 'bottom-right') {
                        tipGroup.style.bottom = '-10px'
                
                        arrow.style.borderRight = '6px solid transparent'
                        arrow.style.borderLeft = '6px solid transparent'
                        arrow.style.borderBottom = '8px solid #4d4d4d'
                
                        tip.style.bottom = '-25px'
                        tip.style.right = '-5px'
                    }
                }else {
                    tipGroup.style.bottom = '-10px'
            
                    arrow.style.borderRight = '6px solid transparent'
                    arrow.style.borderLeft = '6px solid transparent'
                    arrow.style.borderBottom = '8px solid #4d4d4d'
            
                    tip.style.bottom = '-25px'
                    tip.style.left = 'unset'
                    tip.style.right = '-5px'
                }
        
                const tipFragment = document.createDocumentFragment()
                tipFragment.appendChild(arrow)
                tipFragment.append(tip)
        
                tipGroup.append(tipFragment)
        
                fragment.appendChild(tipGroup)
        
                const tooltip = document.createElement('div')
                tooltip.setAttribute('class', 'element')
                tooltip.style.position = 'relative';
        
                tooltip.addEventListener('mouseenter', function () {
                    let elementTip = this.children[1]
                    elementTip.style.display = 'flex'
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
