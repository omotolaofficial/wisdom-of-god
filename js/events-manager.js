/**
 * Events Manager - Handle event data with LocalStorage
 */

const EventsManager = {
    STORAGE_KEY: 'church_events',
    
    // Default events
    defaultEvents: [
        {
            id: 1,
            title: 'Atmosphere of Praise',
            description: 'An evening of powerful worship and praise! Join us as we lift our voices in adoration to our King. Experience the presence of God through contemporary songs, traditional hymns, and a time of intimate worship.',
            date: '2026-03-18',
            time: '18:00',
            location: 'Main Sanctuary',
            category: 'worship',
            image: './images/aop.jpg',
            attendees: 500,
            badge: 'featured',
            createdAt: new Date().toISOString()
        },
        {
            id: 2,
            title: 'Light Up Abuja',
            description: 'A community outreach event where we shine the light of Christ throughout Abuja. Join us as we conduct evangelism, distribute care packages, and minister to communities in need. Be part of spreading God\'s love!',
            date: '2026-03-20',
            time: '17:00',
            location: 'Various Communities',
            category: 'community',
            image: './images/light up abuja.jpeg',
            attendees: 200,
            badge: 'upcoming',
            createdAt: new Date().toISOString()
        },
        {
            id: 3,
            title: 'Sunday Worship Service',
            description: 'Begin your week with us in worship. Join our vibrant congregation as we worship the Lord, hear from God\'s Word, and fellowship with believers. All are welcome!',
            date: 'recurring',
            time: '09:00',
            location: 'Main Sanctuary',
            category: 'worship',
            image: null,
            icon: 'fas fa-praying-hands',
            attendees: 1000,
            recurring: 'every-sunday',
            createdAt: new Date().toISOString()
        },
        {
            id: 4,
            title: 'Digging Deep Bible Study',
            description: 'A weekly opportunity to deepen your understanding of Scripture. We dig into God\'s Word together, study biblical truths, and grow in our knowledge of the Lord. Come prepared to learn and share!',
            date: 'recurring',
            time: '18:00',
            location: 'Fellowship Centre',
            category: 'fellowship',
            image: null,
            icon: 'fas fa-book-open',
            attendees: 75,
            recurring: 'every-tuesday',
            createdAt: new Date().toISOString()
        },
        {
            id: 5,
            title: 'Faith Clinic',
            description: 'A time of healing, prayer, and restoration. We address life\'s challenges through faith and the power of God\'s Word. Come bring your burdens and leave with hope and encouragement!',
            date: 'recurring',
            time: '18:00',
            location: 'Main Sanctuary',
            category: 'fellowship',
            image: null,
            icon: 'fas fa-cross',
            attendees: 200,
            recurring: 'every-friday',
            createdAt: new Date().toISOString()
        },
        {
            id: 6,
            title: 'Thanksgiving Service',
            description: 'A special service to thank God for His blessings, protection, and guidance. Join us for prayer, music, testimonies, and a time of corporate thanksgiving. Bring your gratitude and your family!',
            date: '2026-04-15',
            time: '10:00',
            location: 'Main Sanctuary',
            category: 'worship',
            image: null,
            icon: 'fas fa-crown',
            attendees: 800,
            badge: 'upcoming',
            createdAt: new Date().toISOString()
        }
    ],

    // Initialize - load or set default events
    init() {
        if (!this.getAll()) {
            this.setAll(this.defaultEvents);
        }
    },

    // Get all events
    getAll() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error('Error reading events:', e);
            return null;
        }
    },

    // Set all events
    setAll(events) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(events));
            return true;
        } catch (e) {
            console.error('Error saving events:', e);
            return false;
        }
    },

    // Add new event
    add(eventData) {
        const events = this.getAll() || this.defaultEvents;
        const newEvent = {
            id: Math.max(...events.map(e => e.id || 0), 0) + 1,
            ...eventData,
            createdAt: new Date().toISOString()
        };
        events.push(newEvent);
        this.setAll(events);
        return newEvent;
    },

    // Update event
    update(id, eventData) {
        const events = this.getAll() || this.defaultEvents;
        const index = events.findIndex(e => e.id === id);
        if (index !== -1) {
            events[index] = { ...events[index], ...eventData };
            this.setAll(events);
            return events[index];
        }
        return null;
    },

    // Delete event
    delete(id) {
        const events = this.getAll() || this.defaultEvents;
        const filtered = events.filter(e => e.id !== id);
        this.setAll(filtered);
        return true;
    },

    // Get events by category
    getByCategory(category) {
        const events = this.getAll() || this.defaultEvents;
        if (category === 'all') return events;
        return events.filter(e => e.category === category);
    },

    // Get upcoming events (within next 30 days)
    getUpcoming() {
        const events = this.getAll() || this.defaultEvents;
        const today = new Date();
        const thirtyDaysFromNow = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
        
        return events.filter(e => {
            if (e.date === 'recurring') return true;
            const eventDate = new Date(e.date);
            return eventDate >= today && eventDate <= thirtyDaysFromNow;
        }).sort((a, b) => {
            if (a.date === 'recurring') return 1;
            if (b.date === 'recurring') return -1;
            return new Date(a.date) - new Date(b.date);
        });
    },

    // Format event for display
    format(event) {
        return {
            ...event,
            displayDate: this.formatDate(event.date, event.recurring),
            displayTime: this.formatTime(event.time)
        };
    },

    // Format date
    formatDate(date, recurring) {
        if (date === 'recurring' || recurring) {
            const recurringText = {
                'every-sunday': 'Every Sunday',
                'every-tuesday': 'Every Tuesday',
                'every-wednesday': 'Every Wednesday',
                'every-thursday': 'Every Thursday',
                'every-friday': 'Every Friday',
                'every-saturday': 'Every Saturday',
                'every-monday': 'Every Monday'
            };
            return recurringText[recurring] || 'Recurring';
        }
        const d = new Date(date);
        return d.toLocaleDateString('en-US', { 
            weekday: 'short', 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    },

    // Format time
    formatTime(time) {
        if (!time) return '';
        const [hours, minutes] = time.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour % 12 || 12;
        return `${displayHour}:${minutes} ${ampm}`;
    }
};

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => EventsManager.init());
} else {
    EventsManager.init();
}
