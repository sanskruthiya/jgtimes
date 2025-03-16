<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	let { children } = $props();
	let isDarkMode = $state(false);
	let isMenuOpen = $state(false);

	onMount(() => {
		// Check system preference for dark mode
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			isDarkMode = true;
		}
	});
</script>

<div class={`flex flex-col min-h-screen ${isDarkMode ? 'dark' : ''}`}>
	<header class="relative flex items-center justify-between px-1 md:px-3 md:py-1 bg-white dark:bg-gray-900 shadow-sm transition-colors duration-200">
		<div>
			<a href="/" class="flex items-center">
				<img src="/images/logo.png" alt="Japan Geospatial Times Logo" class="h-14 w-auto" />
			</a>
		</div>

		<!-- Mobile menu button -->
		<button 
			class="md:hidden px-2 py-1" 
			onclick={() => isMenuOpen = !isMenuOpen}
			aria-label="Toggle menu"
		>
			<svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				{#if isMenuOpen}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				{:else}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				{/if}
			</svg>
		</button>

		<!-- Desktop navigation -->
		<nav class="hidden md:flex justify-between items-center text-lg font-medium">
			<a href="/articles" class="text-gray-800 dark:text-gray-200 px-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Articles</a>
			<a href="/books" class="text-gray-800 dark:text-gray-200 px-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Reading List</a>
			<a href="/profiles" class="text-gray-800 dark:text-gray-200 px-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Profile</a>
			<button 
				onclick={() => isDarkMode = !isDarkMode}
				class="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
				aria-label="Toggle dark mode"
			>
				{#if isDarkMode}
					<svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
						<path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
					</svg>
				{:else}
					<svg class="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
						<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
					</svg>
				{/if}
			</button>
		</nav>

		<!-- Mobile navigation -->
		{#if isMenuOpen}
			<nav class="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg md:hidden z-50">
				<a href="/articles" class="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">Articles</a>
				<a href="/books" class="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">Reading List</a>
				<a href="/profiles" class="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">Profile</a>
			</nav>
		{/if}
	</header>

	<main class="flex-grow px-4 py-6 bg-white dark:bg-gray-900 dark:text-gray-200 transition-colors duration-200">
		{@render children()}
	</main>

	<footer class="bg-gray-900 dark:bg-black py-4 text-center text-white">
		<p class="text-sm">&copy; {new Date().getFullYear()} Japan Geospatial Times</p>
	</footer>
</div>
