# nationbuilder-scrolling-sections

Example files and documentation for implementing immersive scrolling pages in NationBuilder.

Once you've put the files in place, and modified _nav.html and layout.html in your template according to the instructions, you can create your very own immersive scrolling page.

## Creating a scrolling page in NationBuilder

It works by basically pulling in subpages as sections of a parent page, and hiding those subpages in the menu. So first you make the parent page and assign a special tag to it. Then you add additional sections as subpages. Finally, you reorder them as if they were in the menu using NationBuilder's concept of "Subnav pages."

1. Create a new page with a scrolling layout, go to the dashboard and click “+ New page," and choose "Basic page."
2. Once the page is created, click Settings in the horizontal tabs for the page (next to Content), and add the tag “Layout: Scrolling”
3. Next click the Subpages tab and create a new subpage for each section that you want, and always leave “Include in top nav” checked
4. Add a background. You add a background by selecting the “Settings” tab for the subpage you’re editing, then the "Social media" tab under that. Upload the image where it says “Thumbnail image for Facebook, etc.” and save.
5. Once you’ve got all your sections, it’s time to order them. Edit the parent page that you created in step 1, and choose “Subpages” and then choose “Subnav pages.” Drag them into the order you want. It should save the order automatically.
