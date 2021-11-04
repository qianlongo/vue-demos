<template>
  <div class="key-modifiers">
    <div class="key-modifiers-item">
      enter:
      <input type="text" @keydown.enter="onKeydown('enter')">
    </div>
    <div class="key-modifiers-item">
      tab:
      <input type="text" @keydown.tab="onKeydown('tab')">
    </div>  
    <div class="key-modifiers-item">
      delete:
      <input type="text" @keydown.delete="onKeydown('delete')">
    </div>  
    <div class="key-modifiers-item">
      esc:
      <input type="text" @keydown.esc="onKeydown('esc')">
    </div>  
    <div class="key-modifiers-item">
      space:
      <input type="text" @keydown.space="onKeydown('space')">
    </div> 
    <div class="key-modifiers-item">
      up:
      <input type="text" @keydown.up="onKeydown('up')">
    </div>  
    <div class="key-modifiers-item">
      down:
      <input type="text" @keydown.down="onKeydown('down')">
    </div> 
    <div class="key-modifiers-item">
      left:
      <input type="text" @keydown.left="onKeydown('left')">
    </div>  
    <div class="key-modifiers-item">
      right:
      <input type="text" @keydown.right="onKeydown('right')">
    </div>  
    
    <div class="key-modifiers-item">
      page-down:
      <input type="text" @keydown.page-down="onKeydown('page-down')">
    </div>  
    <div class="key-modifiers-item">
      page-up:
      <input type="text" @keydown.page-up="onKeydown('page-up')">
    </div>  
  </div>
</template>

<script>
export default {
  name: 'keyModifiers',
  methods: {
    onKeydown (keyName) {
      console.log(keyName)
    }
  }
}
</script>

<style>
p{
  text-align: center;
  padding: 20px;
}

.key-modifiers input{
  display: block;
  margin-top: 10px;
}
</style>