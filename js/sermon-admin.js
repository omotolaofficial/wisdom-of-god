/**
 * Sermon Admin Management System
 * Handles sermon data storage and retrieval
 */

// Sermon data storage (persists in browser localStorage)
class SermonManager {
    constructor() {
        this.storageKey = 'wisdomSermons';
        this.initializeDefaultSermons();
    }

    // Initialize with default sermons if none exist
    initializeDefaultSermons() {
        if (!localStorage.getItem(this.storageKey)) {
            const defaultSermons = [
                {
                    id: 1,
                    title: "The Power of Faith",
                    author: "Pastor James Obot",
                    date: "2025-03-20",
                    description: "Exploring how faith transforms our lives and brings us closer to God.",
                    content: "In this powerful sermon, Pastor James Obot discusses the transformative power of faith. He explores Biblical examples of faith, discusses how faith overcomes fear, strengthens relationships, and opens doors to God's blessings. This sermon encourages believers to deepen their faith journey and trust God in all circumstances.",
                    audioFile: "sermons/faith-message.mp3",  // Path to audio file
                    videoFile: "sermons/faith-message.mp4",  // Path to video file
                    youtubeLink: "https://www.youtube.com/embed/y9qycXXtNiA",  // YouTube embed link
                    icon: "fas fa-heart",
                    category: "faith"
                },
                {
                    id: 2,
                    title: "Prayer: Speaking to God",
                    author: "Mother Grace Okafor",
                    date: "2025-03-15",
                    description: "Understanding prayer and its role in our spiritual communication with God.",
                    content: "This sermon explores the foundations of prayer. Mother Grace Okafor teaches believers how to pray effectively, the importance of consistency, and how God listens and answers prayers. Learn about intercession, thanksgiving, and how prayer changes our perspective.",
                    audioFile: "sermons/prayer-message.mp3",
                    videoFile: "sermons/prayer-message.mp4",
                    youtubeLink: "",
                    icon: "fas fa-hands-praying",
                    category: "prayer"
                },
                {
                    id: 3,
                    title: "Building Strong Families",
                    author: "Pastor Kunle Kunbi",
                    date: "2025-03-10",
                    description: "God's design for families and practical principles for stronger relationships.",
                    content: "Pastor Kunle shares Biblical principles for building strong, God-centered families. Topics include communication, forgiveness, parenting, and marital love. This sermon provides practical wisdom for families seeking to honor God in their relationships.",
                    audioFile: "sermons/family-message.mp3",
                    videoFile: "sermons/family-message.mp4",
                    youtubeLink: "https://www.youtube.com/embed/kctKM2ZCz2E",
                    icon: "fas fa-people-line",
                    category: "family"
                },
                {
                    id: 4,
                    title: "Overcoming Life's Challenges",
                    author: "Bishop Adekunle Adeyemi",
                    date: "2025-02-28",
                    description: "How faith and God's strength help us overcome obstacles and trials.",
                    content: "Bishop Adekunle teaches believers how to face challenges with confidence in God. Discussing perseverance, God's faithfulness, and how trials strengthen our faith. Learn Biblical strategies for overcoming difficulties.",
                    audioFile: "sermons/challenges-message.mp3",
                    videoFile: "sermons/challenges-message.mp4",
                    youtubeLink: "",
                    icon: "fas fa-mountain",
                    category: "growth"
                },
                {
                    id: 5,
                    title: "The Gift of Forgiveness",
                    author: "Sister Chioma Okonkwo",
                    date: "2025-02-20",
                    description: "Discover the healing power of forgiveness in God's plan.",
                    content: "This powerful message explores forgiveness from a Biblical perspective. Sister Chioma discusses how forgiveness liberates us, heals relationships, and brings peace. Learn Jesus's teaching on forgiveness and its transformative impact.",
                    audioFile: "sermons/forgiveness-message.mp3",
                    videoFile: "sermons/forgiveness-message.mp4",
                    youtubeLink: "",
                    icon: "fas fa-handshake",
                    category: "worship"
                },
                {
                    id: 6,
                    title: "Walking in God's Purpose",
                    author: "Reverend Michael Obi",
                    date: "2025-02-10",
                    description: "Finding and fulfilling God's unique purpose for your life.",
                    content: "Reverend Michael guides believers in discovering and walking in God's purpose. Discussing spiritual gifts, calling, and how to align life decisions with God's will. This sermon helps believers find meaning and direction in God's plan.",
                    audioFile: "sermons/purpose-message.mp3",
                    videoFile: "sermons/purpose-message.mp4",
                    youtubeLink: "",
                    icon: "fas fa-compass",
                    category: "growth"
                }
            ];
            
            localStorage.setItem(this.storageKey, JSON.stringify(defaultSermons));
        }
    }

    // Get all sermons
    getAllSermons() {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : [];
    }

    // Add new sermon
    addSermon(sermon) {
        const sermons = this.getAllSermons();
        
        // Generate new ID
        const maxId = sermons.length > 0 ? Math.max(...sermons.map(s => s.id)) : 0;
        sermon.id = maxId + 1;
        
        sermons.push(sermon);
        localStorage.setItem(this.storageKey, JSON.stringify(sermons));
        
        return sermon;
    }

    // Update existing sermon
    updateSermon(id, updatedData) {
        const sermons = this.getAllSermons();
        const index = sermons.findIndex(s => s.id === id);
        
        if (index !== -1) {
            sermons[index] = { ...sermons[index], ...updatedData };
            localStorage.setItem(this.storageKey, JSON.stringify(sermons));
            return sermons[index];
        }
        return null;
    }

    // Delete sermon
    deleteSermon(id) {
        const sermons = this.getAllSermons();
        const filtered = sermons.filter(s => s.id !== id);
        localStorage.setItem(this.storageKey, JSON.stringify(filtered));
        return true;
    }

    // Get sermon by ID
    getSermonById(id) {
        const sermons = this.getAllSermons();
        return sermons.find(s => s.id === id);
    }

    // Export sermons as JSON (for backup)
    exportSermons() {
        const sermons = this.getAllSermons();
        return JSON.stringify(sermons, null, 2);
    }

    // Import sermons from JSON
    importSermons(jsonData) {
        try {
            const sermons = JSON.parse(jsonData);
            if (Array.isArray(sermons)) {
                localStorage.setItem(this.storageKey, JSON.stringify(sermons));
                return true;
            }
        } catch (e) {
            console.error('Import failed:', e);
        }
        return false;
    }
}

// Initialize global sermon manager
const sermonManager = new SermonManager();
