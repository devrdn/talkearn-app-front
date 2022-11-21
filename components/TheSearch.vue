<template>
  <div class="header__container__searchfield">
    <v-autocomplete
      v-if="$route.name !== 'search'"
      v-model="localSearchValue"
      :items="searchExperts"
      :loading="isLoading"
      :search-input.sync="search"
      clear-icon=""
      append-icon=""
      clearable
      hide-details
      hide-selected
      item-value="id"
      :filter="filerData"
      return-object
      label="Search experts..."
      solo
      @change="getExpertPage()"
    >
      <template #no-data>
        <v-list-item>
          <v-list-item-title> Search for expert </v-list-item-title>
        </v-list-item>
      </template>
      <template #item="{ item }">
        <v-list-item-avatar
          color="indigo"
          class="text-h5 font-weight-light white--text"
        >
          <img :src="item.image" />
        </v-list-item-avatar>
        <v-badge
          v-if="item.available"
          offset-x="30px"
          offset-y="25px"
          color="green darken-1"
        />
        <v-badge
          v-else
          offset-x="30px"
          offset-y="25px"
          color="grey lighten-1"
        />
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.categorySlug }}</v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </v-autocomplete>
    <input
      v-else
      v-model="search"
      type="search"
      class="header__container__searchfield__input"
      placeholder="Search here..."
    />
    <button @click.prevent="getSearchPage()">
      <img src="/img/index/search.svg" alt="search" />
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import debounce from 'lodash.debounce';
export default {
  data: () => ({
    localSearchValue: {},
    search: null,
    isLoading: false,
  }),
  computed: {
    ...mapGetters({
      searchExperts: 'expert/getExperts',
      searchValue: 'search/getSearchValue',
    }),
  },
  watch: {
    async search(val) {
      this.isLoading = true;
      if (val !== null) {
        await this.handleSearchValue(val);
      }
    },
  },
  methods: {
    ...mapActions({
      getExpertBySearch: 'expert/fetchSearchExperts',
      clearExperts: 'expert/clearExperts',
      setSearchValue: 'search/setSearchValue',
    }),

    filerData(item, queryText) {
      return (
        item.name.toLowerCase().includes(queryText.toLowerCase()) ||
        item.description.toLowerCase().includes(queryText.toLowerCase()) ||
        item.slug.toLowerCase().includes(queryText.toLowerCase()) ||
        item.categorySlug.toLowerCase().includes(queryText.toLowerCase())
      );
    },

    async setGlobalSearchValue(searchValue) {
      if (this.$route.name === 'search') {
        this.$router.push(`/search?find=${searchValue}`);
      }

      if (!searchValue) {
        this.clearExperts();
        return;
      }

      await this.getExpertBySearch({
        searchText: searchValue,
      }).catch((err) => {
        console.log(err);
      });
    },

    handleSearchValue: debounce(async function (val) {
      this.isLoading = false;
      this.setSearchValue({ searchValue: val });
      await this.setGlobalSearchValue(this.searchValue);
    }, 500),

    getSearchPage() {
      this.isLoading = false;
      this.$router.push(`/search?find=${this.search}`);
    },

    getExpertPage() {
      this.clearExperts();
      this.$router.push(
        `/expert/${this.localSearchValue.categorySlug}/${this.localSearchValue.slug}`
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  &__container {
    &__searchfield {
      display: flex;
      align-items: center;

      & input {
        width: 400px;
        height: 50px;
        background: #ffffff;
        box-shadow: 0px 19px 84px rgba(0, 0, 0, 0.04);
        border-radius: 60px;
        padding-left: 20px;
        font-weight: 400;
        font-size: $fs;
      }

      &__input::-ms-clear {
        display: none;
      }

      & img {
        @include rwdmax(1218px) {
          display: none !important;
        }
        transform: translateX(-50px);
      }
    }
  }
}
</style>
