<script>
  let isExpanded = false;
  
  function toggleExpanded() {
    isExpanded = !isExpanded;
  }
</script>

<svelte:head>
  <title>My Profile</title>
  <meta name="description" content="This is my profile." />
</svelte:head>

<h2 class="text-2xl font-bold mb-4">Author's profile</h2>

<div class="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
  <!-- プロフィール画像 -->
  <!--<img src="/profile/eitoh.webp" alt="Eita.H" class="w-60 h-60 rounded-full shadow-md mb-4">-->

  <!-- 名前と職業 -->
  <h1 class="text-3xl font-bold mb-2">Eita.H</h1>
  <p class="text-lg text-gray-600">Technology Analyst</p>

  <!-- 経歴 -->
  <section class="mt-6 text-left w-full">
      <h2 class="text-xl font-bold mb-3">Background</h2>
      <div class="relative">
        <div class="{isExpanded ? '' : 'overflow-hidden'}" style="{isExpanded ? '' : 'max-height: 4.5rem;'}">
          <p class="leading-relaxed">
            Hi, I'm a technology research specialist with a background in development studies and GIS.<br>
            I studied Urban Engineering at Chiba University in Japan and earned my master's degree in Development Studies and Urban Development from the University of Birmingham in the UK.<br>
            My career started in Tokyo as an urban planning coordinator, and later, I spent three years in Kandy, Sri Lanka, working on rural specialty product development.<br>
            After that, I took on roles in JICA and World Bank projects, coordinating the development of Ukraine's National Spatial Data Infrastructure (NSDI) and contributing as a GIS specialist to urban water supply projects in Rwanda gaining four years of hands-on international experience.<br>
            Since 2019, I've been working as a technology research specialist, analyzing cutting-edge technology trends in the private sector to uncover new business opportunities.
          </p>
        </div>
        
        {#if !isExpanded}
          <div class="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        {/if}
        
        <button 
          on:click={toggleExpanded}
          class="mt-3 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200 cursor-pointer"
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
      </div>
      <h2 class="text-xl font-bold mt-6">Contact & SNS</h2>
      <ul class="space-y-2 mt-6">
        <li class="flex items-center">
          <svg class="w-5 h-5 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .3C5.4.3 0 5.7 0 12.4c0 5.3 3.4 9.8 8.1 11.4.6.1.8-.2.8-.6v-2.3c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.3 1.8 1.3 1 1.7 2.7 1.2 3.3.9.1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.3a11.3 11.3 0 0 1 6 0c2.3-1.6 3.3-1.3 3.3-1.3.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2.1v3.1c0 .4.2.7.8.6C20.6 22.2 24 17.7 24 12.4 24 5.7 18.6.3 12 .3z"/>
          </svg>
          <a class="text-blue-600 hover:text-blue-500" href="https://github.com/sanskruthiya" target="_blank">GitHub</a>
        </li>
        <li class="flex items-center">
          <svg class="w-5 h-5 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-7 19h-2v-6h2v6zm-1-7c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2zm9 7h-2v-3.2c0-.8 0-1.9-1.2-1.9s-1.3.9-1.3 1.9v3.2h-2v-6h1.9v.8h.1c.3-.6 1-1.2 2.1-1.2 2.3 0 2.7 1.5 2.7 3.4v3z"/>
          </svg>
          <a class="text-blue-600 hover:text-blue-500" href="https://www.linkedin.com/in/eita-horishita-2b8a605a/" target="_blank">LinkedIn</a>
        </li>
        <li class="flex items-center">
          <svg class="w-5 h-5 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-1.4 4.2L12 12.7 5.4 8.2a1 1 0 1 1 1.2-1.6l5.4 3.8 5.4-3.8a1 1 0 0 1 1.2 1.6z"/>
          </svg>
          <a class="text-blue-600 hover:text-blue-500" href="https://form.run/@party--1681740493">Contact Form</a>
        </li>
      </ul>
  </section>
</div>

<section class="mt-16 px-4">
  <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">About</h2>
  <div class="prose prose-lg dark:prose-invert max-w-none">
    <p>Japan Geospatial Times is a personal blog dedicated to exploring Japan's geospatial landscape. Here, I share insights into the fascinating intersection of traditional Japanese cartography and modern mapping technologies, bringing you in-depth analysis and the latest developments in the field.</p>
  </div>
</section>