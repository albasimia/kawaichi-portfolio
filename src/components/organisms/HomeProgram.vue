<script setup lang="ts">
import HomeProgramPortfolio from "@/components/molecules/HomeProgramPortfolio.vue";
import HomeProgramDotTask from "@/components/molecules/HomeProgramDotTask.vue";
import HomeProgramFitScreenWindow from "@/components/molecules/HomeProgramFitScreenWindow.vue";
import HomeProgramShotokukakudai from "@/components/molecules/HomeProgramShotokukakudai.vue";
import DividerGradation from "@/components/atoms/DividerGradation.vue";
</script>

<template>
  <div class="home-program">
    <div class="home-program__wrap w-10/12 mx-auto">
      <div class="flex justify-center mb-12">
        <h2>
          <img class="h-6 mb-3" src="@\assets\images\subtitle\program.png" />
          <DividerGradation />
        </h2>
      </div>

      <div class="sr__fadein-right">
        <div class="flex flex-col md:flex-row justify-center md:space-x-16">
          <HomeProgramDotTask class="mb-28 md:mb-18 w-12/12 md:w-6/12 md:max-w-lg shadow-lg" />
          <HomeProgramFitScreenWindow class="mb-28 md:mb-18 w-12/12 md:w-6/12 md:max-w-lg shadow-lg" />
        </div>
        <div class="flex flex-col md:flex-row justify-center md:space-x-16">
          <HomeProgramPortfolio class="mb-28 md:mb-18 w-12/12 md:w-6/12 md:max-w-lg shadow-lg" />
          <HomeProgramShotokukakudai class="mb-28 md:mb-18 w-12/12 md:w-6/12 md:max-w-lg shadow-lg" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/_mixin.scss";

.home-program {
  @include slant-bg($angle: 0deg, $bg-color: theme("colors.secondary"));
}

.home-program__wrap {
  @apply pt-24;
}
</style>
