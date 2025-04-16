const JsonDiv = () => {
    const div = document.createElement('div');
    div.className = 'w-full p-4 border border-gray-600 rounded-md bg-white shadow-lg text-sm whitespace-pre-wrap break-words h-[20em] overflow-y-auto';
    div.innerHTML = `<div class="text-center">
                        <div class="flex flex-col items-center justify-center h-full text-gray-500">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-16 h-16 mb-4 text-gray-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            >
                            <path d="M4 4h16v16H4z" />
                            <path d="M4 9h16" />
                            <path d="M9 4v5" />
                            </svg>
                            <p class="text-lg font-medium">No response yet</p>
                            <p class="text-sm text-gray-400">Send a request to see the JSON response here</p>
                        </div> 
                    </div>
                    `

    return div;
}

const outputArea = JsonDiv();

export { outputArea };