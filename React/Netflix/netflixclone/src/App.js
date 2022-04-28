import React, {useEffect, useState} from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';


export default() => {

  const [movieList, setMovieList] = useState([]);
  const [FeaturedData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=>{
    const loadAll = async () => {
      //pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //pegando filme em destaque
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChonsen = Math.floor(Math.random() * originals[0].items.results.length - 1);
      let chonsen = originals[0].items.results[randomChonsen];
      let chonsenInfo = await Tmdb.getMovieInfo(chonsen.id, 'tv');
      

        setFeaturedData(chonsenInfo);
      
    }
    loadAll();
  }, []);

  useEffect(()=>{
    const scrollListener = () => {
      if (window.scrollY > 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
     }
    

    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
   }

  }, []);

  return(
  <div className="page">
    
    
    <Header black = {blackHeader} />
    

      {FeaturedData &&
      <FeaturedMovie item = {FeaturedData}/>
      }
      

    <section className="lists">
    {movieList.map((item, key) =>(
      <MovieRow key ={key} title = {item.title} items={item.items}/>
    ))}

    </section>
    
    <footer>
      Feito com o apoio do youtube, canal do Bonieky Lacerda<br/>
      Direitos da imagem para Netflix<br/>
      Dados pegos no site TheMovieDB.org<br/>

    </footer>
    {movieList.length <=0 &&
    <div className='loading'>
      <img src= 'https://i.gifer.com/8Etj.gif' alt='carregando'></img>
          </div>
      }
  </div>
  );
  
}