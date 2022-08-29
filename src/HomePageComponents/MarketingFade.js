import parse from "html-react-parser";

function MarketingFade (args) {
  return <h1>{parse(args.currentWord)}</h1>
}
export default MarketingFade;