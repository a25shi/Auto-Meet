<script setup lang="ts"></script>

<template>
  <div>
    <input v-model="message" placeholder="Ask me to schedule a meeting..." />
    <button @click="sendMessage">Send</button>
    <div>{{ response }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      response: "",
    };
  },
  methods: {
    async sendMessage() {
      // This calls to our backend
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: this.message }),
      });
      const data = await res.json();
      this.response = data.reply;
    },
  },
};
</script>
