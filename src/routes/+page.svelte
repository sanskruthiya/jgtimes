<script>
    let { data } = $props();
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import ArticleLink from '$lib/components/ArticleLink.svelte';
    let typingString = $state('');
    let showTitle = $state(false);
    let showSubtitle = $state(false);
    let showImage = $state(false);
    let showArticles = $state(false);
    let showAbout = $state(false);

    onMount(async () => {
        // Staggered fade-in animations
        setTimeout(() => showTitle = true, 100);
        setTimeout(() => showSubtitle = true, 500);
        setTimeout(() => startTypingAnimation(), 700);
        setTimeout(() => showImage = true, 1000);
        setTimeout(() => showArticles = true, 1300);
        setTimeout(() => showAbout = true, 1600);

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
        <div class="h-28 flex items-center justify-center">
            {#if showTitle}
                <h1 
                    class="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200"
                    in:fly="{{ y: -30, duration: 800, delay: 0 }}"
                >
                    Welcome to Japan Geospatial Times
                </h1>
            {/if}
        </div>
        <div class="mt-4 mb-8">
            {#if showSubtitle}
                <p 
                    class="text-xl md:text-2xl text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
                    in:fade="{{ duration: 600, delay: 0 }}"
                >
                    {@html typingString}
                </p>
            {/if}
        </div>
        {#if showImage}
            <img 
                src="/images/background_main.webp" 
                alt="Japan Cityscape" 
                class="w-full object-cover"
                loading="eager"
                in:fade="{{ duration: 800, delay: 0 }}"
            />
        {/if}
    </div>

    {#if showArticles}
        <section class="px-4" in:fly="{{ y: 30, duration: 600, delay: 0 }}">
            <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Latest Articles</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each data.articles as article}
                    <ArticleLink {article} />
                {/each}
            </div>
        </section>
    {/if}

    {#if showAbout}
        <section class="mt-16 px-4" in:fly="{{ y: 30, duration: 600, delay: 0 }}">
            <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">About</h2>
            <div class="prose prose-lg dark:prose-invert max-w-none">
                <p>Japan Geospatial Times is an information platform dedicated to exploring Japan's geospatial landscape. Currently operated as a personal blog, I share insights into the fascinating intersection of traditional Japanese cartography and modern mapping technologies, bringing you in-depth reflection and the latest developments in the field.</p>
            </div>
        </section>
    {/if}
</div>