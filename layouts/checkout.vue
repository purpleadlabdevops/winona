<template>
  <div class="layout layout__checkout">
    <Header class="header__checkout" />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.layout__checkout{
  padding-top: 85px;
  position: relative;
}
</style>