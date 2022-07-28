import Gist from 'styled-react-gist';

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
      gistId = '189e5c6bbc7217b8bdf952ff243c2411'
      file = 'styled-react-gist.jsx'
      // gistUrl = 'https://gist.github.com/hammamikhairi/189e5c6bbc7217b8bdf952ff243c2411'

      cssString  = {css}
      styleSheetUrl = "https://pleasedont.hammamikhairi.repl.co/css/npm.css"
    />
  );
}

export default App;