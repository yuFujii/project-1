<template>
  <div>
    <a
      v-scroll-to="'#top'"
      class="to-top"
    >
      <i class="material-icons">keyboard_arrow_up</i>
    </a>
    <footer class="footer">
      <p>&copy; Update.</p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  text-align: center;
  font-size: 12px;
  margin: 32px 0;
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
  box-shadow: 0 2px 10px #ddd;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: translateY(-10px);
  }
}
</style>
