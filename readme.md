# gatsby-remark-embed-soundcloud

Embed Soundcloud songs and sets in your markdown files!

### [View a live demo here](https://words.garet.io/gatsby-remark-embed-soundcloud/)

<a href="https://www.buymeacoffee.com/gm" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

## Install

1. Install plugin to your site:

```bash
yarn add gatsby-remark-embed-soundcloud
```

2. Add following to your `gatsby-config.js`:

```js
    plugins: [
      {
        resolve: "gatsby-transformer-remark",
        options: {
          plugins: [
            "gatsby-remark-embed-soundcloud"
          ]
        }
      },
```

3. Restart gastby.

## Usage

```markdown
## My blog post

This is an example of embedding a single soundcloud track.
Just type your markdown as you normally do, and then insert a valid
soundcloud link anywhere to automatically transform it into an embed!

https://soundcloud.com/gareteliot/beacons

You can also embed soundcloud sets the exact same way!

https://soundcloud.com/gareteliot/sets/coastline-paradox
```

## Configuration

```js
    plugins: [
      {
        resolve: "gatsby-transformer-remark",
        options: {
          plugins: [
          {
            resolve: "gatsby-remark-embed-soundcloud",
            options: {
              width: 800, // default is "100%"
              height: 500, // default is 300
              color: "#ff00ff", // default is #ff5500
              autoplay: true, // default is false
            }
          }
          ]
        }
      },
```

## License

MIT
