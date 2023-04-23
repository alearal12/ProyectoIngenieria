import './App.css';

function App() {

    const getData = async (url) => {
      const newData = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'appliction/json'
          }
        })
        .then(res => res.json());
      console.log(newData);
    }

    getData('/api');
    return ( 
      <div className= "App">

      </div>
    );
}

export default App;