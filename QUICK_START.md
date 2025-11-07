# 🚀 Quick Start Guide - JSON Content System

## What Changed?

Tina CMS has been completely removed and replaced with a **simple, lightweight JSON-based content system**.

### ✅ Benefits

- **No dependencies**: No complex CMS framework
- **Simple**: Just edit JSON files
- **Fast**: Static site generation with ISR (Incremental Static Regeneration)
- **Easy to deploy**: Works with any hosting provider
- **Version control friendly**: All content is in git

## 📁 Content Structure

```
content/
├── blog-posts.json          ← All your blog posts go here
```

## 📝 Adding a Blog Post

Open `content/blog-posts.json` and add a new object:

```json
{
  "id": "my-first-post",
  "slug": "my-first-post",
  "title": "My First Post",
  "description": "This is my first blog post about casino disputes",
  "date": "2025-11-06",
  "tags": "casino,disputes,beginner",
  "imageUrl": "/posts/my-image.jpg",
  "content": "# My First Post\n\nWelcome to my blog!\n\n## Section 1\n\nHere's some content with **bold** and *italic* text.\n\n- List item 1\n- List item 2"
}
```

Then **save the file** and the changes will appear on your site within 60 seconds (ISR).

## 🎨 Content Tips

- **Markdown syntax**: Full markdown support in `content` field
- **Images**: Place images in `public/posts/` and reference as `/posts/image-name.jpg`
- **Dates**: Use format `YYYY-MM-DD` for consistent sorting
- **Tags**: Comma-separated, no spaces (e.g., `"tag1,tag2,tag3"`)

## 🔗 Content URLs

Your posts automatically appear at:
- **List**: `http://localhost:3000/blog`
- **Individual**: `http://localhost:3000/blog/my-first-post`

The slug (URL path) comes from the `slug` field in JSON.

## 🛠️ Editing Content

### Option 1: Direct JSON Editing (Easiest)
- Edit `content/blog-posts.json` in any text editor
- Save and wait ~60 seconds for changes to reflect

### Option 2: Using a JSON Editor
- Use VS Code with JSON formatting
- Use an online JSON editor
- Use a dedicated JSON management tool

## 📊 Example Posts

The system comes with 2 example posts:
1. **test-article** - Getting Started with Casino Disputes
2. **dispute-resolution-guide** - Complete Guide to Dispute Resolution

You can edit or delete these!

## 🚀 Starting the Dev Server

```bash
cd C:\Users\Domce\Desktop\CasinoDisputes\casinoDisputes
yarn dev
```

Then visit: **http://localhost:3000**

## 📋 Available Functions

All in `lib/content-loader.ts`:

```typescript
// Get all posts
getAllBlogPosts()

// Get post by slug
getBlogPostBySlug("my-first-post")

// Get sorted posts (newest first)
getBlogPostsSorted()

// Search posts
searchBlogPosts("keyword")
```

## 🎯 Next Steps

1. ✏️ Edit existing posts in `content/blog-posts.json`
2. ➕ Add new posts to the JSON file
3. 🖼️ Add featured images to `public/posts/`
4. 🎨 Customize pages in `pages/` folder
5. 🚀 Deploy to production

## ❓ FAQ

**Q: Do I need to restart the dev server after editing content?**
A: No! Changes appear within 60 seconds (ISR).

**Q: Can I use HTML in the content?**
A: No, but you can use Markdown which is more user-friendly.

**Q: How do I add more fields to posts?**
A: Edit the JSON schema and update the `BlogPost` interface in `lib/content-loader.ts`.

**Q: Can I have drafts?**
A: Yes! Add a `"published": false` field and filter by it in the loader functions.

**Q: How do I migrate content from Tina?**
A: Export your Tina content and manually create JSON objects in the same format.

## 🆘 Troubleshooting

**Posts not showing up?**
- Check JSON syntax is valid (use JSON linter)
- Make sure `slug` field exists and is unique
- Restart dev server

**Changes not reflecting?**
- Wait up to 60 seconds for ISR
- Clear browser cache (Ctrl+Shift+Del)
- Check console for errors

**Images not loading?**
- Verify image path starts with `/posts/`
- Image must exist in `public/posts/` folder
- Check file name matches exactly (case-sensitive on Linux/Mac)

---

**That's it! Your content is now managed through simple, git-friendly JSON files.** 🎉
