# Magazine Guide - RCCG Wisdom of Parish

## Overview
Your magazine system is now fully functional! Users can click on the "Magazine" dropdown in the navigation menu to access four different magazine sections:

1. **Health Session** - Health, wellness, and balanced living
2. **Youth Corner** - Content for young Christians
3. **Inspiration** - Inspiring stories and testimonies
4. **Spirituality** - Spiritual growth and biblical teachings

## How Users Access Magazines
1. Click on **"Magazine"** in the main navigation menu
2. Select any of the four options from the dropdown
3. Browse articles by:
   - Date filter (see ALL articles or filter by specific month)
   - Search by title or author name
4. Click on any article card to read the full content in a modal

## How to Add/Edit Articles (Developer Instructions)

### File Locations
- `health-session.html` - Health articles
- `youth-corner.html` - Youth articles
- `inspiration.html` - Inspiration articles
- `spirituality.html` - Spirituality articles

### How to Add a New Article

1. Open the magazine file you want to edit (e.g., `health-session.html`)
2. Find the `articlesData` array in the `<script>` section (near the bottom)
3. Add a new article object to the array:

```javascript
{
    id: 6,                                          // Unique ID number
    title: "Your Article Title Here",              // Article headline
    author: "Author Name",                          // Author/contributor name
    date: "2025-04-15",                            // Date in YYYY-MM-DD format
    description: "Short preview text shown on cards", // Max 1-2 sentences
    content: "Full article text here...",          // Full article content
    icon: "fas fa-icon-name"                       // FontAwesome icon class
}
```

### Available Icons
Use any FontAwesome icon class. Some popular health-related examples:
- `fas fa-heart-pulse` - Health/heart
- `fas fa-apple-alt` - Nutrition
- `fas fa-bed` - Sleep
- `fas fa-dumbbell` - Exercise
- `fas fa-brain` - Mental health
- `fas fa-person-running` - Fitness
- `fas fa-hands-praying` - Prayer/spirituality
- `fas fa-star` - Featured/important
- `fas fa-lightbulb` - Ideas/inspiration
- `fas fa-fire` - Energy/young/dynamic

Visit [FontAwesome Icons](https://fontawesome.com/icons) for more options.

### Tips for Writing Articles
- **Title**: Keep it concise (3-6 words)
- **Description**: Write a compelling preview (1-2 sentences)
- **Content**: Separate paragraphs with `\n` for line breaks
- **Date**: Use current or future dates (YYYY-MM-DD format)
- **Author**: Use pastor names or expert titles

### Example Article
```javascript
{
    id: 7,
    title: "Stress Management Through Prayer",
    author: "Pastor Grace Samuel",
    date: "2025-04-10",
    description: "Learn how prayer and mindfulness can reduce stress and improve wellbeing.",
    content: "Stress is a common challenge in today's world...\n\nPrayer offers a powerful antidote...\n\nHere are practical steps...",
    icon: "fas fa-peace"
}
```

## Date Filtering
Users can filter articles by month/year. Update the `filterMonth` dropdown options to match your article dates:

```html
<select id="filterMonth">
    <option value="">All Articles</option>
    <option value="2025-04">April 2025</option>
    <option value="2025-03">March 2025</option>
    <option value="2025-02">February 2025</option>
    <!-- Add more months as needed -->
</select>
```

## Featured Article
Each magazine page has a "Featured This Month" section. To change the featured article:

1. Find the featured section HTML (look for `Featured This Month` label)
2. Update the title, date, author, and description
3. Update the `onclick="openArticle(X)"` where X is the article ID to display

## Mobile Responsiveness
All magazine pages are fully responsive and work on:
- Desktop browsers
- Tablets
- Mobile phones

The dropdown menu automatically adapts for mobile devices with a hamburger menu.

## Testing Your Changes
1. Save the file
2. Open it in your browser (hit refresh/F5)
3. Test the:
   - Dropdown menu (Click "Magazine" in nav)
   - Search functionality
   - Date filtering
   - Article modal opening
   - Mobile responsiveness (resize browser or test on phone)

## Features Now Active
✅ Magazine dropdown menu - WORKING
✅ Four magazine sections - FULLY FUNCTIONAL
✅ Developer-controlled articles (no user submissions)
✅ Search by title/author
✅ Filter by date
✅ Beautiful modal article reader
✅ Responsive on all devices
✅ Mobile menu support

## Need Help?
- Check article dates are in YYYY-MM-DD format
- Ensure all article IDs are unique numbers
- Keep article descriptions short (for preview)
- Use \n for paragraph breaks in content
- Test in browser after saving changes
