<script>
    export let data;
    import ResourceCard from '$lib/components/ResourceCard.svelte';
</script>
  
<svelte:head>
    <title>Resources for Japan Geospatial Community</title>
    <meta name="description" content="Curated resources for the Japan geospatial community" />
</svelte:head>

<h2 class="text-2xl font-bold mb-4">Resources</h2>
<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each data.resources as resource}
      <li>
        <ResourceCard {resource} />
      </li>
    {/each}
</ul>