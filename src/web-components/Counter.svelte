<svelte:options tag="basic-counter"/>
<script lang="ts">
  let count: number = 0
  export let color:string = "#008bff"
</script>

<button style="background-color: {color};" on:click={()=>{count++}}>
  count is {count}
</button>

<style>
  /* button{
    background-color: blue;
  } */
</style>