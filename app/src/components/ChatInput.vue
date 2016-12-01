<template>
  <form v-on:submit.prevent='submit' class="toolbar-inner">
    <input type='text' v-model='message'
      placeholder="Message"
      class="message-box" />
    <a v-on:click.prevent='submit' class="link">Send</a>
  </form>
</template>
<script>
/* global myApp */
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
  name: 'ChatInput',
  data () {
    return {
      message: null,
      messageBar: null,
      conversationStarted: true,
      botAvatar: 'https://website.smooch.io/static_assets/images/features/bot-avatar.png',
      botName: 'GuruBot',
      token: this.api_ai_token
    }
  },
  mounted () {
    this.messagebar = myApp.messagebar('.messagebar')
  },
  methods: {
    submit () {
      this.messages = myApp.messages('.messages', { autoLayout: true })
      this.messages.addMessage({
        text: this.message,
        type: 'sent',
        // avatar: avatar,
        name: 'Me',
        day: !this.conversationStarted ? 'Today' : false,
        time: !this.conversationStarted ? (new Date()).getHours() + ':' + (new Date()).getMinutes() : false
      })
      this.sendAndReceive(this.message)
      this.message = ''
    },
    sendAndReceive (messageText) {
      var data = {
        query: messageText,
        lang: 'en',
        sessionId: '9bc06b9f-5e52-46c2-8b07-6c2f9d4ca0b7' // you probably want to generate this in some sensible way
      }
      let vm = this
      Vue.http.post('query', data)
        .then(function (response) {
          let data = response.body
          console.log(data.result.speech)
          vm.messages = myApp.messages('.messages', { autoLayout: true })
          vm.messages.addMessage({
            text: data.result.speech,
            type: 'received',
            avatar: vm.botAvatar,
            name: vm.botName,
            day: !vm.conversationStarted ? 'Today' : false,
            time: !vm.conversationStarted ? (new Date()).getHours() + ':' + (new Date()).getMinutes() : false
          })
        })
    }
  }
}
</script>
<style scoped >
.link { margin-left:5px; }
.message-box {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #c8c8cd;
    background: #fff;
    border-radius: 17px;
    box-shadow: none;
    display: block;
    padding: 6px 15px;
    margin: 0;
    width: 100%;
    height: 34px;
    color: #000;
    font-size: 17px;
    line-height: 20px;
    font-family: inherit;
    resize: none;
    -webkit-flex-shrink: 1;
    -ms-flex: 0 1 auto;
    flex-shrink: 1;
}
</style>