import MarkdownIt from "markdown-it";
import parse from "html-react-parser";

const md = MarkdownIt({
  breaks: true,
  html: true,
});

const markdownPostprocessor = {
  name: "markdown",
  type: "postProcessor",

  process(value, _key, _options) {
    return parse(md.renderInline(value));
  },
};

export default markdownPostprocessor;
