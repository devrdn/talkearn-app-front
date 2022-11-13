<template>
  <div class="crypto-topics__all__topic">
    <svg
      role="img"
      width="220"
      height="230"
      aria-labelledby="loading-aria"
      viewBox="0 0 220 230"
      preserveAspectRatio="none"
    >
      <title id="loading-aria">Loading...</title>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        clip-path="url(#clip-path)"
        style="fill: url('#fill')"
      ></rect>
      <defs>
        <clipPath id="clip-path">
          <circle cx="113" cy="87" r="68" />
          <rect x="34" y="175" rx="16" ry="16" width="162" height="18" />
        </clipPath>
        <linearGradient id="fill">
          <stop offset="0.599964" stop-color="#f3f3f3" stop-opacity="1">
            <animate
              attributeName="offset"
              values="-2; -2; 1"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="1.59996" stop-color="#ecebeb" stop-opacity="1">
            <animate
              attributeName="offset"
              values="-1; -1; 2"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="2.59996" stop-color="#f3f3f3" stop-opacity="1">
            <animate
              attributeName="offset"
              values="0; 0; 3"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.crypto-topics {
  &__all {
    &__topic {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      width: 220px;
      height: 225px;
      box-shadow: 0px 5px 10px rgba(31, 31, 51, 0.3);
      border-radius: 20px;
      color: $darkColor;
      font-size: 20px;
      font-weight: 500;
      transition: background-color 0.3s ease-in-out;
      transition: color 0.15s ease-in-out;
    }
  }
}
</style>
