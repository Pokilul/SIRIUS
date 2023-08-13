<template>
  <!-- The footer component for the Universidad de Guanajuato website -->
  <div class="footer d-flex w-100 px-4">
    <strong>Universidad de Guanajuato</strong>
    <v-spacer></v-spacer>
    <!-- Social media icons with links to the university's profiles -->
    <a v-for="icon in icons" :key="icon" :href="getSocialLink(icon)" class="mx-4 icon-link" target="_blank">
      <v-icon :color="iconColor" large>{{ icon }}</v-icon>
    </a>
  </div>
</template>

<script>
export default {
  /**
   * The Footer component for the Universidad de Guanajuato website.
   * Displays social media icons with links to the university's profiles.
   * @component Footer
   * @example
   * <Footer />
   */
  data: () => ({
    // Array of social media icons to display
    icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram", "mdi-youtube", "mdi-linkedin"],
    iconColor: "white"
  }),
  methods: {
    /**
     * Returns the link for a given social media icon.
     * @method getSocialLink
     * @param {string} icon - The name of the social media icon.
     * @returns {string} - The link for the given social media icon.
     */
    getSocialLink(icon) {
      switch (icon) {
        case "mdi-facebook":
          return "https://www.facebook.com/UdeGuanajuato/";
        case "mdi-twitter":
          return "https://twitter.com/UdeGuanajuato";
        case "mdi-linkedin":
          return "https://www.linkedin.com/school/universidad-de-guanajuato/";
        case "mdi-instagram":
          return "https://www.instagram.com/udeguanajuato/";
        case "mdi-youtube":
          return "https://www.youtube.com/channel/UCoUQ-zFpkGpLo4Yqj1PLFDA";
        default:
          return "#";
      }
    },
  },
};
</script>

<style scoped>
.footer {
  align-items: center;
  justify-content: space-between;
  display: block;
  position: relative;
  background: #07203E;
  color: #ffffff;
  padding: 35px 70px;
}

.icon-link {
  color: white;
  transition: transform 0.2s;
}

.icon-link:hover {
  transform: scale(2.0);
}
</style>
