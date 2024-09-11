import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjhjNWE4ODU0MzhkMDk0YmYxZGM4MzIyNDBlYzYzMCIsIm5iZiI6MTcyNDQwMTQ4NC4yMDgyODQsInN1YiI6IjY2Yzg0NWEzNzlmZTE0MWUwZWVhOTZlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T-EJR6-rw4r25n7luzPlf9B3xqkpA3CoXDAptCMJ5Ts

function Movies(props) {
    console.log({ props });
    const { data: { backdrop_path, title, release_date, overview } } = props;

    return (
        <>
            <img
                src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                alt=''
                className='aspect-video brightness-50'
            />
            <div className='absolute bottom-[10%] left-8 sm:w-1/3 w-1/2'>
                <p className='font-bold sm:text-[2vw] mb-2'>{title}</p>
                <div>
                    {/* <p className='text-gray-400 border border-gray-400 inline-block p-1  mb-1'>
                        T16
                    </p> */}
                    <p className='text-[1.2vw]'>{release_date}</p>
                </div>
                <div>
                    <div className='hidden sm:block text-[1.2] mt-4 '>
                        <p className='font-bold mb-2'>overview</p>
                        <p>
                            {overview}
                        </p>
                    </div>
                </div>
                <div className='mt-4 '>
                    <button className='bg-white text-black py-2 px-4 rounded text-10 lg:text-lg mr-3'>
                        <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
                        Trailer
                    </button>
                    <button className='bg-slate-300/35 py-2 px-4 rounded text-10 lg:text-lg'>
                        View dail
                    </button>
                </div>
            </div>
        </>
    );
}

export default Movies;
