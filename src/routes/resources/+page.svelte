<script lang="ts">
    import ResourceCard from '$lib/components/ResourceCard.svelte';
    import ResourceFilter from '$lib/components/ResourceFilter.svelte';
    import type { ResourceInfo } from '$lib/getResources';

    interface PageData {
        resources: ResourceInfo[];
    }

    export let data: PageData;

    let filteredResources: ResourceInfo[] = data.resources;
    let selectedCategories: string[] = [];
    let selectedLanguages: string[] = [];
</script>
  
<svelte:head>
    <title>Resources for Japan Geospatial Community</title>
    <meta name="description" content="Curated resources for the Japan geospatial community" />
</svelte:head>

<h2 class="text-2xl font-bold mb-4">Resources</h2>

<ResourceFilter 
    resources={data.resources} 
    bind:filteredResources 
    bind:selectedCategories 
    bind:selectedLanguages 
/>

<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each filteredResources as resource}
      <li>
        <ResourceCard {resource} />
      </li>
    {/each}
</ul>