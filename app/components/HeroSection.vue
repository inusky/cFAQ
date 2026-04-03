<template>
  <section class="hero-section">
    <div class="hero-section__inner container">
      <div class="hero-section__content">
        <div class="hero-section__about-short">
          <h1 class="hero-section__title">Your College Repository</h1>
          <p class="hero-section__description">
            Collegefaqs helps you find, evaluate, take admission and fund your
            college education.
          </p>
        </div>
        <div class="hero-section__details">
          <div class="hero-section__detail detail1">
            <span>2000+</span>
            <p>Students placed</p>
          </div>
          <div class="hero-section__detail detail2">
            <span>100%</span>
            <p>Success Rate</p>
          </div>
          <div class="hero-section__detail detail3">
            <span>500+</span>
            <p>Partner Colleges</p>
          </div>
        </div>
        <div class="hero-section__buttons">
          <button class="whatsapp" @click="redirectToWhatsapp">
            Chat on WhatsApp
          </button>
          <span>OR</span>
          <button class="call-now">Call Now: +91 99341 14786</button>
        </div>
      </div>
      <div class="hero-section__image">
        <NuxtImg
          src="https://news.vanderbilt.edu/manage/wp-content/uploads/expertise_college-admissions1.jpg"
          alt="Hero Section Image"
          aria-label="Hero Section Image"
          preload
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../assets/scss/components/hero-section' as *;
</style>

<script setup lang="ts">
function redirectToWhatsapp() {
  window.open('https://wa.me/919934114786', '_blank');
}
</script>
