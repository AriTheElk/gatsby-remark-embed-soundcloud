"use strict";

const visit = require("unist-util-visit");

module.exports = ({ markdownAST }, { width = "100%", height = 300, color = "#ff5500", autoplay = false } = {}) => {
  visit(markdownAST, "text", node => {
    const { value } = node;
    if (/https:\/\/soundcloud\.com\/([A-Za-z0-9-_]*)\/(sets\/|)([A-Za-z0-9-_]*)/.test(value)) {
      const soundcloudURL = value.replace(/(http|https)/, "");
      if (/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(soundcloudURL)) {
        node.type = "html";
        node.value = `<iframe width="${width}" height="${height}" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=${encodeURI(soundcloudURL)}&color=${color.replace("#", "%23")}&auto_play=${autoplay.toString()}&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`;
      }
    }
  });

  return markdownAST;
};