'use client'

import React, { useEffect, useRef } from 'react';



export default function About() {
    const myAlertRef = useRef();

    useEffect(() => {
      myAlertRef.current = alert;
      myAlertRef.current('Hello, Next.js!');
    }, [window]);
    return( 
    <button onClick={alert('a')}>Hello, world</button>
    );
}
