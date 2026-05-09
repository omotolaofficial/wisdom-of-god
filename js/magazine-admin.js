/**
 * Magazine Admin Management System
 * Handles magazine article storage and retrieval across all sections
 */

class MagazineManager {
    constructor() {
        this.storageKey = 'wisdomMagazines';
        this.initializeDefaultMagazines();
    }

    // Initialize with default magazine data if none exist
    initializeDefaultMagazines() {
        if (!localStorage.getItem(this.storageKey)) {
            const defaultMagazines = {
                'health-session': [
                    {
                        id: 1,
                        title: "The Body as a Temple",
                        author: "Dr. Grace Obi",
                        date: "2025-03-15",
                        description: "Understanding how to care for your body as God's temple.",
                        content: "The Bible teaches us that our bodies are temples of the Holy Spirit. In this article, Dr. Grace Obi explores the importance of physical health as part of our spiritual journey. She discusses how exercise, proper nutrition, and rest are not worldly concerns but spiritual disciplines that honor God.",
                        icon: "fas fa-heart"
                    },
                    {
                        id: 2,
                        title: "Mental Wellness and Peace in Christ",
                        author: "Pastor James Obot",
                        date: "2025-03-08",
                        description: "Find peace and mental wellness through faith.",
                        content: "Mental health is an important aspect of overall wellness. Pastor Obot discusses how faith in Christ provides the foundation for mental peace. Learn Biblical principles for managing stress, anxiety, and depression through prayer and community support.",
                        icon: "fas fa-brain"
                    },
                    {
                        id: 3,
                        title: "Nutrition and Spiritual Disciplines",
                        author: "Sister Chioma Adeyemi",
                        date: "2025-02-28",
                        description: "How healthy eating connects to spiritual growth.",
                        content: "What we put into our bodies affects our spiritual lives. Sister Chioma explores the connection between nutrition and spiritual discipline. Discover how fasting, healthy choices, and gratitude transform both body and spirit.",
                        icon: "fas fa-apple"
                    },
                    {
                        id: 4,
                        title: "Sleep: A Necessity, Not Luxury",
                        author: "Dr. Adekunle Adeyemi",
                        date: "2025-02-15",
                        description: "Why rest is important for your health and faith.",
                        content: "In our busy world, sleep is often neglected. Dr. Adekunle explains why quality sleep is essential for health and worship. Learn practical tips for better sleep and why rest is God's design for restoration.",
                        icon: "fas fa-moon"
                    },
                    {
                        id: 5,
                        title: "Exercise and Christian Discipline",
                        author: "Coach Emmanuel Okafor",
                        date: "2025-02-01",
                        description: "Building a stronger body through consistent exercise.",
                        content: "Christian discipline extends to physical fitness. Coach Emmanuel discusses how regular exercise strengthens both body and character. Learn how the habits of exercise can deepen your faith journey.",
                        icon: "fas fa-dumbbell"
                    },
                    {
                        id: 6,
                        title: "Overcoming Unhealthy Eating Habits",
                        author: "Nutritionist Sarah Umoh",
                        date: "2025-01-20",
                        description: "Break free from unhealthy patterns with God's help.",
                        content: "Many struggle with unhealthy eating habits. Nutritionist Sarah provides practical strategies for change combined with Biblical principles. Learn how to overcome food-related challenges and develop a healthier relationship with eating.",
                        icon: "fas fa-utensils"
                    }
                ],
                'youth-corner': [
                    {
                        id: 1,
                        title: "Finding Your Purpose as a Young Christian",
                        author: "Pastor Timothy Okoye",
                        date: "2025-03-18",
                        description: "Discover God's unique plan for your life.",
                        content: "As a young Christian, finding your purpose can feel overwhelming. Pastor Timothy guides you through discovering God's call on your life. Learn how your gifts and passions align with God's purpose for you.",
                        icon: "fas fa-star"
                    },
                    {
                        id: 2,
                        title: "Navigating Peer Pressure with Godly Principles",
                        author: "Sister Folake Adeyemi",
                        date: "2025-03-10",
                        description: "Stand firm in your faith when facing peer pressure.",
                        content: "Peer pressure is real for young people. Sister Folake shares Biblical strategies for handling pressure to compromise your values. Discover how to maintain faith while staying connected to friends.",
                        icon: "fas fa-shield"
                    },
                    {
                        id: 3,
                        title: "Building Strong Friendships That Matter",
                        author: "Brother David Chisom",
                        date: "2025-02-25",
                        description: "Cultivate meaningful and Christ-centered friendships.",
                        content: "Not all friendships are equal. Brother David explains what makes a friendship strong and lasting. Learn how to build and maintain friendships centered on Christ and mutual growth.",
                        icon: "fas fa-handshake"
                    },
                    {
                        id: 4,
                        title: "Understanding Relationships God's Way",
                        author: "Pastor Adekunle & Sister Grace",
                        date: "2025-02-12",
                        description: "Biblical principles for dating and relationships.",
                        content: "Young Christians often struggle with understanding dating and relationships. This dynamic duo shares Biblical principles for healthy relationships that honor God and your partner.",
                        icon: "fas fa-heart"
                    },
                    {
                        id: 5,
                        title: "Using Your Talents to Serve Others",
                        author: "Brother Michael Obi",
                        date: "2025-01-30",
                        description: "Discover how to use your gifts for God's glory.",
                        content: "God has given you unique talents. Brother Michael helps you identify your gifts and discover how to use them in service. Learn how your abilities can make a difference in your community.",
                        icon: "fas fa-gift"
                    },
                    {
                        id: 6,
                        title: "Mental Health and Faith: Finding Balance",
                        author: "Counselor Chioma Eze",
                        date: "2025-01-15",
                        description: "Balancing mental health care with spiritual faith.",
                        content: "It's okay to seek help. Counselor Chioma discusses how mental health care and faith work together. Learn that seeking professional help is not a sign of weak faith but wisdom.",
                        icon: "fas fa-brain"
                    }
                ],
                'inspiration': [
                    {
                        id: 1,
                        title: "From Struggle to Success: A Journey of Faith",
                        author: "Mr. Solomon Ekpo",
                        date: "2025-03-20",
                        description: "One man's testimony of overcoming through faith.",
                        content: "Mr. Ekpo shares his inspiring journey from poverty and struggle to success through faith in God. His testimony demonstrates God's faithfulness and the power of perseverance in the face of challenges.",
                        icon: "fas fa-sunrise"
                    },
                    {
                        id: 2,
                        title: "Small Acts of Kindness, Big Impact",
                        author: "Sister Chioma Okonkwo",
                        date: "2025-03-08",
                        description: "How small gestures change lives and communities.",
                        content: "One act of kindness can change someone's life. Sister Chioma shares inspiring stories of how simple acts of compassion created ripple effects in communities. Learn how you can make a difference today.",
                        icon: "fas fa-hands-helping"
                    },
                    {
                        id: 3,
                        title: "Overcoming Fear Through Faith",
                        author: "Pastor Michael Obi",
                        date: "2025-02-20",
                        description: "How faith conquers our deepest fears.",
                        content: "Fear is a common challenge. Pastor Michael shares how he overcame debilitating fear through faith in God. Discover Biblical principles for facing fear and stepping into the purpose God has for you.",
                        icon: "fas fa-shield-alt"
                    },
                    {
                        id: 4,
                        title: "Finding Your Why: Living a Meaningful Life",
                        author: "Dr. Adekunle Adeyemi",
                        date: "2025-02-10",
                        description: "Discover meaning and purpose in every day.",
                        content: "Life without purpose feels empty. Dr. Adeyemi guides you in discovering your 'why'—the deeper meaning behind your actions. Learn how purpose transforms ordinary life into an extraordinary journey.",
                        icon: "fas fa-compass"
                    },
                    {
                        id: 5,
                        title: "The Power of Forgiveness",
                        author: "Reverend Grace Samuel",
                        date: "2025-01-25",
                        description: "Liberation through the act of forgiveness.",
                        content: "Unforgiveness binds us in chains. Reverend Samuel teaches about the transformative power of forgiveness. Discover how forgiving others and yourself opens the door to healing and freedom.",
                        icon: "fas fa-dove"
                    },
                    {
                        id: 6,
                        title: "Grace in the Midst of Loss",
                        author: "Sister Ngozi Umeh",
                        date: "2025-01-10",
                        description: "Finding God's grace during times of grief.",
                        content: "Loss is part of life, but God's grace sustains us. Sister Ngozi shares her testimony of finding God's grace during a season of loss. Learn how faith helps us process grief and find hope again.",
                        icon: "fas fa-light-bulb"
                    }
                ],
                'spirituality': [
                    {
                        id: 1,
                        title: "The Transformative Power of Prayer",
                        author: "Bishop John Okonkwo",
                        date: "2025-03-22",
                        description: "How prayer transforms our relationship with God.",
                        content: "Prayer is the heartbeat of spiritual life. Bishop Okonkwo explores how prayer transforms us from the inside out. Discover the depths of communion with God through intentional, powerful prayer.",
                        icon: "fas fa-hands-praying"
                    },
                    {
                        id: 2,
                        title: "Understanding God's Love Through Scripture",
                        author: "Pastor Grace Samuel",
                        date: "2025-03-10",
                        description: "Exploring the depths of God's love in the Bible.",
                        content: "God's love is the foundation of everything. Pastor Samuel takes us through Scripture to reveal the vastness of God's love. Learn how His love transforms every aspect of our lives.",
                        icon: "fas fa-book-heart"
                    },
                    {
                        id: 3,
                        title: "Living out the Fruit of the Spirit",
                        author: "Reverend Adekunle Adeyemi",
                        date: "2025-02-25",
                        description: "Cultivating love, joy, peace, and other fruits.",
                        content: "The Holy Spirit produces fruit in our lives. Reverend Adeyemi explains each fruit of the Spirit and how to cultivate them daily. Learn practical ways to develop these spiritual qualities.",
                        icon: "fas fa-tree"
                    },
                    {
                        id: 4,
                        title: "Knowing God's Will for Your Life",
                        author: "Bishop Michael Obi",
                        date: "2025-02-12",
                        description: "Discovering and following God's plan.",
                        content: "God has a specific plan for each of us. Bishop Obi teaches how to discern God's will through Scripture, prayer, and community. Learn to recognize and confidently follow God's direction.",
                        icon: "fas fa-compass"
                    },
                    {
                        id: 5,
                        title: "The Journey of Spiritual Maturity",
                        author: "Sister Chioma Okafor",
                        date: "2025-01-28",
                        description: "Growing in faith and Christlike character.",
                        content: "Spiritual maturity is a journey, not a destination. Sister Chioma outlines the stages of spiritual growth and how to move forward. Discover how God shapes us into His image over time.",
                        icon: "fas fa-seedling"
                    },
                    {
                        id: 6,
                        title: "Cultivating a Lifestyle of Worship",
                        author: "Pastor Timothy Okoye",
                        date: "2025-01-15",
                        description: "Making worship a daily practice.",
                        content: "Worship is not just for Sunday service. Pastor Timothy teaches how to cultivate a lifestyle of worship in daily life. Learn how worship transforms your perspective and draws you closer to God.",
                        icon: "fas fa-spiral"
                    }
                ]
            };
            
            localStorage.setItem(this.storageKey, JSON.stringify(defaultMagazines));
        }
    }

