<script setup lang="ts">
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

import {ref} from "vue";

const messages = ref<Message[]>([]);
const textarea = ref<string>("");

const handleSend = () => {
  const message: Message = {
    id: crypto.randomUUID(),
    text: textarea.value,
    sender: "user",
    timestamp: new Date(),
  };
  messages.value.push(message);
  textarea.value = "";
};

const handleClass = (message_sender: 'user' | 'ai') => {
  if (message_sender === 'user') {
    return 'justify-end';
  }
  return 'justify-start';
}

</script>

<template>
  <div class="flex flex-col h-full w-1/2 gap-5">
    <ScrollPanel class="h-5/6 w-full">
      <div class="flex" v-for="message in messages" :key="message.id" :class="handleClass(message.sender)">
        <p class="border-[#3E3E3E] bg-[#303030] border-1 max-w-3/4 shrink p-3 mb-2 mt-2 rounded-2xl">
          {{ message.text }}
        </p>
      </div>
    </ScrollPanel>
    <Textarea
        class="resize-none border-2 border-[#3E3E3E] rounded-2xl shadow-xl w-full grow p-3 pl-5 font-medium bg-[#303030] text-l"
        @keydown.enter.exact.prevent="handleSend"
        unstyled v-model="textarea"
        placeholder="Ask me to schedule a meeting..."/>
  </div>
</template>

<style scoped>

</style>