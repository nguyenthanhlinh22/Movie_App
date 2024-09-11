import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <>
            <header className='h-14  bg-slate-900 text-white flex justify-between items-center px-8'>
                <div className='flex items-center gap-4'>
                    <img
                        src='./logiFilm.png'
                        alt='Logo'
                        className='w-16 sm:w-24'
                    />
                    <a href='#'>Home</a>
                    <a href='#'>Movies</a>
                    <a href='#'>TV Shows</a>
                    <a href='#'>About</a>
                </div>
                <div>
                    <FontAwesomeIcon
                        icon={faSearch}
                        className='cursor-pointer'
                    />
                </div>
            </header>
        </>
    );
}

export default Header;
