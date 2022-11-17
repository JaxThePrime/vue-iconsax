

<article ><a name="user-content-readme-top"></a></p>

<div align="center">
  <h1 align="center"></a>iconsax for Vue</h1>
  <p align="center">
    A total of 6000 icons in 6 different designs | <strong>Only supported for vue3</strong>.
    <br>
    <br>
    <a href="https://vue-iconsax.netlify.app/"><strong> Explore the site </strong></a>
  </p>
</div>

# About the Project

the features of this package include the following: 
 * 1000 icons in 6 different types
 * Perfectly balance
 * 24px grid-based
 * Lightweight, powerful and easy to use <g-emoji class="g-emoji" alias="smile" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f604.png"><img class="emoji" alt="smile" src="https://github.githubassets.com/images/icons/emoji/unicode/1f604.png" width="20" height="20"></g-emoji>
  
<a href="https://vuejs.org/" rel="nofollow"><img src="https://camo.githubusercontent.com/50d43af9b68ef63015963f40aac894898d7c655ed221f0bce5013787a68aba26/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5675652e6a732d3335343935453f7374796c653d666f722d7468652d6261646765266c6f676f3d767565646f746a73266c6f676f436f6c6f723d344643303844" alt="Vue" data-canonical-src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&amp;logo=vuedotjs&amp;logoColor=4FC08D" style="max-width: 100%;"></a>

# Installation

* Install Yarn package
```bash
yarn add vue-iconsax
```
* Install NPM package
```bash
npm install vue-iconsax
```
  
## Usage

Global registration:

```jsx
// main.js
import { vsxIcon, Wallet }  from 'vue-iconsax'
const app = createApp(App)
// To use with dynamic icon names - Use PascalCase for fileName prop
app.component('vsxIcon', vsxIcon)
// To use with static icon names
app.component('Wallet', Wallet)
app.mount('#app')

// App.vue
<template>
  // Dynamic imports - Use PascalCase for fileName prop
  <vsx-icon :fileName="iconName" color="blue" size="50" type="linear" />

  // Static imports
  <Wallet color="blue" size="50" type="linear" />
</template>

<script>
export default {
  props:['iconName']
};
</script>
```

Local registration:

```jsx
<template>
  // Dynamic imports - Use PascalCase for fileName prop
  <vsx-icon :fileName="iconName" color="blue" size="50" type="linear" />

  // Static imports
  <Wallet color="blue" size="50" type="linear" />
</template>

<script>
import { vsxIcon, Wallet } from "vue-iconsax";
export default {
  components: {
    vsxIcon,
    Wallet
  },
  props:['iconName']
};
</script>
```

## Props

| Prop      | Type                                                | Default        | Note                   |
| --------- | --------------------------------------------------- | -------------- | ---------------------- |
| `color`   | `string`                                            | `#292D32` | css color              |
| `size`    | `number` `string`                                   | 24px           | size="24" or :size="24" |
| `type` | `Linear` `Outline` `TwoTone` `Bulk` `Broken` `Bold` | `Linear`       | icons styles           |
| `iconName` | string|   | icon component           | iconName is only required with vsx-icon tag (Dynamic icon imports)

## Contact

Emad Moghimi [emmoghimi@gmail.com](emmoghimi@gmail.com)

Project Link: [https://github.com/emmoghimi/vue-iconsax](https://github.com/emmoghimi/vue-iconsax)

</article >
