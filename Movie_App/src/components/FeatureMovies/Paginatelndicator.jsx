import React, {useEffect} from 'react';

function Paginatelndicator({movies, activeMovieId, setActiveMovieId}) {
    useEffect(() => {
        const interval = setInterval(() => {
            const currentIndex = movies.findIndex(movie => movie.id === activeMovieId);
            const nextIndex = (currentIndex + 1) % movies.length;
            setActiveMovieId(movies[nextIndex].id);
        }, 3000);

        return () => clearInterval(interval);
    }, [activeMovieId, movies, setActiveMovieId]);
    
    return (
        <div className="absolute bottom-[10%] right-8">
          <ul className="flex gap-1">
            {movies.map((movie) => (
              <li
                onClick={() => setActiveMovieId(movie.id)}
                key={movie.id}
                className={`h-1 w-6 cursor-pointer  ${movie.id === activeMovieId ? "bg-slate-100" : "bg-slate-600"}`}
              ></li>
            ))}
            {/* <li className="h-1 w-6 cursor-pointer bg-slate-100"></li>
            <li className="h-1 w-6 cursor-pointer bg-slate-600"></li>
            <li className="h-1 w-6 cursor-pointer bg-slate-600"></li>
            <li className="h-1 w-6 cursor-pointer bg-slate-600"></li> */}
          </ul>
        </div>
      );
    };


export default Paginatelndicator;
