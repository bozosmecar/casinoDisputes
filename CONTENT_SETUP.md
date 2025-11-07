# Casino Disputes - JSON Content System Setup

## ✅ Changes Made

Tina CMS has been completely removed and replaced with a simple JSON-based content system.

### Files Removed
- `pages/admin/` - Admin page directory removed
- All Tina-specific imports removed from `pages/_app.tsx`

### Files Created
1. **`content/blog-posts.json`** - JSON file containing all blog posts
2. **`lib/content-loader.ts`** - Utility functions to read and manage JSON content

### Files Updated
1. **`pages/_app.tsx`** - Removed TinaEditProvider, TinaCMS, and related imports
2. **`pages/blog/index.tsx`** - Updated to use `getBlogPostsSorted()` from content-loader
3. **`pages/blog/[slug].tsx`** - Updated to use `getBlogPostBySlug()` for individual posts

## 📝 Content Format

Blog posts are stored in `content/blog-posts.json` with the following structure:

```json
[
  {
    "id": "post-id",
    "slug": "post-slug",
    "title": "Post Title",
    "description": "Short description",
    "date": "2025-11-06",
    "tags": "tag1,tag2,tag3",
    "imageUrl": "/path/to/image.jpg",
    "content": "# Markdown content here\n\nSupports **markdown** syntax"
  }
]
```

## 🔧 Available Functions

All functions are in `lib/content-loader.ts`:

```typescript
// Get all blog posts
getAllBlogPosts(): BlogPost[]

// Get a single post by slug
getBlogPostBySlug(slug: string): BlogPost | null

// Get sorted posts (newest first)
getBlogPostsSorted(): BlogPost[]

// Get all post slugs (for static generation)
getAllBlogPostSlugs(): Array<{ slug: string }>

// Search posts by keyword
searchBlogPosts(keyword: string): BlogPost[]
```

## 📂 Adding New Content

### To add a new blog post:

1. Edit `content/blog-posts.json`
2. Add a new object to the array:

```json
{
  "id": "my-article",
  "slug": "my-article",
  "title": "My Article Title",
  "description": "A brief description",
  "date": "2025-11-06",
  "tags": "tag1,tag2",
  "imageUrl": "/posts/my-image.jpg",
  "content": "# My Article\n\nContent here..."
}
```

3. The post will automatically appear on:
   - `http://localhost:3000/blog` (listing)
   - `http://localhost:3000/blog/my-article` (individual post)

## 🚀 Running the Dev Server

```bash
yarn dev
```

The app will be available at `http://localhost:3000`

## ⚙️ Configuration

### Static Generation (ISR)
Posts are generated at build time with incremental static regeneration (ISR) enabled:
- Revalidation interval: 60 seconds
- Fallback: false

This means:
- Pages are pre-generated for performance
- JSON changes will be reflected within 60 seconds
- No server-side rendering overhead

## 📊 Blog Features

- ✅ Markdown support in content
- ✅ Read time calculation
- ✅ Date formatting
- ✅ Tag support
- ✅ Image support
- ✅ Search functionality
- ✅ Static site generation for fast load times

## 🔍 Quick Commands

```bash
# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Run linter
yarn lint
```

## 📋 Next Steps

1. Add more blog posts to `content/blog-posts.json`
2. Add featured images to `public/posts/` directory
3. Customize page layouts in `views/` folder
4. Update page content in `pages/*.tsx` files

All content is now easily manageable through simple JSON files!
