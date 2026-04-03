<template>
  <header class="app-header">
    <div class="app-header__inner">
      <div class="app-header__main">
        <NuxtLink class="app-header__brand" to="/">
          <NuxtImg src="/logo.png" alt="cFAQ Logo" aria-label="cFAQ Logo" />
          <div class="faq-com">
            <span class="faq">collegefaqs.</span>
            <span class="com">com</span>
          </div>
        </NuxtLink>

        <nav class="app-header__nav-links" aria-label="Primary">
          <NuxtLink to="#engineering">Engineering</NuxtLink>
          <NuxtLink to="#mba/pgdm">MBA/PGDM</NuxtLink>
          <NuxtLink to="#medical">Medical</NuxtLink>
          <NuxtLink to="#study-abroad">Study Abroad</NuxtLink>
          <NuxtLink to="#medical">About us</NuxtLink>
        </nav>
      </div>

      <button
        class="app-header__menu-button"
        :class="{ 'is-open': isMenuOpen }"
        type="button"
        aria-label="Toggle navigation"
        aria-controls="mobile-nav-links"
        :aria-expanded="isMenuOpen"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="app-header__menu-line" />
        <span class="app-header__menu-line" />
        <span class="app-header__menu-line" />
      </button>

      <nav
        id="mobile-nav-links"
        class="app-header__mobile-menu"
        :class="{ 'is-open': isMenuOpen }"
        aria-label="Mobile Primary"
      >
        <NuxtLink to="/#engineering" @click="closeMenu">Engineering</NuxtLink>
        <NuxtLink to="/#mba/pgdm" @click="closeMenu">MBA/PGDM</NuxtLink>
        <NuxtLink to="/#medical" @click="closeMenu">Medical</NuxtLink>
        <NuxtLink to="/#study-abroad" @click="closeMenu">Study Abroad</NuxtLink>
        <NuxtLink to="/#about-us" @click="closeMenu">About us</NuxtLink>
      </nav>

      <nav class="app-header__contact-links" aria-label="Contact">
        <button class="whatsapp" @click="redirectToWhatsapp()">WhatsApp</button>
        <button class="call-now">Call Now</button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);

const closeMenu = () => {
  isMenuOpen.value = false;
};

const redirectToWhatsapp = () => {
  window.open('https://wa.me/919934114786', '_blank');
};
</script>

<style scoped lang="scss">
@use '../assets/scss/components/header' as *;
</style>
