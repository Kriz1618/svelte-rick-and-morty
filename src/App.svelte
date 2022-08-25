<script>
  import Character from "./lib/Character.svelte";

  let characters = [];
  let page = 1;

  async function loadCharacters() {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await response.json();
    characters = data.results;
    console.log("5", "data", data);
  }
  loadCharacters();

  function nextPage() {
    page++;
    loadCharacters();
  }

  function previousPage() {
    page--;
    loadCharacters();
  }
</script>

<h1 class="title">Rick and Morty API</h1>

<div class="container">
  <div class="btns">
    <button class="button-84" on:click={previousPage} disabled={page === 1}>Previous</button>
    <button class="button-84" on:click={nextPage}>Next</button>
  </div>

  <div class="grid">
    {#each characters as character}
      <Character {character} />
    {/each}
  </div>
</div>
