# Learning Studio: Mohamed's Kids Site

A gift site with 23 activities, 8 languages, 5 levels and a welcome for the family.
Everything runs in the browser. It works offline after the first online visit.

## 1. Folder structure

```
tarafi-kids-studio/            <- this is the folder you upload (the repository)
│
├── index.html                 <- the whole site (games, design, text)     REQUIRED
├── db.js                      <- the database: words, sentences, professions, family, stories   REQUIRED
├── sw.js                      <- offline support (saves the site on the device)                  REQUIRED
├── manifest.json              <- lets the site be saved to a phone home screen                   REQUIRED
├── icon.svg                   <- the main icon (browser tab, home screen)                        REQUIRED
│
├── README.md                  <- this guide (optional, for you)
│
├── icons/                     <- phone and browser icons (PNG)                                   RECOMMENDED
│   ├── icon-192.png           <- 192 x 192 pixels
│   ├── icon-512.png           <- 512 x 512 pixels
│   └── apple-touch-icon.png   <- 180 x 180 pixels (iPhone home screen)
│
├── images/                    <- pictures you add yourself                                       OPTIONAL
│   ├── welcome.jpg            <- a family photo or a banner for the top of the page
│   ├── background.jpg         <- a soft background picture
│   └── words/                 <- one picture per word, named after the word (cat.webp, dog.webp)
│
├── audio/                     <- recorded voices (mp3), if you want real voices     OPTIONAL
│   └── en/cat.mp3, fr/chat.mp3 ...
│
└── og-image.png               <- picture shown when the link is shared (1200 x 630 pixels) RECOMMENDED
```

## 2. What each main file does

| File | Purpose | Change it? |
|------|---------|------------|
| `index.html` | Layout, colours, all 23 games, the prayer section | Only for design or new games |
| `db.js` | All learning content (add words, professions, family, stories here) | Yes, often |
| `sw.js` | Offline mode. Lists the files to save on the device | Only when you add files that must work offline |
| `manifest.json` | Name and icon when saved to a home screen | Only to change the name |
| `icon.svg` | Icon image | Replace with your own |

## 3. Adding pictures

1. Create a folder called `images` next to `index.html`.
2. Put your pictures inside. Use **WebP or JPG**, about **600 x 600 pixels** for word pictures, to keep the site fast.
3. Use simple names without spaces: `cat.webp`, `welcome.jpg`.
4. To show a picture on the welcome banner, tell the developer, or replace the line
   `<div class="welcome">` in `index.html` with an `<img src="images/welcome.jpg">` line.
5. To use word pictures in the games, add a picture field to each word in `db.js`.

Picture sources you can use legally:
- Your own photos (for family photos, get permission from the people in them).
- Free licence sites such as Pixabay, Unsplash and Openverse. Check the licence says free to use.
- Do **not** use pictures of copyrighted characters (for example Disney or Pokémon) on a public site.

## 4. Adding icons (phone and browser)

- Save a square picture as PNG at 192, 512 and 180 pixels, and put them in the `icons` folder.
- In `manifest.json`, add an entry for each file, for example:
  `{ "src": "icons/icon-192.png", "sizes": "192x192", "type": "image/png" }`
- Add `<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">` to the `<head>` of `index.html`.

## 5. Adding sound recordings (optional)

The site speaks with the device's built-in voices, so it works without any audio files.
To use your own recorded voice:
1. Save each recording as mp3 in `audio/<language>/` (for example `audio/en/cat.mp3`).
2. Ask the developer to change the speak function to play the file first, and only use the device voice if the file is missing.

## 6. Adding the sharing picture

Create `og-image.png` (1200 x 630 pixels) showing the studio's name and a picture, and add this to the `<head>` of `index.html`:

```html
<meta property="og:title" content="Learning Studio - A Gift for Mohamed's Children">
<meta property="og:image" content="https://YOUR-USERNAME.github.io/YOUR-REPO/og-image.png">
<meta property="og:description" content="Fun learning games in 8 languages for every age">
```

## 7. Publishing on GitHub Pages (free)

1. Create a repository on GitHub, for example `tarafi-kids-studio`.
2. Upload every file and folder above, keeping the same structure. The `index.html` file must be at the top level.
3. Go to **Settings → Pages**, choose branch `main` and folder `/ (root)`, then press **Save**.
4. After a minute, GitHub shows your web address. Open it once while online so it can save for offline use.

## 8. When you change something

- After uploading changes, open the site once while online. The offline copy then updates.
- If you add new picture or audio files that must work offline, also add their paths to the `CORE` list in `sw.js`, and change the cache name (for example `tarafi-studio-v4`) so the old copy is replaced.

## 9. Checklist before giving it to the children

- [ ] Open the site on a phone and a computer
- [ ] Check the sound works on the device you will use
- [ ] Check the Arabic and the other languages look right
- [ ] Ask a teacher or an imam to check the prayer section
- [ ] Ask a native speaker to check the translations in `db.js`
- [ ] Turn off internet and check that the site still opens
