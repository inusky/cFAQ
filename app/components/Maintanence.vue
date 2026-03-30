<template>
  <div class="maintanence">
    <h1>Site Under Maintenance</h1>
    <p>
      We are currently performing scheduled maintenance. We should be back
      shortly. Thank you for your patience.
    </p>
  </div>
</template>

<style scoped lang="scss">
.maintanence {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20%;
  height: 100vh;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    color: #333;
  }
}
</style>
