//components imports
import Cards from "../../components/Cards/Cards";
import Search from "../../components/Search/Search";

//react imports
import React,{ useEffect,useState } from "react";

//redux imports
import { useSelector,useDispatch } from "react-redux";
import { getData } from "../../redux/actions/actions";
import Pages from "../../components/Pagination/Pages";


const Home = () => {
  const [search, setSearch] = useState("")
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state);
  const URL_API = "https://rickandmortyapi.com/api/character";
  useEffect(() => {
    dispatch(getData(URL_API));
    }, []);

  const handleChange = (prop) => {
    console.log(search);
    const URL = `https://rickandmortyapi.com/api/character/?page=${prop}&name=${search}`;
    dispatch(getData(URL))
  }
  return (
    <main className="flex flex-col items-center gap-10 mt-10">
      <h1>Rick and Morty App</h1>
      <Search setSearch={setSearch} handleChange={handleChange} />
      <Pages info={data.info} handleChange={handleChange} />
      <Cards characters={data.results} />
      <Pages info={data.info} handleChange={handleChange} />
    </main>
  );
}

export default Home