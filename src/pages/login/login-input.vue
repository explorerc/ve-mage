<template>
  <div class="input-form" style="margin-top: 5px;">
    <div class="mu-text-field has-label" v-bind:class='focusState'>
      <div class="mu-text-field-content">
        <div class="mu-text-field-label" v-bind:class='float'>{{placeholder}}</div>
          <input :type="inputType" ref="myinput" class="mu-text-field-input" autocomplete="off" v-on:blur="onBlur(value)" v-on:focus="onFocus(value)" v-model="value" @change="getVal" :maxlength="maxLength"/>
          <i class="v-showpsd" v-show="isPassword" @click="isShow()"></i>
        <div>
          <hr class="mu-text-field-line">
          <hr class="mu-text-field-focus-line">
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    inputType: String,
    isPassword: Boolean,
    inputValue: String,
    placeholder: String,
    code: String,
    maxLength: Number
  },
  data () {
    return {
      value: '',
      focusState: '',
      float: 'float'
    }
  },
  methods: {
    onFocus (value) {
      this.focusState = 'focus-state'
      this.float = ''
      this.$emit('inputFocus', value)
    },
    onBlur (value) {
      if (value === '') {
        this.float = 'float'
      } else {
        this.float = ''
      }
      this.focusState = ''
    },
    isShow () {
      let type = this.inputType === 'text' ? 'password' : 'text'
      this.$emit('changePassword', type)
    },
    getVal (e) {
      this.$emit('update:inputValue', e.target.value)
    }
  },
  watch: {
    value: function (e) {
      this.$emit('changeInput', e)
      this.onFocus(e)
    }
  }
}
</script>

<style>
.mu-text-field {
  font-size: 16px;
  width: 100%;
  min-height: 48px;
  display: inline-block;
  position: relative;
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: 8px;
}
.v-showpsd {
  display: block;
  width: 16px;
  height: 10px;
  background: #000 no-repeat 0px -3px;
  position: absolute;
  top: 40px;
  right: 0;
  z-index: 3;
}
.mu-text-field.full-width {
  width: 100%;
}

.mu-text-field.has-icon {
  padding-left: 56px;
}

.mu-text-field.focus-state {
  color: rgba(14, 23, 38, 0.4);
}

/* .mu-text-field.focus-state.error {
    color: #f44336
} */

.mu-text-field.has-label {
  min-height: 72px;
}

.mu-text-field-icon {
  position: absolute;
  left: 16px;
  top: 12px;
}

.mu-text-field.has-label .mu-text-field-icon {
  top: 36px;
}

.mu-text-field-content {
  display: block;
  height: 100%;
  padding-bottom: 12px;
  padding-top: 4px;
}

.mu-text-field.disabled .mu-text-field-content {
  color: rgba(0, 0, 0, 0.38);
  cursor: not-allowed;
}

.mu-text-field.has-label .mu-text-field-content {
  padding-top: 28px;
  padding-bottom: 12px;
}

.mu-text-field-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border: none;
  background: none;
  border-radius: 0 0 0 0;
  box-shadow: none;
  display: block;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 32px;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  font-size: inherit;
  color: rgba(0, 0, 0, 0.87);
  font-family: inherit;
  position: relative;
}

.mu-text-field-help {
  position: absolute;
  margin-top: 6px;
  font-size: 12px;
  line-height: 12px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  left: 0;
  right: 0;
  color: #ffa900;
  right: 0;
  left: auto;
  color: #8e9198 !important;
}

.mu-text-field.has-icon .mu-text-field-help {
  left: 56px;
}

.mu-text-field.error .mu-text-field-help {
  color: #f44336;
}

.mu-text-field.disabled .mu-text-field-help {
  color: inherit;
}

.mu-text-field-line {
  margin: 0;
  height: 1px;
  border: none;
  background-color: rgba(0, 0, 0, 0.4);
  left: 0;
  right: 0;
  position: absolute;
}

.mu-text-field.has-icon .mu-text-field-line {
  left: 56px;
}

.mu-text-field-line.disabled {
  height: auto;
  background-color: transparent;
  border-bottom: 2px dotted rgba(0, 0, 0, 0.38);
}

.mu-text-field-focus-line {
  margin: 0;
  height: 2px;
  border: none;
  background-color: #2878ff;
  position: absolute;
  left: 0;
  right: 0;
  margin-top: -1px;
  -webkit-transform: scaleX(0);
  -ms-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: -webkit-transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  transition: -webkit-transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
}

.mu-text-field.has-icon .mu-text-field-focus-line {
  left: 56px;
}

.mu-text-field-focus-line.error,
.focus-state .mu-text-field-focus-line {
  -webkit-transform: scaleX(1);
  -ms-transform: scaleX(1);
  transform: scaleX(1);
}

.input-form .mu-text-field-focus-line.error {
  background-color: #f44336;
}

.mu-text-field-textarea {
  resize: vertical;
  line-height: 1.5;
  position: relative;
  height: 100%;
  resize: none;
}

.mu-text-field-multiline {
  width: 100%;
  position: relative;
}

.mu-text-field-textarea-hide {
  width: 100%;
  height: auto;
  resize: none;
  position: absolute;
  padding: 0;
  overflow: auto;
  visibility: hidden;
}

.mu-text-field-label {
  line-height: 20px;
  -webkit-transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 1;
  cursor: text;
  /* -webkit-transform:translateZ(0) scale(.75); */
  transform: translate3d(0, 8px, 0) scale(0.75);
  -webkit-transform-origin: left top;
  -ms-transform-origin: left top;
  transform-origin: left top;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.mu-text-field.has-label .mu-text-field-label {
  top: 8px;
  position: absolute;
}

.mu-text-field.has-label .mu-text-field-label span {
  display: inline-block;
  margin-left: 8px;
  font-size: 16px;
  color: #fc5659;
}

.mu-text-field.has-label .mu-text-field-label.float {
  -webkit-transform: translate3d(0, 28px, 0) scale(1);
  transform: translate3d(0, 28px, 0) scale(1);
  color: rgba(0, 0, 0, 0.38);
}

.mu-text-field-hint {
  position: absolute;
  opacity: 0;
  -webkit-transition: opacity 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  transition: opacity 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  line-height: 34px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: text;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-align: left;
  font-size: 14px;
  color: rgba(14, 23, 38, 0.4);
}

.mu-text-field-hint.show {
  opacity: 1;
}

.mu-text-field.multi-line .mu-text-field-hint {
  line-height: 1.5;
}
</style>
