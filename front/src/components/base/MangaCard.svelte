<script>
    export let manga = '';
</script>

<div class="w-60 bg-white border border-gray-200 rounded-lg shadow">
    <div class="h-80 w-full">
        <img class="rounded-t-lg w-full h-full" src={manga.cover} alt="" />
    </div>

    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black truncate">{manga.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{manga.author}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-jump-red rounded-lg hover:bg-jump-red-hover focus:ring-4 focus:outline-none focus:ring-blue-300">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
