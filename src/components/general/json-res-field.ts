const JsonDiv = () => {
    const div = document.createElement('div');
    div.className = 'w-full p-4 border rounded-md bg-yellow-50 text-sm font-mono whitespace-pre-wrap break-words h-100 overflow-y-auto';

    return div;
}

const outputArea = JsonDiv();

export { outputArea };