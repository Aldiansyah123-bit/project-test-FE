<template>
    <!--Waves Container-->
      <div>
        <svg
          class="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g class="parallax">
            <use
              xlink:href="#gentle-wave"
              x="48"
              y="0"
              fill="#E5E5E521"
            />
            <use
              xlink:href="#gentle-wave"
              x="48"
              y="3"
              fill="#20DF7F17"
            />
            <use
              xlink:href="#gentle-wave"
              x="48"
              y="5"
              fill="#20DF7F17"
            />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="#E5E5E521" />
          </g>
        </svg>
      </div>
      <!--Waves end-->
</template>

<script>

export default {
  name: "wave",
};
</script>