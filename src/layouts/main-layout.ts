const MainLayout = (...elementsToAppend: HTMLElement[]) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'p-0 m-0 bg-gray-500';

    elementsToAppend.forEach(element => wrapper.append(element));

    return wrapper;
}

export default MainLayout;