<template>
  <header
    id="top"
    class="header"
  >
    <div class="container">
      <div class="header__row">
        <p class="header__logo">UPDATE</p>
        <nav class="header__menu">
          <nuxt-link to="/">Top</nuxt-link>
          <nuxt-link to="/about">About</nuxt-link>
          <nuxt-link to="/contact">Contact</nuxt-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  line-height: 64px;
  box-shadow: 0 0 16px #ddd;
  &__logo {
    font-weight: bold;
  }
  &__row {
    display: flex;
    justify-content: space-between;
  }
  &__menu {
    display: flex;
    a {
      line-height: 64px;
      padding: 0 24px;
      display: block;
      position: relative;
      &.nuxt-link-exact-active {
        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 4px;
          background: #000;
        }
      }
    }
  }
}
</style>
