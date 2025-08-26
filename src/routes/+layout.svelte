<script lang="ts">
	import '../app.css';
	import { afterNavigate } from '$app/navigation';
	let { children } = $props();
	let isDarkMode = $state(false);
	let isMenuOpen = $state(false);

	// Function to toggle dark mode
	function toggleDarkMode() {
		isDarkMode = !isDarkMode;
		isMenuOpen = false; // Close mobile menu when toggling dark mode
		if (typeof window !== 'undefined') {
			// Update document class immediately
			if (isDarkMode) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
			// Save to localStorage
			localStorage.setItem('darkMode', isDarkMode.toString());
		}
	}

	// Initialize dark mode from localStorage on client side
	if (typeof window !== 'undefined') {
		const savedDarkMode = localStorage.getItem('darkMode');
		if (savedDarkMode === 'true') {
			isDarkMode = true;
			document.documentElement.classList.add('dark');
		} else {
			isDarkMode = false;
			document.documentElement.classList.remove('dark');
		}
	}

	// Close mobile menu after navigation
	afterNavigate(() => {
		isMenuOpen = false;
	});
</script>

<div class={`flex flex-col min-h-screen ${isDarkMode ? 'dark' : ''}`}>
	<header class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-1 md:px-3 md:py-1 bg-white dark:bg-gray-900 shadow-sm transition-colors duration-200">
		<div>
			<a href="/" class="flex items-center">
				<img src="/images/logo.webp" alt="Japan Geospatial Times Logo" class="h-14 w-auto rounded-lg" />
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
			<a href="/resources" class="text-gray-800 dark:text-gray-200 px-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Resources</a>
			<a href="/glossary" class="text-gray-800 dark:text-gray-200 px-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Glossary</a>
			<a href="/profiles" class="text-gray-800 dark:text-gray-200 px-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Profile</a>
			<button 
				onclick={toggleDarkMode}
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
				<a href="/resources" class="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">Resources</a>
				<a href="/glossary" class="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">Glossary</a>
				<a href="/profiles" class="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">Profile</a>
				<button 
					onclick={toggleDarkMode}
					class="flex items-center w-full px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
					aria-label="Toggle dark mode"
				>
					{#if isDarkMode}
						<svg class="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
							<path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
						</svg>
						<span>Light Mode</span>
					{:else}
						<svg class="w-5 h-5 text-gray-800 dark:text-gray-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
							<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
						</svg>
						<span>Dark Mode</span>
					{/if}
				</button>
			</nav>
		{/if}
	</header>

	<main class="flex-grow px-4 py-6 pt-20 bg-white dark:bg-gray-900 dark:text-gray-200 transition-colors duration-200">
		{@render children()}
	</main>

	<footer class="bg-gray-900 dark:bg-black py-6 text-center text-white">
		<div class="max-w-4xl mx-auto px-4">
			<div class="flex justify-center items-center space-x-3">
				<p class="text-sm text-gray-400">&copy; {new Date().getFullYear()} Japan Geospatial Times</p>
				<a 
					href="https://github.com/sanskruthiya/jgtimes"
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-400 hover:text-white transition-colors duration-200"
					aria-label="Visit GitHub repository"
				>
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"/>
					</svg>
				</a>
			</div>
		</div>
	</footer>
</div>
