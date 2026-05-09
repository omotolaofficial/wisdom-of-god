/**
 * ContactsManager - Centralized contact and church info management
 * Persists data to browser LocalStorage
 * Default contacts include key HODs and church leadership
 */

const ContactsManager = {
    // LocalStorage key
    STORAGE_KEY: 'church_contacts',
    CHURCH_INFO_KEY: 'church_info',
    DEFAULT_ADMIN_PASSWORD: '123456',

    // Initialize with default contacts if none exist
    init() {
        if (!localStorage.getItem(this.STORAGE_KEY)) {
            const defaultContacts = [
                {
                    id: 1,
                    name: 'Pastor Adekunle Johnson',
                    title: 'Senior Pastor',
                    department: 'leadership',
                    phone: '+234 (0) 902 345 6789',
                    email: 'pastor@wisdomchurch.org',
                    office_location: 'Main Office, Block A',
                    office_hours: 'Mon - Fri: 9:00 AM - 5:00 PM'
                },
                {
                    id: 2,
                    name: 'Pastor Blessing Okafor',
                    title: 'Assistant Pastor',
                    department: 'leadership',
                    phone: '+234 (0) 902 345 6790',
                    email: 'asst.pastor@wisdomchurch.org',
                    office_location: 'Main Office, Block B',
                    office_hours: 'Mon - Fri: 10:00 AM - 4:00 PM'
                },
                {
                    id: 3,
                    name: 'Mrs. Folake Adeyemi',
                    title: 'Choir Master',
                    department: 'ministry',
                    phone: '+234 (0) 903 456 7891',
                    email: 'choir@wisdomchurch.org',
                    office_location: 'Music Hall',
                    office_hours: 'Tue & Thu: 6:00 PM - 7:30 PM'
                },
                {
                    id: 4,
                    name: 'Deacon Samuel Oluwaseun',
                    title: 'Treasurer',
                    department: 'finance',
                    phone: '+234 (0) 901 234 5678',
                    email: 'treasurer@wisdomchurch.org',
                    office_location: 'Finance Office, Block C',
                    office_hours: 'Mon - Fri: 9:30 AM - 3:30 PM'
                },
                {
                    id: 5,
                    name: 'Sister Chioma Uche',
                    title: 'Women Ministry Leader',
                    department: 'ministry',
                    phone: '+234 (0) 904 567 8912',
                    email: 'women.ministry@wisdomchurch.org',
                    office_location: "Women's Centre",
                    office_hours: 'Wed: 4:00 PM - 6:00 PM'
                },
                {
                    id: 6,
                    name: 'Brother David Nnamdi',
                    title: 'Men Fellowship Coordinator',
                    department: 'ministry',
                    phone: '+234 (0) 905 678 9123',
                    email: 'men.fellowship@wisdomchurch.org',
                    office_location: 'Fellowship Hall',
                    office_hours: 'Sat: 2:00 PM - 4:00 PM'
                },
                {
                    id: 7,
                    name: 'Pastor Mercy Adebayo',
                    title: 'Youth Ministry Leader',
                    department: 'ministry',
                    phone: '+234 (0) 906 789 0234',
                    email: 'youth@wisdomchurch.org',
                    office_location: 'Youth Centre',
                    office_hours: 'Fri: 5:00 PM - 7:00 PM'
                },
                {
                    id: 8,
                    name: 'Mrs. Ngozi Okoro',
                    title: 'Children Ministry Leader',
                    department: 'ministry',
                    phone: '+234 (0) 907 890 1345',
                    email: 'children@wisdomchurch.org',
                    office_location: "Children's Hall",
                    office_hours: 'Sun: 8:00 AM - 9:00 AM'
                },
                {
                    id: 9,
                    name: 'Mr. Tunde Olawale',
                    title: 'Secretary',
                    department: 'administration',
                    phone: '+234 (0) 908 901 2456',
                    email: 'secretary@wisdomchurch.org',
                    office_location: 'Main Office, Reception',
                    office_hours: 'Mon - Fri: 8:30 AM - 5:00 PM'
                },
                {
                    id: 10,
                    name: 'Dr. Oyekunle Adewale',
                    title: 'Pastoral Counselor',
                    department: 'support',
                    phone: '+234 (0) 909 012 3567',
                    email: 'counselor@wisdomchurch.org',
                    office_location: 'Counseling Room',
                    office_hours: 'Mon - Fri: 2:00 PM - 5:00 PM (By Appointment)'
                }
            ];
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(defaultContacts));
        }

        if (!localStorage.getItem(this.CHURCH_INFO_KEY)) {
            const defaultChurchInfo = {
                name: 'RCCG Wisdom of Parish',
                address: 'Plot 123, Mobil Road, Lekki Phase 1, Lagos, Nigeria',
                phone: '+234 (0) 701 234 5678',
                email: 'info@wisdomchurch.org',
                website: 'www.wisdomchurch.org',
                service_times: [
                    { day: 'Sunday', time: '9:00 AM - 11:30 AM', service: 'Main Worship Service' },
                    { day: 'Tuesday', time: '6:00 PM - 7:30 PM', service: 'Digging Deep (Bible Study)' },
                    { day: 'Friday', time: '6:00 PM - 7:30 PM', service: 'Faith Clinic (Prayer)' }
                ],
                prayer_line: '+234 (0) 702 345 6789',
                office_location: 'Church Headquarters, Block A, Main Campus',
                vision: 'Building a community of faith, worship, and service in the love of Christ.',
                mission: 'To evangelize, disciple, and equip believers to impact their communities with the Gospel of Jesus Christ.'
            };
            localStorage.setItem(this.CHURCH_INFO_KEY, JSON.stringify(defaultChurchInfo));
        }
    },

    // Get all contacts
    getAll() {
        this.init();
        const contacts = localStorage.getItem(this.STORAGE_KEY);
        return contacts ? JSON.parse(contacts) : [];
    },

    // Get contacts by department
    getByDepartment(department) {
        return this.getAll().filter(contact => contact.department === department);
    },

    // Get single contact by ID
    getById(id) {
        return this.getAll().find(contact => contact.id === id);
    },

    // Add new contact
    add(contactData) {
        const contacts = this.getAll();
        const newId = contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1 : 1;
        
        const newContact = {
            id: newId,
            ...contactData,
            created_at: new Date().toISOString()
        };
        
        contacts.push(newContact);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(contacts));
        return newContact;
    },

    // Update contact
    update(id, contactData) {
        const contacts = this.getAll();
        const index = contacts.findIndex(c => c.id === id);
        
        if (index === -1) return null;
        
        contacts[index] = {
            ...contacts[index],
            ...contactData,
            updated_at: new Date().toISOString()
        };
        
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(contacts));
        return contacts[index];
    },

    // Delete contact
    delete(id) {
        const contacts = this.getAll();
        const filtered = contacts.filter(c => c.id !== id);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filtered));
        return true;
    },

    // Get church info
    getChurchInfo() {
        this.init();
        const info = localStorage.getItem(this.CHURCH_INFO_KEY);
        return info ? JSON.parse(info) : {};
    },

    // Update church info
    updateChurchInfo(infoData) {
        const currentInfo = this.getChurchInfo();
        const updated = {
            ...currentInfo,
            ...infoData,
            updated_at: new Date().toISOString()
        };
        localStorage.setItem(this.CHURCH_INFO_KEY, JSON.stringify(updated));
        return updated;
    },

    // Get all unique departments
    getDepartments() {
        const contacts = this.getAll();
        const departments = [...new Set(contacts.map(c => c.department))];
        return departments.sort();
    },

    // Format phone for display
    formatPhone(phone) {
        return phone || 'Not available';
    },

    // Format email for display
    formatEmail(email) {
        return email || 'Not available';
    },

    // Department labels for display
    getDepartmentLabel(dept) {
        const labels = {
            'leadership': 'Church Leadership',
            'ministry': 'Ministry Leaders',
            'finance': 'Finance Department',
            'administration': 'Administration',
            'support': 'Support Services'
        };
        return labels[dept] || dept.charAt(0).toUpperCase() + dept.slice(1);
    },

    // Get department icon
    getDepartmentIcon(dept) {
        const icons = {
            'leadership': 'fas fa-crown',
            'ministry': 'fas fa-hands-praying',
            'finance': 'fas fa-wallet',
            'administration': 'fas fa-clipboard',
            'support': 'fas fa-heart'
        };
        return icons[dept] || 'fas fa-user';
    }
};

// Initialize on load
ContactsManager.init();
