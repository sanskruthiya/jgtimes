<script>
  import ProfileCard from '$lib/components/ProfileCard.svelte';
  import { getAllProfiles } from '$lib/profiles/index';
  
  const profiles = getAllProfiles();
</script>

<svelte:head>
  <title>Author Profiles</title>
  <meta name="description" content="Meet the authors of Japan Geospatial Times." />
</svelte:head>

<h2 class="text-2xl font-bold mb-4">Author Profiles</h2>

<!-- Display all profiles in responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
  {#each profiles as profile}
    <ProfileCard {profile} />
  {/each}
</div>

<section class="mt-16 px-4">
  <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">About Japan Geospatial Times</h2>
  <div class="prose prose-lg dark:prose-invert max-w-none">
    <p>Japan Geospatial Times is an information platform dedicated to exploring Japan's geospatial landscape. Currently operated as a personal blog, I share insights into the fascinating intersection of traditional Japanese cartography and modern mapping technologies, bringing you in-depth reflection and the latest developments in the field.</p>
  </div>
</section>