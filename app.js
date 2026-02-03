// PWA Installation
let deferredPrompt;
const installPrompt = document.getElementById('installPrompt');
const installBtn = document.getElementById('installBtn');
const dismissInstall = document.getElementById('dismissInstall');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installPrompt.classList.remove('hidden');
});

installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response: ${outcome}`);
        deferredPrompt = null;
        installPrompt.classList.add('hidden');
    }
});

dismissInstall.addEventListener('click', () => {
    installPrompt.classList.add('hidden');
});

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => console.log('SW registered:', registration))
            .catch(error => console.log('SW registration failed:', error));
    });
}

// Online/Offline Status
const onlineStatus = document.getElementById('onlineStatus');

function updateOnlineStatus() {
    if (navigator.onLine) {
        onlineStatus.textContent = 'Online';
        onlineStatus.className = 'online';
    } else {
        onlineStatus.textContent = 'Offline';
        onlineStatus.className = 'offline';
    }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
updateOnlineStatus();

// Tab Navigation
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.dataset.tab;
        
        // Remove active class from all tabs and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        button.classList.add('active');
        document.getElementById(`${tabName}-content`).classList.add('active');
        
        // Update URL hash without scrolling
        history.replaceState(null, null, `#${tabName}`);
        
        // Render content if not already rendered
        if (tabName === 'stories' && !document.querySelector('.story-card')) {
            renderStories();
        } else if (tabName === 'questions' && !document.querySelector('.qa-category')) {
            renderQA();
        } else if (tabName === 'ask' && !document.querySelector('.ask-category')) {
            renderQuestionsToAsk();
        } else if (tabName === 'tips' && !document.querySelector('.tip-card')) {
            renderTips();
        }
    });
});

// Initialize based on URL hash
function initializeFromHash() {
    const hash = window.location.hash.slice(1);
    if (hash) {
        const targetTab = document.querySelector(`[data-tab="${hash}"]`);
        if (targetTab) {
            targetTab.click();
        }
    } else {
        renderStories(); // Default to stories
    }
}

// Search Functionality
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');
let searchTimeout;

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    
    if (query.length > 0) {
        clearSearch.classList.add('visible');
    } else {
        clearSearch.classList.remove('visible');
    }
    
    // Debounce search
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        performSearch(query);
    }, 300);
});

clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    clearSearch.classList.remove('visible');
    performSearch('');
});

function performSearch(query) {
    const activeTab = document.querySelector('.tab-content.active').id;
    
    if (activeTab === 'stories-content') {
        filterStories(query);
    } else if (activeTab === 'questions-content') {
        filterQA(query);
    } else if (activeTab === 'ask-content') {
        filterQuestionsToAsk(query);
    }
}

