<template>
  <header>
        <nav>
          <NuxtLink to="/">Reesisms</NuxtLink>
          <!-- TODO: make submit button accessible -->
          <NuxtLink to="/submit">+</NuxtLink>
        </nav>
  </header>
</template>

<style scoped>
nav {
  display: flex;
  flex-flow: row wrap-reverse;
  /*justify-content: space-between;*/
  align-items: flex-start;
  align-content: flex-start;
}
</style>