    // Get all magazines
    getAllMagazines() {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : {};
    }

    // Get articles for specific magazine
    getArticles(magazine) {
        const magazines = this.getAllMagazines();
        return magazines[magazine] || [];
    }

    // Add new article to magazine
    addArticle(magazine, article) {
        const magazines = this.getAllMagazines();
        
        if (!magazines[magazine]) {
            magazines[magazine] = [];
        }

        // Generate new ID
        const maxId = magazines[magazine].length > 0 
            ? Math.max(...magazines[magazine].map(a => a.id)) 
            : 0;
        article.id = maxId + 1;
        
        magazines[magazine].push(article);
        localStorage.setItem(this.storageKey, JSON.stringify(magazines));
        
        return article;
    }

    // Update existing article
    updateArticle(magazine, id, updatedData) {
        const magazines = this.getAllMagazines();
        const articles = magazines[magazine] || [];
        const index = articles.findIndex(a => a.id === id);
        
        if (index !== -1) {
            articles[index] = { ...articles[index], ...updatedData };
            magazines[magazine] = articles;
            localStorage.setItem(this.storageKey, JSON.stringify(magazines));
            return articles[index];
        }
        return null;
    }

    // Delete article
    deleteArticle(magazine, id) {
        const magazines = this.getAllMagazines();
        const articles = magazines[magazine] || [];
        const filtered = articles.filter(a => a.id !== id);
        magazines[magazine] = filtered;
        localStorage.setItem(this.storageKey, JSON.stringify(magazines));
        return true;
    }

    // Get article by ID
    getArticleById(magazine, id) {
        const articles = this.getArticles(magazine);
        return articles.find(a => a.id === id);
    }

    // Export all magazines as JSON
    exportMagazines() {
        const magazines = this.getAllMagazines();
        return JSON.stringify(magazines, null, 2);
    }

    // Import magazines from JSON
    importMagazines(jsonData) {
        try {
            const magazines = JSON.parse(jsonData);
            if (typeof magazines === 'object' && !Array.isArray(magazines)) {
                localStorage.setItem(this.storageKey, JSON.stringify(magazines));
                return true;
            }
        } catch (e) {
            console.error('Import failed:', e);
        }
        return false;
    }
}

// Initialize global magazine manager
const magazineManager = new MagazineManager();
