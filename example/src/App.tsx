import Gist from 'embed-gist';

function App() {

  const GistStyle = `
    .js-file-line-container {
      //background : #f7f7f7 !important;
      background: red !important;
      font-size : 200px !important;
    }
  `;

  return (
    <div className="App">
       <Gist

          // style  ={GistStyle}
          styleSheetUrl="https://pleasedont.hammamikhairi.repl.co/css/gist.css"
          gistId = '7822af90858ef65012ea500bcecf1612'
          file = 'error_handler.py'
          // gistUrl = 'https://gist.github.com/makupi/c508c9d33bb01dcc04e57d1a93c23ae1#file-reactionroles-discord-py'
        />
    </div>
  );
}

export default App;