import React, { useState, useEffect } from 'react';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import "./TimeLeft.css"
const TimeLeft = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const date = currentTime.getDate();
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const sec = currentTime.getSeconds();

  return (
    <div className='TimeLeft'>
      <div className='wrapper'>
        <PriceChangeIcon style={{height : "40px" , width : "45px"}} />
        <p>Exam Results Sale: Save Big on Premium and Ultimate!</p>
        <div className='formate-date'>
          <div className='time'>
            <h2>{date < 10 ? `0${date}` : date}</h2>
            <h6>DAYS</h6>
          </div>
          <span>:</span>
          <div className='time'>
            <h2>{hour < 10 ? `0${hour}` : hour}</h2>
            <h6>HOURS</h6>
          </div>
          <span>:</span>
          <div className='time'>
            <h2>{minute < 10 ? `0${minute}` : minute}</h2>
            <h6>MINS</h6>
          </div>
          <span>:</span>
          <div className='time'>
            <h2>{sec < 10 ? `0${sec}` : sec}</h2>
            <h6>SECS</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLeft;
