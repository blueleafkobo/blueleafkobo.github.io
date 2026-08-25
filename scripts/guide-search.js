(() => {
    const input = document.querySelector('[data-guide-search]');
    const sections = [...document.querySelectorAll('[data-guide-section]')];
    const status = document.querySelector('[data-search-status]');
    if (!input || !sections.length) return;

    const normalize = value => value.toLocaleLowerCase().replace(/\s+/g, ' ').trim();

    input.addEventListener('input', () => {
        const query = normalize(input.value);
        let visible = 0;
        sections.forEach(section => {
            const match = !query || normalize(section.textContent).includes(query);
            section.hidden = !match;
            if (match) visible += 1;
        });
        status.textContent = query
            ? `${visible} ${visible === 1 ? 'section' : 'sections'} found`
            : 'Search headings, instructions and troubleshooting';
    });
})();
