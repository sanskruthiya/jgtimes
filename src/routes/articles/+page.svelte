<script>
    export let data;
    import ArticleLink from '$lib/components/ArticleLink.svelte';
</script>

<svelte:head>
    <title>Articles - Japan Geospatial Times</title>
    <meta name="description" content="Explore our collection of articles about Japan's geospatial landscape, from historical maps to modern GIS applications." />
    <meta name="keywords" content="geospatial articles, Japanese maps, GIS Japan, spatial data articles" />
    <meta property="og:title" content="Articles - Japan Geospatial Times" />
    <meta property="og:description" content="Discover in-depth articles about Japan's geospatial landscape." />
    <meta property="og:type" content="website" />
</svelte:head>

<div class="max-w-6xl mx-auto px-4">
    <header class="mb-12 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Articles
        </h1>
        <p class="text-sm text-gray-500 dark:text-gray-500">
            Have topic suggestions for future articles?
            <br>
            <a href="https://github.com/sanskruthiya/jgtimes/issues/new?template=topic-request.md&title=Topic%20Request%3A%20" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">Request via GitHub</a>
            or 
            <a href="https://forms.gle/cKE1gudmUUoUv7R77" target="_blank" rel="noopener noreferrer" class="text-green-600 dark:text-green-400 hover:underline">submit a form</a>.
        </p>
    </header>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each data.articles as article}
            <ArticleLink {article} />
        {/each}
    </div>

    {#if data.articles.length === 0}
        <div class="text-center py-12">
            <p class="text-gray-600 dark:text-gray-400">No articles found.</p>
        </div>
    {/if}
</div>