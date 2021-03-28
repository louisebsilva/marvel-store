import { useState } from 'react';
import CardList from './CardList/CardList';
import Header from './header/Header';
import { SearchForm } from './style';
import { getMarvelData } from './client/index';
import Loader from './Loader/Loader';

const options = [ 'comics', 'characters' ];

const App: React.FC = () => {
  const [ searchInput, setSearchInput ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ searchOptions, setSearchOptions ] = useState(options[0]);
  const [ list, setList ] = useState([]);

  const search = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    setSearchInput('');

    try {
      const result = await getMarvelData(searchOptions);

      setList(result.data.data);
    } catch (error) {
      setList([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <SearchForm>
        <select name="searchType" onChange={(e) => setSearchOptions(e.target.value)}>
          { options.map((x, index) => <option value={x} key={index}>{x}</option>) }
        </select>
        <input type="text" id="searchInput" name="searchInput" onChange={(e) => setSearchInput(e.target.value)} placeholder="Digite o que deseja encontrar" value={searchInput} required />
        <button onClick={(e) => search(e)}>Buscar</button>
      </SearchForm>
      {loading ? <Loader /> : <CardList cardData={list} />}
    </div>
  );
};

export default App;
