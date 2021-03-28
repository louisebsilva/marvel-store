import { useEffect, useState } from 'react';
import CardList from './CardList/CardList';
import Header from './header/Header';
import mockData from './mock.json';
import { SearchForm } from './style';
import * as client from './client/index';

const options = [ 'Comic', 'Character' ];

const App: React.FC = () => {
  const [ searchInput, setSearchInput ] = useState('');
  const [ searchOptions, setSearchOptions ] = useState(options[0]);
  const [ list, setList ] = useState([]);

  useEffect(() => {
    const loginData = {
      userEmail: 'ale@alejandro.com',
      password: 'ladygaga'
    };

    const registerData = {
      userName: 'Judas',
      userEmail: 'judas@judas.com',
      password: 'thefamemonster'
    };

    const favoriteData = {
      userID: 1,
      favoriteID: '82967'
    };

    // client.createUser(registerData).then((result) => console.log(result.data));
    client.login(loginData).then((result) => {
      console.log(result.data.token)
      client.removeFavorite({ favoriteID: '12345', userID: 1 }, result.data.token)
        .then((res) => console.log(res.data))
        .catch(err => console.log(err));
    });
  }, []);

  const search = (e: any) => {
    e.preventDefault();
    console.log('Search!');
    setSearchInput('');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setList(mockData.results as any);
  };

  return (
    <div>
      <Header />
      <SearchForm>
        <select name="searchType" onChange={(e) => setSearchOptions(e.target.value)}>
          { options.map((x, index) => <option value={x} key={index}>{x}</option>) }
        </select>
        <input type="text" id="searchInput" name="searchInput" onChange={(e) => setSearchInput(e.target.value)} placeholder="Digite o que deseja encontrar" value={searchInput} required />
        <button disabled={searchInput.length === 0} onClick={(e) => search(e)}>Buscar</button>
      </SearchForm>
      <CardList cardData={list} />
    </div>
  );
};

export default App;
