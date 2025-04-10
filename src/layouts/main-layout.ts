const MainLayout = (...elementsToAppend: HTMLElement[]) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'px-3 m-0 min-h-screen w-full flex flex-col gap-4';

    elementsToAppend.forEach(element => wrapper.append(element));

    return wrapper;
}

export default MainLayout;