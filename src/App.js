import React from 'react';
import Categories from './Categories';
import data from './data.json';
import './index.css';

export default function App() {
    const [timeFrame, setTimeFrame] = React.useState('daily');
    const [info, setInfo] = React.useState(data);

    function changeTimeFrame(e) {
        const selectedTimeFrame = e.target.value;
        setTimeFrame(selectedTimeFrame)
    }

    return (
        <>
            <header className="header">
                <div className="header__banner">
                    <h1 className="header__title">
                        <span className="header__title--sm">Report for </span>
                        <span className="header__title--lg">Jeremy Robson</span>
                    </h1>
                    <img className="header__profile-img" src={require('./images/image-jeremy.png')} />
                </div>
                <fieldset className="header__time-frames">
                    <legend className="sr-only">Select time frame for report</legend>
                    
                    <input
                        className="sr-only"
                        type="radio"
                        id="daily"
                        name="time-frame"
                        value="daily"
                        checked={timeFrame === 'daily'}
                        onChange={changeTimeFrame}
                    />
                    <label className="header__time-frame" htmlFor="daily">Daily</label>

                    <input
                        className="sr-only"
                        type="radio"
                        id="weekly"
                        name="time-frame"
                        value="weekly"
                        checked={timeFrame === 'weekly'}
                        onChange={changeTimeFrame}
                    />
                    <label className="header__time-frame" htmlFor="weekly">Weekly</label>

                    <input
                        className="sr-only"
                        type="radio"
                        id="monthly"
                        name="time-frame"
                        value="monthly"
                        checked={timeFrame === 'monthly'}
                        onChange={changeTimeFrame}
                    />
                    <label className="header__time-frame" htmlFor="monthly">Monthly</label>

                </fieldset>
            </header>
            <main className="categories">
                 <Categories info={info} timeFrame={timeFrame} />
            </main>
            
         </>
    )
}