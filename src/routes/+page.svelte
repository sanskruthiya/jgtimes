<script>
    let { data } = $props();
    import { onMount } from 'svelte';
    import ArticleLink from '$lib/components/ArticleLink.svelte';
    let typingString = $state('');

    onMount(async () => {
        function startTypingAnimation() {
            const text = "For Geospatial Enthusiasts Worldwide: Exploring Japan's GIS Journey";
            let i = 0;
            typingString = '';
            function typeWriter() {
                if (i < text.length) {
                    typingString += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 75);
                }
            }
            typeWriter();
        }
        startTypingAnimation();
    });
</script>

<svelte:head>
    <title>Japan Geospatial Times - Exploring Japan's GIS World</title>
    <meta name="description" content="Discover Japan's rich geospatial history, modern trends, and innovations. Perfect for geospatial enthusiasts looking to explore the evolution of maps and spatial data from Japan." />
    <meta name="keywords" content="geospatial, GIS, Japan, mapping, spatial data, geography, cartography" />
    <meta property="og:title" content="Japan Geospatial Times" />
    <meta property="og:description" content="Exploring Japan's rich geospatial history, modern trends, and innovations." />
    <meta property="og:image" content="/images/og-image.jpg" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="max-w-6xl mx-auto">
    <div class="flex flex-col items-center mb-8">
        <div class="h-16 flex items-center justify-center">
            <h1 class="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
                Welcome to Japan Geospatial Times
            </h1>
        </div>
        <div class="mt-4 mb-8">
            <p class="text-xl md:text-2xl text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {@html typingString}
            </p>
        </div>
        <img 
            src="/images/background_main.webp" 
            alt="Japan Cityscape" 
            class="w-full object-cover"
            loading="eager"
        />
    </div>

    <section class="px-4">
        <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Latest Articles</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each data.articles as article}
                <ArticleLink {article} />
            {/each}
        </div>
    </section>

    <section class="mt-16 px-4">
        <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">About</h2>
        <div class="prose prose-lg dark:prose-invert max-w-none">
            <p>Japan Geospatial Times is an information platform dedicated to exploring Japan's geospatial landscape. Currently operated as a personal blog, I share insights into the fascinating intersection of traditional Japanese cartography and modern mapping technologies, bringing you in-depth reflection and the latest developments in the field.</p>
        </div>
    </section>
</div>