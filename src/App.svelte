<script>
  import Character from "./lib/Character.svelte";
  import PageInfo from './lib/PageInfo.svelte';

  let characters = [];
  let page = 1;
  let searchName = "";
  const info = { page: 1, pages: 1 };

  async function loadCharacters(name) {
    let url = `https://rickandmortyapi.com/api/character?${
      name ? `name=${name}` : `page=${page}`
    }`;

    if (searchName && !name) {
      url = `${url}&name=${searchName}`;
    };

    const response = await fetch(url);
    const data = await response.json();
    characters = data.results;
    info.pages = data.info.pages;
    info.page = page;
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

  const findCharacter = () => {
    loadCharacters(searchName);
  };
</script>

<h1 class="title">Rick and Morty Svelte</h1>

<div class="container">
  <div class="btns">
    <button class="button-84" on:click={previousPage} disabled={page === 1}
      >Previous</button
    >
    <button class="button-84" on:click={nextPage}>Next</button>
  </div>

  <div class="btns">
    <PageInfo info={info}/>
    <input
      class="input"
      bind:value={searchName}
      on:input={findCharacter}
      type="text"
      placeholder="Type a character name"
      title="Press enter to search character"
    />
  </div>
  <div class="grid">
    {#each characters as character}
      <Character {character} />
    {/each}
  </div>
  <div class="btns">
    <PageInfo info={info}/>
  </div>
</div>
