<template>
  <div>
    <a
      v-scroll-to="'#top'"
      class="to-top"
    >
      <i class="material-icons">keyboard_arrow_up</i>
    </a>
    <footer class="footer">
      <div class="container">
        <nav class="footer-nav">
          <div class="footer-nav__col">
            <h3 class="footer-nav__title">Pages</h3>
            <nuxt-link
              to="/"
              class="footer-nav__link"
            >Top</nuxt-link>
            <nuxt-link
              to="/about"
              class="footer-nav__link"
            >About</nuxt-link>
            <span
              to=""
              class="footer-nav__link footer-nav__link--disabled"
            >Recruit</span>
            <span
              to=""
              class="footer-nav__link footer-nav__link--disabled"
            >Contact</span>
          </div>
          <div class="footer-nav__col">
            <h3 class="footer-nav__title">Other</h3>
            <span
              to=""
              class="footer-nav__link footer-nav__link--disabled"
            >Privacy</span>
            <span
              to=""
              class="footer-nav__link footer-nav__link--disabled"
            >Help</span>
          </div>
        </nav>
        <p>&copy; Mock.</p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  text-align: center;
  font-size: 12px;
  padding: 100px 0 32px;
  border-top: 1px solid #eee;
  @media screen and (max-width: 700px) {
    padding-top: 50px;
  }
}

.footer-nav {
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(2, 200px);
  margin-bottom: 100px;
  text-align: left;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 50px;
  }
  &__title {
    font-weight: bold;
    margin-bottom: 16px;
  }
  &__link {
    display: block;
    padding: 8px 0;
    &--disabled {
      opacity: 0.3;
    }
  }
}

.to-top {
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  box-shadow: 0 2px 8px rgba(#333, 0.3);
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: translateY(-10px);
  }
}
</style>
