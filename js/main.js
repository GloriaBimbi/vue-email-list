const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      emails: [],
    };
  },

  created() {
    // this.generateEmails();
  },

  methods: {
    generateEmails() {
      for (i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            console.log(response.data.response);
            const email = response.data.response;
            this.emails.push(email);
          });
      }
    },
  },
  mounted() {},
});

app.mount("#app");
