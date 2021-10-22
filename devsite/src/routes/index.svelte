<svelte:head>
    <title>Joseph Portfolio</title>
</svelte:head>




<main class="dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen">
    <img src="/bg.svg" class="absolute h-full w-full object-cover"/>
    <header class="h-24 sm:h-32 flex items-center z-30 w-full">
        <div class="container mx-auto px-6 flex items-center justify-between">
            <div class="uppercase text-gray-800 dark:text-white font-black text-3xl flex items-center">
            </div>
            <div class="flex items-center">
                <nav class="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                <button class="lg:hidden flex flex-col ml-4">
                    <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                </button>
            </div>
        </div>
    </header>
    <div class="flex relative z-20 items-center">
        <div class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
            <div class="flex flex-col">
                <img src="/nii.jpeg" class="rounded-full w-28 mx-auto animate-bounce"/>
                <p class="text-2xl my-6 text-center dark:text-white">
                    Hi, I&#x27;m Joseph 🤘
                </p>
                <h2 class="max-w-5xl text-3xl md:text-6xl font-bold mx-auto dark:text-white text-blue-800 text-center py-2 animate-pulse">
                    I am a full stack developer. Let me build your digital product and experiences. I love to learn and write about new stuff 
                </h2>
                <div class="flex items-center justify-center mt-4">
                    <a href="mailto: niilantewade77@gmail.com" class="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-black dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-blue-600 hover:bg-gray-800 hover:text-blue-600 text-md animate-pulse">
                        CONNECT WITH ME
                    </a>
                </div>
            </div>
        </div>
    </div>
</main>
