<template>
  <header class="header">
    <ul>
      <li class="left">
        <slot name="left">左</slot>
      </li>
      <li class="center">
        <slot>中</slot>
      </li>
      <li class="right">
        <slot name="right">右</slot>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
}
</script>
