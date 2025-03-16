<script>
    export let data;
    import BookCard from '$lib/components/BookCard.svelte';
</script>
  
<svelte:head>
    <title>Introduction of useful website for Japan geospatial community</title>
    <meta name="description" content="Introduction of useful website for Japan geospatial community" />
</svelte:head>

<h2 class="text-2xl font-bold mb-4">Useful links</h2>
<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each data.books as book}
      <li>
        <BookCard {book} />
      </li>
    {/each}
</ul>