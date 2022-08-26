<script>
  export let character;
  let showInfo = false;

  function handleShowInfo() {
    showInfo = !showInfo;
  }
</script>

<div class="character" on:click={handleShowInfo}>
  <img src={character.image} alt={character.name} />
  <div>
    {#if !showInfo}
      <h2>{character.name}</h2>
    {:else}
      <h3>{character.name}</h3>
      <h4>{character.species}</h4>
      <h4>{character.status}</h4>
    {/if}
  </div>
</div>