// Render STAR Stories
function renderStories(filteredStories = null) {
    const storiesGrid = document.getElementById('storiesGrid');
    const storiesToRender = filteredStories || starStories;
    
    if (storiesToRender.length === 0) {
        storiesGrid.innerHTML = '<p class="loading">No stories found matching your search.</p>';
        return;
    }
    
    storiesGrid.innerHTML = storiesToRender.map(story => `
        <div class="story-card priority-${story.priority}" data-story-id="${story.id}">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                <h3>${story.title}</h3>
                <span class="priority-badge priority-${story.priority}">${story.priority}</span>
            </div>
            <p class="story-subtitle">${story.subtitle}</p>
            <p style="margin: 0.75rem 0;"><strong>Situation:</strong> ${story.situation.substring(0, 100)}...</p>
            <div class="story-tags">
                ${story.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
    
    // Add click listeners to story cards
    document.querySelectorAll('.story-card').forEach(card => {
        card.addEventListener('click', () => {
            const storyId = parseInt(card.dataset.storyId);
            showStoryModal(storyId);
        });
    });
    
    renderFilterTags();
}

// Filter Stories
function filterStories(query) {
    if (!query) {
        renderStories();
        return;
    }
    
    const lowerQuery = query.toLowerCase();
    const filtered = starStories.filter(story => {
        return story.title.toLowerCase().includes(lowerQuery) ||
               story.subtitle.toLowerCase().includes(lowerQuery) ||
               story.situation.toLowerCase().includes(lowerQuery) ||
               story.task.toLowerCase().includes(lowerQuery) ||
               story.result.toLowerCase().includes(lowerQuery) ||
               story.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
    });
    
    renderStories(filtered);
}

// Render Filter Tags
function renderFilterTags() {
    const filterContainer = document.getElementById('filterContainer');
    const uniqueTags = [...new Set(starStories.flatMap(story => story.tags))].sort();
    
    filterContainer.innerHTML = uniqueTags.map(tag => 
        `<span class="filter-tag" data-tag="${tag}">${tag}</span>`
    ).join('');
    
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            tag.classList.toggle('active');
            applyTagFilters();
        });
    });
}

function applyTagFilters() {
    const activeTags = Array.from(document.querySelectorAll('.filter-tag.active'))
        .map(tag => tag.dataset.tag);
    
    if (activeTags.length === 0) {
        renderStories();
        return;
    }
    
    const filtered = starStories.filter(story => 
        activeTags.some(tag => story.tags.includes(tag))
    );
    
    renderStories(filtered);
}

// Show Story Modal
function showStoryModal(storyId) {
    const story = starStories.find(s => s.id === storyId);
    if (!story) return;
    
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h2>${story.title}</h2>
        <p style="color: var(--text-light); margin-bottom: 1.5rem;">${story.subtitle}</p>
        
        <div style="margin-bottom: 1rem;">
            <span class="priority-badge priority-${story.priority}">${story.priority} priority</span>
            ${story.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        
        <h3>📋 Situation</h3>
        <p>${story.situation}</p>
        
        <h3>🎯 Task</h3>
        <p>${story.task}</p>
        
        <h3>⚡ Action</h3>
        <ul>
            ${story.action.map(action => `<li>${action}</li>`).join('')}
        </ul>
        
        <h3>✅ Result</h3>
        <p>${story.result}</p>
        
        <h3>💡 Why This Works</h3>
        <p>${story.whyItWorks}</p>
        
        <h3>🔗 Relevant Questions</h3>
        <ul>
            ${story.relevantQuestions.map(q => `<li>${q}</li>`).join('')}
        </ul>
    `;
    
    modal.classList.add('show');
}

// Modal Close
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// Render Q&A
function renderQA(filteredQA = null) {
    const qaCategories = document.getElementById('qaCategories');
    const qaToRender = filteredQA || qaData;
    
    if (qaToRender.length === 0) {
        qaCategories.innerHTML = '<p class="loading">No questions found matching your search.</p>';
        return;
    }
    
    qaCategories.innerHTML = qaToRender.map((category, catIndex) => `
        <div class="qa-category">
            <h3>${category.category}</h3>
            ${category.questions.map((qa, qIndex) => `
                <div class="qa-item">
                    <div class="qa-question" data-category="${catIndex}" data-question="${qIndex}">
                        <span>${qa.question}</span>
                        <span class="toggle-icon">▼</span>
                    </div>
                    <div class="qa-answer">${qa.answer}</div>
                </div>
            `).join('')}
        </div>
    `).join('');
    
    // Add toggle functionality
    document.querySelectorAll('.qa-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('.toggle-icon');
            
            answer.classList.toggle('visible');
            icon.classList.toggle('open');
        });
    });
}

// Filter Q&A
function filterQA(query) {
    if (!query) {
        renderQA();
        return;
    }
    
    const lowerQuery = query.toLowerCase();
    const filtered = qaData.map(category => ({
        ...category,
        questions: category.questions.filter(qa => 
            qa.question.toLowerCase().includes(lowerQuery) ||
            qa.answer.toLowerCase().includes(lowerQuery)
        )
    })).filter(category => category.questions.length > 0);
    
    renderQA(filtered);
}

// Render Questions to Ask
function renderQuestionsToAsk(filteredQuestions = null) {
    const askCategories = document.getElementById('askCategories');
    const questionsToRender = filteredQuestions || questionsToAsk;
    
    if (questionsToRender.length === 0) {
        askCategories.innerHTML = '<p class="loading">No questions found matching your search.</p>';
        return;
    }
    
    askCategories.innerHTML = questionsToRender.map(category => `
        <div class="ask-category">
            <h3>${category.category}</h3>
            <ul>
                ${category.questions.map(q => `
                    <li>
                        ${q.text}
                        <span class="question-priority priority-${q.priority}">${q.priority}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `).join('');
}

// Filter Questions to Ask
function filterQuestionsToAsk(query) {
    if (!query) {
        renderQuestionsToAsk();
        return;
    }
    
    const lowerQuery = query.toLowerCase();
    const filtered = questionsToAsk.map(category => ({
        ...category,
        questions: category.questions.filter(q => 
            q.text.toLowerCase().includes(lowerQuery)
        )
    })).filter(category => category.questions.length > 0);
    
    renderQuestionsToAsk(filtered);
}

// Render Tips
function renderTips() {
    const tipsGrid = document.getElementById('tipsGrid');
    
    tipsGrid.innerHTML = interviewTips.map(tipSection => `
        <div class="tip-card">
            <h4>${tipSection.title}</h4>
            <ul>
                ${tipSection.tips.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeFromHash();
    renderFilterTags();
});

// Handle browser back/forward
window.addEventListener('hashchange', initializeFromHash);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // ESC to close modal
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        modal.classList.remove('show');
    }
    
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
});

// Print functionality
window.addEventListener('beforeprint', () => {
    // Expand all Q&A answers before printing
    document.querySelectorAll('.qa-answer').forEach(answer => {
        answer.classList.add('visible');
    });
});
