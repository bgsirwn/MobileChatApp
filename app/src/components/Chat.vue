<template>

  <div class="messages messages-init" data-auto-layout="true">
  </div>
</template>

<script>
/* global myApp */
export default {
  name: 'chat',
  data () {
    return {
      conversationStarted: false
    }
  },
  mounted () {
    // Add view
    this.messages = myApp.messages('.messages', { autoLayout: true })
    this.messages.addMessage({
      text: 'Hi there. Type login to get started',
      type: 'received',
      // avatar: avatar,
      name: 'GuruBot',
      day: !this.conversationStarted ? 'Today' : false,
      time: !this.conversationStarted ? (new Date()).getHours() + ':' + (new Date()).getMinutes() : false
    })
  }
}
</script>
