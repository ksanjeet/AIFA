// faq_search.js

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('faq-search-input');
    const faqCategories = document.querySelectorAll('.faq-category');

    if (searchInput && faqCategories.length > 0) {
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase().trim();

            faqCategories.forEach(category => {
                let categoryHasVisibleItems = false;
                const faqItems = category.querySelectorAll('.faq-item');

                faqItems.forEach(item => {
                    const questionElement = item.querySelector('summary');
                    const answerElement = item.querySelector('p');

                    // Get text content from the current language
                    const questionText = questionElement ? questionElement.textContent.toLowerCase() : '';
                    const answerText = answerElement ? answerElement.textContent.toLowerCase() : '';

                    // Check if the search term is in the question or answer
                    if (questionText.includes(searchTerm) || answerText.includes(searchTerm)) {
                        item.style.display = ''; // Show the item
                        categoryHasVisibleItems = true;
                        // Optionally, expand the details tag if it matches
                        if (item.querySelector('details')) {
                            item.querySelector('details').open = true;
                        }
                    } else {
                        item.style.display = 'none'; // Hide the item
                        // Ensure details tag is closed if hidden
                        if (item.querySelector('details')) {
                            item.querySelector('details').open = false;
                        }
                    }
                });

                // Show/hide the category based on whether it has any visible items
                if (categoryHasVisibleItems || searchTerm === '') { // Show category if items match or search is empty
                    category.style.display = '';
                } else {
                    category.style.display = 'none';
                }
            });
        });
    }
});
