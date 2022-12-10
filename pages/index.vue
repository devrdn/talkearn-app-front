<template>
  <div>
    <!-- ~ Landing Page ~ -->

    <!-- Crypto Topics Section -->
    <CategorySection />

    <!-- Experts Section -->
    <FeaturedExpertsSection title="Online Experts" />

    <FeaturedExpertsSection title="Featured Experts this week" />

    <!-- How it Works Section -->
    <HowItWorksSection />

    <!-- Become Expert Section -->
    <BecomeExpertSection />

    <!-- Benefits Section -->
    <BenefitsWorkSection />

    <!-- Customers Section -->
    <CustomerSection />
  </div>
</template>

<script>
import BecomeExpertSection from '~/components/sections/BecomeExpertSection.vue';
import BenefitsWorkSection from '~/components/sections/BenefitsWorkSection.vue';
import CategorySection from '~/components/sections/CategorySection.vue';
import CustomerSection from '~/components/sections/CustomerSection.vue';
import FeaturedExpertsSection from '~/components/sections/FeaturedExpertsSection.vue';
import HowItWorksSection from '~/components/sections/HowItWorksSection.vue';

export default {
  name: 'MainPage',
  components: {
    CategorySection,
    FeaturedExpertsSection,
    HowItWorksSection,
    BecomeExpertSection,
    BenefitsWorkSection,
    CustomerSection,
  },
  fetch: async ({ store }) => {
    if (store.getters['category/getCategories'].length === 0) {
      await store.dispatch('category/fetchCategories');
    }
    if (store.getters['expert/getFeaturedExperts'].length === 0) {
      await store.dispatch('expert/fetchFeaturedExperts');
    }
  },
};
</script>

<style lang="scss" scoped></style>
