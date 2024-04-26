import { useState } from 'react'
import './App.css'

function App() {
  const [musicData, setMusicData] = useState([
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording',
    name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
  ]);
///
const albumsMasVendidos = musicData.filter(album => album.sales > 1000000);

let totalAlbumSales = 0;
musicData.forEach(album => {
  totalAlbumSales += album.sales;
});

///
const longNames = musicData.filter(function(album) {
  return album.name.length > 8;
});


///

const handleAdd = (event) => {
  event.preventDefault();
  const newArtist = event.target.elements.newArtist.value;
  const newAlbum = event.target.elements.newAlbum.value;
  const newSales = parseInt(event.target.elements.newSales.value); 

  setMusicData([...musicData, { artist: newArtist, name: newAlbum, sales: newSales }]);

  event.target.elements.newArtist.value = '';
  event.target.elements.newAlbum.value = '';
  event.target.elements.newSales.value = '';
};

const handleDelete = (itemToDelete) => {
  setMusicData(musicData.filter((item) => item.artist !== itemToDelete.artist)); 
};

const [searchResults, setSearchResults] = useState([]); 

const handleSearch = (event) => {
  event.preventDefault(); 
  const searchTermLower = event.target.elements.search.value.toLowerCase();
  const filteredResults = musicData.filter((item) =>
    item.artist.toLowerCase().includes(searchTermLower) ||
    item.name.toLowerCase().includes(searchTermLower)
  );
  if(filteredResults.length == 1){

    setSearchResults(filteredResults[0]);
  }
  else{
    setSearchResults([]);

  }
};
///
  return (
    <div>

  {
    albumsMasVendidos.map((album) => (
      <p>
      {`${album.artist} es un gran artista`}
    </p>
    )
    )
  }
  <hr />
  <p>{`Numero total de copias ${totalAlbumSales}`}</p>
  <hr />
  
  {
    longNames.map((name) => (
      <p>
      {`${name.artist} tiene un nombre muy grande`}
    </p>
    )
    )
  }
  <hr />
<div>
<form onSubmit={handleAdd}>
        <label htmlFor="newArtist">Artist</label>
        <input type="text" id="newArtist" name="newArtist" placeholder="Ingrese un artista" required />
        <br />
        <br />
        <label htmlFor="newAlbum">Album</label>
        <input type="text" id="newAlbum" name="newAlbum" placeholder="Ingrese un álbum" required />
        <br />
        <br />
        <label htmlFor="newSales">Ventas</label>
        <input type="number" id="newSales" name="newSales" placeholder="Ingrese ventas (número)" required />
        <br />
        <br />
        <button type="submit">Agregar</button>
        <hr />
      </form>
<table> 
        <thead>
          <tr>
            <th>Artist</th>
            <th>Album</th>
            <th>Sales</th>
            <th>Actions</th> 
          </tr>
        </thead>
        <tbody>
          {musicData.map((item) => (
            <tr key={item.artist}> 
              <td>{item.artist}</td>
              <td>{item.name}</td>
              <td>{item.sales.toLocaleString()}</td> 
              <td> 
                <button onClick={() => handleDelete(item)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <form onSubmit={handleSearch}>
        <label htmlFor="search">Buscar:</label>
        <input type="text" id="search" name="search" placeholder="Buscar artista o álbum" />
        <button type="submit">Buscar</button>
      </form>
</div>
{
  searchResults.name == undefined || searchResults.name == "" ? (
    <p>Resultado No Encontrado</p>

  ) : (
    <p>{`El álbum ${searchResults.name} del artista ${searchResults.artist} vendió aproximadamente ${searchResults.sales} copias.`}</p>

  )
}
    </div>
  )
}

export default App
