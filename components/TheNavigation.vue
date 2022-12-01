<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <v-menu open-on-hover close-on-click rounded="b-xl" offset-y>
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
            <div stlye="z-index: 10"  v-bind="attrs" v-on="on">Docs</div>
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
    </ul>
    <a class="navigation__item--purple" href="/src/#"> Connect wallet </a>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.v-menu__content {
  box-shadow: none !important;
}
.navigation {
  // .navigation__list
  display: flex;
  align-items: center;
  &__list {
    list-style-type: none;
    font-size: $fs;
    font-weight: 400;
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
  }

  // .navigation__item--purple

  &__item--purple {
    color: $whiteColor !important;
    font-size: $fs;
    font-weight: 600;
    background-color: $purpleColor;
    padding: 16px;
    border-radius: 37px;
  }
}
</style>
