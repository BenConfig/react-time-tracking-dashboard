import React from 'react';

export default function Categories({ info, timeFrame }) {
    const categories = info.map((category, index) => {
        const hours = category.timeframes[timeFrame];

        return (
            <li className={`category category--${category.title.toLowerCase().replace(' ', '-')}`} key={index}>
                <a className="category__link" href="#">
                    <h2 className="category__heading">{category.title}</h2>
                    <p className="category__current-hours">{hours.current + (hours.current === 1 ? 'hr' : 'hrs')}</p>
                    <p className="category__previous-hours">
                        {timeFrame === 'daily' ?
                        'Yesterday -' : 
                        `Last ${timeFrame[0].toUpperCase() +
                        timeFrame.slice(1, -2)} - `} {`${hours.previous + (hours.previous === 1 ? 'hr' : 'hrs')}`}
                    </p>
                </a>
            </li>
        );
    });

    return (
        <ul className="categories__list" aria-live="polite">
            {categories}
        </ul>
    );
}