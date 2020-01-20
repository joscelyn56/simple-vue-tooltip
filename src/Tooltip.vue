<template>
  <div class="element">
    <slot/>
    <div
      :style="tipPosition"
      class="tip">
      {{ tip }}
    </div>
  </div>
</template>
<script>
    export default {
        props: {
            tip: {
                type: String,
                default: ''
            },
            position: {
                type: String,
                default: 'bottom'
            }
        },
        data: () => ({
            tipPosition: {
                top: '25px',
                left: '50%',
                transform: 'translateX(-50%)'
            }
        }),
        mounted () {
            if (this.position === 'bottom') {
                this.tipPosition = {
                    top: '25px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }
            }
            if (this.position === 'bottom-left') {
                this.tipPosition = {
                    top: '25px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }
            }
            if (this.position === 'bottom-right') {
                this.tipPosition = {
                    top: '25px',
                    left: 'unset',
                    right: '50%',
                    transform: 'translateX(10%)'
                }
            }
        }
    }
</script>
<style>
  .element{
    position: relative;
  }
  .element > .tip{
    display: none;
    background: #4d4d4d;
    color: #FFFFFF;
    font-weight: normal;
    position: absolute;
    width: max-content;
    padding: 5px 7px;
    border-radius: 6px;
    z-index: 2;
    text-transform: capitalize;
    font-size: 12px;
  }
  .element:hover > .tip{
    display: block;
  }
</style>