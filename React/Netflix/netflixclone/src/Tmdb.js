const API_KEY = '0c1db7c64f53ee15ef71fcb52ec2fc6f';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- Originais Netflix
- Recomendados(trending)
- em alta (top rated)
- ação
- comédia
- terror
- romance
- documentarios
*/

const basicfetch = async (endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json ;
}

export default{
    getHomeList: async() => {
        return[
            {
                slug: 'originals',
                title: 'Originais do netflix',
                items: await basicfetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title:'Recomendados para você',
                items:await basicfetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'top rated',
                title:'Em alta',
                items:await basicfetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title:'Ação',
                items:await basicfetch(`/discover/movie?with_genres=28&language=pt_BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title:'Comédia',
                items:await basicfetch(`/discover/movie?with_genres=35&language=pt_BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title:'Terror',
                items:await basicfetch(`/discover/movie?with_genres=27&language=pt_BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title:'Romance',
                items:await basicfetch(`/discover/movie?with_genres10749&language=pt_BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title:'Documentarios',
                items:await basicfetch(`/discover/movie?with_genres=99&language=pt_BR&api_key=${API_KEY}`)
            },
        ];
    },
    getMovieInfo: async (MovieId, type) => {
        let info = {};

        if (MovieId){
            switch(type){
                case 'movie':
                    info = await basicfetch(`/movie/${MovieId}?language=pt-BR&&api_key=${API_KEY}`);

                break;
                case 'tv':
                    info = await basicfetch(`/tv/${MovieId}?language=pt-BR&&api_key=${API_KEY}`);
                break;

                default:
                    info = null;

                break;

            }
        }

        return info;
    }


}