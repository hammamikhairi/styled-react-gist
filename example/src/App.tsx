import Gist from 'embed-gist';

function App() {

  const css = `
  .js-file-line-container {
    background : whitesmoke !important;
  }
  .gist-meta{
    display : none !important
  }
  .gist-data {
    background : whitesmoke !important;
    padding : 1rem 0.5rem !important;
    // background: transparent !important;
  }
  `;

  return (
    <Gist
      // gistId = '189e5c6bbc7217b8bdf952ff243c2411'
      file = 'error_handler_clean.py'
      gistUrl = 'https://gist.github.com/EvieePy/7822af90858ef65012ea500bcecf1612#file-error_handler-py'

      cssString  = {css}
      styleSheetUrl = "https://pleasedont.hammamikhairi.repl.co/css/npm.css"
    />
  );
}

export default App;