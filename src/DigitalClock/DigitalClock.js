import React, { useState, useEffect } from "react";
import useWindowSize from './useWindowSize'; // Asegúrate de que la ruta sea correcta

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());
    const { width } = useWindowSize(); // Obtener el ancho de la ventana

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatNumber = (number) => number.toString().padStart(2, "0");

    const hours = formatNumber(time.getHours());
    const minutes = formatNumber(time.getMinutes());
    const seconds = formatNumber(time.getSeconds());

    return (
        <div className="clock-container" style={{ flexDirection: width < 800 ? 'column' : 'row' }}>
            <div className="digit">{hours[0]}</div>
            <div className="digit">{hours[1]}</div>
            <div className="digit">:</div> {/* Dos puntos */}
            <div className="digit">{minutes[0]}</div>
            <div className="digit">{minutes[1]}</div>
            <div className="digit">:</div> {/* Dos puntos */}
            <div className="digit">{seconds[0]}</div>
            <div className="digit">{seconds[1]}</div>
        </div>
    );
};

export default DigitalClock;