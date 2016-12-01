<template>
  <div class="view view-main">
      <div class="navbar">
          <div class="navbar-inner">
              <!-- We need cool sliding animation on title element, so we have additional "sliding" class -->
              <div class="center sliding">My Awesome Chat App</div>
          </div>
      </div>

      <!-- Pages container, because we use fixed-through navbar and toolbar, it has additional appropriate classes-->
      <div class="pages navbar-through toolbar-through">
          <!-- Page, "data-page" contains page name -->
          <div data-page="index" class="page">
              <!-- Scrollable page content -->
              <div class="page-content">
                  <div class="content-block">
                    <chat></chat>
                  </div>
                  <!-- /.content-block -->
              </div>
              <!-- /.page-content -->
          </div>
          <!-- /.page -->
      </div>

      <!-- Bottom Toolbar -->
      <div class="toolbar messagebar">
        <chat-input ></chat-input>
      </div>

  </div>
</template>

<script>
/* global myApp */
import Chat from './components/Chat'
import ChatInput from './components/ChatInput'

export default {
  name: 'app',
  components: {
    Chat,
    ChatInput
  },
  data () {
    return {
      messages: null
    }
  },
  mounted () {
    // Add view
    myApp.addView('.view-main', {
      // Because we want to use dynamic navbar, we need to enable it for this view:
      dynamicNavbar: true
    })
  }
}
</script>
