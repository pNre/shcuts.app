<template>
    <div class="container">
      <header class="navbar">
          <section class="navbar-section">
              <a href="#" class="navbar-brand mr-2">Shortcuts</a>
              <router-link to="/" class="btn btn-link">Home</router-link>
              <router-link to="/about" class="btn btn-link">About</router-link>
          </section>
      </header>
      <router-view/>
    </div>
</template>

<style lang="scss">
$border-radius: 10px;
$html-font-size: 18px;
$primary-color: #011627;

@import 'spectre.css/src/spectre.scss';

.card {
    overflow: hidden;
    margin-top: $unit-3;
    margin-bottom: $unit-3;
}

.with-padding {
    padding: $unit-3;
}

.card-header,
.card-body {
    padding: $unit-3 !important;
}

.tile {
    &:not(:first-child) {
        margin-top: $unit-3;
    }
  
    &:not(:last-child) {
        margin-bottom: $unit-3;
    }
}
</style>
