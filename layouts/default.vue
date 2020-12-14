<template>
  <div class="wrapper">
    <div class="layout">
      <Navbar />
      <main>
        <Header />
          <Nuxt />
      </main>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  background-color: #eee;
}

.layout {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  font-family: "Roboto";
  max-width: 1200px;
  margin: 0 auto;

  background-color: #fff;
}

main {
  width: 100%;
  padding: 30px 50px;
}
</style>
