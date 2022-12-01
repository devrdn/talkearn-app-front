<template>
  <nav class="navigation">
    <div class="mobile-container" ref="mobile">
      <div class="topnav">
        <div id="myLinks">
          <ul>
            <li class="mobile__item">
              Experts
              <ul>
                <li class="mobile__subitem">
                  <nuxt-link to="/">Home Page</nuxt-link>
                </li>
                <li class="mobile__subitem">Test</li>
              </ul>
            </li>
            <li class="mobile__item">Become an expert</li>
            <li class="mobile__item">Docs</li>
            <li class="mobile__item">Contacts</li>
          </ul>
        </div>
        <svg
          class="bar"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          @click="closeMenu"
        >
          <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
          <path
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          />
        </svg>
      </div>
    </div>

    <ul class="navigation__list">
      <li class="navigation__item">
        <v-menu open-on-hover rounded="b-xl" offset-y>
          <template #activator="{ on, attrs }">
            <div stlye="z-index: 10" v-bind="attrs" v-on="on">Experts</div>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title
                ><nuxt-link to="/">Home Page</nuxt-link></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title>All Experts</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>By Category</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </li>
      <li class="navigation__item">
        <v-menu open-on-hover close-on-click rounded="b-xl" offset-y>
          <template #activator="{ on, attrs }">
            <div stlye="z-index: 10" v-bind="attrs" v-on="on">Category</div>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title
                ><nuxt-link to="/become"
                  >How to become an expert</nuxt-link
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><nuxt-link to="/become/expert"
                  >Fill out the form</nuxt-link
                ></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </li>
      <li class="navigation__item">
        <v-menu open-on-hover close-on-click rounded="b-xl" offset-y>
          <template #activator="{ on, attrs }">
            <div stlye="z-index: 10" v-bind="attrs" v-on="on">Docs</div>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title
                ><a href="https://talkearn.gitbook.io/talkearn/"
                  >Gitbook</a
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><a
                  href="https://talkearn.gitbook.io/talkearn/tokenomics/roadmap"
                  >Roadmap</a
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><a
                  href="https://talkearn.gitbook.io/talkearn/tokenomics/general-idea-of-tet-tokenomics"
                  >Tokenomics</a
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><a
                  href="https://www.canva.com/design/DAFS7yG_upA/e6jLQj-paAml9VE19A1-9g/view?utm_content=DAFS7yG_upA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                  >Pitch Deck</a
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><a
                  href="https://talkearn.gitbook.io/talkearn/tokenomics/general-idea-of-tet-tokenomics"
                  >TET Points Program</a
                ></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </li>
      <li class="navigation__item">
        <v-menu open-on-hover close-on-click rounded="b-xl" offset-y>
          <template #activator="{ on, attrs }">
            <div stlye="z-index: 10" v-bind="attrs" v-on="on">Contacts</div>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title
                ><a href="mailto:info@talkearn.app"
                  >info@talkearn.app</a
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <a href="tel:40746150515">40746150515</a></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </li>
    </ul>
    <a class="navigation__item--purple" href="/src/#"> Connect wallet </a>
  </nav>
</template>

<script>
export default {
  methods: {
    closeMenu() {
      this.$refs.mobile.style.display =
        this.$refs.mobile.style.display === 'block' ? 'none' : 'block';
    },
  },
};
</script>

<style lang="scss" scoped>
.v-menu__content {
  box-shadow: none !important;
}
.navigation {
  // .navigation__list
  display: flex;
  align-items: center;

  .mobile-container {
    @include rwdmin(1121px) {
      display: none;
    }
  }

  &__list {
    list-style-type: none;
    font-size: $fs;
    font-weight: 400;
    @include rwdmax(1120px) {
      display: none;
    }
  }

  // .navigation__item

  &__item {
    display: inline-block;
    margin-right: 50px;
    padding-top: 10px !important;

    [aria-expanded='true'] {
      padding: 10px;
      border-top-left-radius: 24px;
      border-top-right-radius: 24px;
      background-color: white;
    }
    [aria-expanded='false'] {
      padding: 10px;
    }

    @include rwdmax(1653px) {
      margin-right: 15px;
    }
  }

  // .navigation__item--purple

  &__item--purple {
    color: $whiteColor !important;
    font-size: $fs;
    font-weight: 600;
    background-color: $purpleColor;
    padding: 16px;
    border-radius: 37px;
    @include rwdmax(1120px) {
      display: none;
    }
  }

  /* Burger */
  body {
    font-family: Arial, Helvetica, sans-serif;
  }

  .mobile-container {
    width: 100%;
    position: absolute;
    z-index: 10;
    top: 110px;
    left: 0px;
    margin: auto;
    background-color: #fff;
    height: 500px;
    color: white;
    height: 100vh;
    border-radius: 10px;
  }

  .mobile__item {
    color: black;
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
    .mobile__subitem {
      font-weight: normal;
      margin-top: 10px;
      font-size: 17px;
    }
  }

  .topnav {
    overflow: hidden;
    background-color: #fff;
    position: relative;
  }

  .topnav #myLinks {
    display: flex;
    flex-direction: column;
  }

  .topnav a.icon {
    background: black;
    display: block;
    position: absolute;
    right: 0;
    top: 0;
  }

  .topnav a:hover {
    background-color: #fff;
    color: black;
  }

  .bar {
    position: absolute;
    top: 20px;
    right: 10px;
    width: 20px;
  }
}
</style>
