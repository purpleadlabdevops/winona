<template>
  <header class="header" :class="fixClass ? 'header-fixed' : ''">
    <div class="container">
      <nuxt-link to="/">
        <svg width="143" height="20" viewBox="0 0 143 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M78.3487 0.5C71.742 0.5 66.3672 4.81372 66.3672 10.1152C66.3672 15.29 71.8153 19.5 78.5115 19.5C85.3215 19.5 90.6558 15.3329 90.6558 10.0129C90.6558 4.67853 85.2501 0.5 78.3487 0.5ZM87.8792 10.0129C87.8792 14.1847 83.7501 17.4531 78.4791 17.4531C73.2629 17.4531 69.1771 14.2299 69.1771 10.1152C69.1771 5.98474 73.35 2.62402 78.4791 2.62402C83.6625 2.62402 87.8792 5.93857 87.8792 10.0129Z" fill="#19191C"/>
          <path d="M19.5336 13.3939L11.5455 5.25008H10.6187L2.62955 13.3953L2.61289 0.986816H0V19.0652H1.00584L11.0823 8.22332L21.1278 18.9972L21.1911 19.0652H22.1641V0.986816H19.5174L19.5336 13.3939Z" fill="#19191C"/>
          <path d="M57.3762 14.3236L43.0069 0.986816H41.6836V19.0652H44.4607V5.70278L58.8623 19.0652H60.1533V0.986816H57.3762V14.3236Z" fill="#19191C"/>
          <path d="M112.561 14.3236L98.191 0.986816H96.8682V19.0652H99.6448V5.70278L114.046 19.0652H115.337V0.986816H112.561V14.3236Z" fill="#19191C"/>
          <path d="M132.351 0.986816H130.967L120.543 19.0652H123.425L126.694 13.5081H136.624L139.893 19.0652H142.808L132.351 0.986816ZM135.454 11.3841H127.864L131.659 4.61221L135.454 11.3841Z" fill="#19191C"/>
          <path d="M33.2478 0.986816H30.6016V19.0652H33.2478V0.986816Z" fill="#19191C"/>
        </svg>
      </nuxt-link>
      <nuxt-link
        v-if="!['health-quiz', 'checkout'].includes(route.name)"
        class="btn"
        to="/health-quiz">
        GET STARTED
      </nuxt-link>
    </div>
  </header>
</template>

<script lang="ts" setup>
const route = <any>useRoute(),
      fixClass = ref<boolean>(false)

if(process.client){
  window.addEventListener('scroll', () => {
    fixClass.value = window.scrollY > 0 ? true : false
  })
}
</script>

<style lang="scss" scoped>
.header{
  padding-top: 30px;
  padding-bottom: 30px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--white);
  z-index: 100;
  transition: .5s ease;
  &-fixed{
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  a{
    display: block;
  }
  &__quiz{
    background: none;
    @media(max-width:767px){
      position: relative;
    }
  }
  &__checkout{
    background-color: #edffe1;
    padding-top: 30px;
    padding-bottom: 30px;
    svg path{
      fill: var(--cyan);
    }
  }
}
</style>