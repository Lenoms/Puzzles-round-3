import React, { Component, useEffect } from 'react'
import './Two.scss'
import bus from '../../../pics/bus.png'
import car1 from '../../../pics/car1.png'
import car2 from '../../../pics/car2.png'
import $ from 'jquery';
import 'jquery-ui';
import Draggable from 'react-draggable';

function Two() {

    let interval;
    let timeout;
    let greenLight = true;

    useEffect(() => {
        startTrafficLights();
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        }
    })

    function startTrafficLights(){
        toggleLights();
        interval = setInterval(function(){
            toggleLights();
        }, 10000);
    }

    //Don't love this code. But it does the job.
    function toggleLights(){
        $('#red-light').toggleClass('red-light-on');
        $('#green-light').toggleClass('green-light-on');
        setGreenLight();
        timeout = setTimeout(function(){
            $('#red-light').toggleClass('red-light-on');
            $('#green-light').toggleClass('green-light-on');
            setGreenLight();
         }, 7000);
    }

    function setGreenLight(){
        if ($('#green-light').hasClass('green-light-on')){
            greenLight = true;
        } else {
            greenLight = false;
        }
    }

    return (
        <div className="background">
           <div className="building" id="building1"></div>
           <Draggable axis="x" bounds={{left: 0, right: 1000}}  onDrag={() => greenLight}>
               <img  draggable="false" id="bus" src={bus}/>
           </Draggable>
           <img draggable="false" className="car" id="car1" src={car1}/>
           <img draggable="false" className="car" id="car2" src={car2}/>
           <div id="road">
               <div className="road-line"></div>
               <div className="road-line"></div>
               <div className="road-line"></div>
               <div className="road-line"></div>
           </div>
           <div id="traffic-light">
                <div id="lights">
                    <div className="light" id="red-light"></div>
                    <div className="light green-light-on" id="green-light"></div>
               </div>
               <div className="pole"></div>
           </div>
           <div id="planter">
               <div id="brick-border"></div>
           </div>
        </div>
    )
}

export default Two
