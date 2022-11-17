<template>
    <div class="header__container__searchfield">
        <v-autocomplete v-model="searchValue" :items="searchExperts" :search-input.sync="search" clear-icon=""
            append-icon="" clearable hide-details hide-selected item-text="name" item-value="id"
            label="Search experts..." solo>
            <template #no-data>
                <v-list-item>
                    <v-list-item-title>
                        Search for expert
                    </v-list-item-title>
                </v-list-item>
            </template>
            <template #item="{ item }">
                <v-list-item-avatar color="indigo" class="text-h5 font-weight-light white--text">
                    <img :src="item.image" />
                </v-list-item-avatar>
                <v-badge v-if="item.available" offset-x="30px" offset-y="25px" color="green darken-1" />
                <v-badge v-else offset-x="30px" offset-y="25px" color="grey lighten-1" />
                <v-list-item-content>
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ item.categorySlug }}</v-list-item-subtitle>
                </v-list-item-content>
            </template>
        </v-autocomplete>


        <!-- <input
        
        :items="items"
      :loading="isLoading"
      :search-input.sync="search"

      v-model="searchValue"
      type="search"
      class="header__container__searchfield__input"
      placeholder="Search here..."
    /> -->
        <button @click.prevent="setSearch(searchValue)">
            <img src="/img/index/search.svg" alt="search" />
        </button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import debounce from 'lodash.debounce';
export default {
    data: () => ({
        searchValue: {},
        search: null,
    }),
    computed: {
        ...mapGetters({
            searchExperts: 'expert/getExperts',
        })
    },
    watch: {
        async search(val) {
            await this.handleSearchValue(val);
        }
    },
    methods: {
        ...mapActions({
            getExpertBySearch: 'expert/fetchSearchExperts',
        }),

        async setSearchValue(val) {
            await this.getExpertBySearch({
                searchText: val,
            })
        },

        handleSearchValue: debounce(async function (val) {
            await this.setSearchValue(val);
        }, 1000),

        setSearch(searchValue) {
            this.$router.replace({ path: `/expert/${searchValue.categorySlug}/${searchValue.slug}` });
            searchValue = '';
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
                transform: translateX(-40px);
            }
        }
    }
}
</style>
