import React from 'react'
import './Roaster';
import { useTimer } from 'use-timer';
import { useState, useEffect } from 'react';
import timeString from '../util/timeString'

function Timer() {
  const { time, start, pause, reset, status} = useTimer({
    autostart: true
  });

  return (
    <div className="Timer">
      <p>{timeString(time, "colon")}</p>
    </div>
  )
}

export default Timer