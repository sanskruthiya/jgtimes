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
        <!-- Divider -->
        <div class="mt-16 mb-8 flex justify-center">
            <div class="w-24 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
        </div>
        
        <section class="px-4" in:fly="{{ y: 30, duration: 600, delay: 0 }}">
            <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">About</h2>
            <div class="prose prose-lg dark:prose-invert max-w-none">
                <p>Japan Geospatial Times is an information platform dedicated to exploring Japan's geospatial landscape. Currently operated as a personal blog, I share insights into the fascinating intersection of traditional Japanese cartography and modern mapping technologies, bringing you in-depth reflection and the latest developments in the field.</p>
                
                <h3 class="text-xl font-semibold mt-8 mb-4 text-gray-800 dark:text-gray-200">Community Requests</h3>
                <p>Want to read about specific GIS topics in Japan? Your topic suggestions are always welcome via GitHub Issues or Google Forms.</p>
                
                <div class="mt-4 flex flex-col sm:flex-row gap-4">
                    <a 
                        href="https://github.com/sanskruthiya/jgtimes/issues/new?template=topic-request.md&title=Topic%20Request%3A%20"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"/>
                        </svg>
                        <span>Submit Topic via GitHub</span>
                    </a>
                    
                    <a 
                        href="https://forms.gle/cKE1gudmUUoUv7R77"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center space-x-2 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors duration-200"
                    >
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                        </svg>
                        <span>Submit Topic via Form</span>
                    </a>
                </div>
                
                <h3 class="text-xl font-semibold mt-12 mb-4 text-gray-800 dark:text-gray-200">Contribute Articles</h3>
                <p>Interested in writing about GIS in Japan? Your contributions are always welcome.</p>
                
                <div class="mt-4 flex flex-col sm:flex-row gap-4">
                    <a 
                        href="https://github.com/sanskruthiya/jgtimes#how-to-contribute"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"/>
                        </svg>
                        <span>Learn How to Contribute</span>
                    </a>
                    
                    <a 
                        href="https://forms.gle/vsx2G7Cgat8xWyLg9"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center space-x-2 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors duration-200"
                    >
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                        </svg>
                        <span>Submit Article via Form</span>
                    </a>
                </div>
            </div>
        </section>
    {/if}
</div>