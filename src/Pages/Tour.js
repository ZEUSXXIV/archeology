import React from 'react'
import { useEffect } from 'react';

const Tour = () => {

    // <script src="./js/tourData.js"></script>
    // <script src="./js/three.min.js"></script>
    // <script src="./js/engine.min.js?_gQ5FuWB6o"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.0.1/socket.io.min.js"></script>

    useEffect(() => {

        console.log("i am here")
        const script1 = document.createElement('script');
        script1.src = "./main.4359fcb710b067fd7b31.js";
        script1.async = true;
        script1.type = "text/jsx"
      
        document.body.appendChild(script1);

        const script2 = document.createElement('script');
        script2.src = "./js/tourData.js";
        script2.async = true;
        script2.type = "text/jsx"
      
        document.body.appendChild(script2);

        const script3 = document.createElement('script');
        script3.src = "./js/three.min.js";
        script3.async = true;
        script3.type = "text/jsx"
      
        document.body.appendChild(script3);

        const script4 = document.createElement('script');
        script4.src = "./js/engine.min.js?_gQ5FuWB6o";
        script4.async = true;
        script4.type = "text/jsx"
      
        document.body.appendChild(script4);

        const script5 = document.createElement('script');
        script5.src = "https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.0.1/socket.io.min.js";
        script5.async = true;
        script5.type = "text/jsx"
      
        document.body.appendChild(script5);
      
        return () => {
          document.body.removeChild(script1);
          document.body.removeChild(script2);
          document.body.removeChild(script3);
          document.body.removeChild(script4);
          document.body.removeChild(script5);
        }
      }, []);

  return (
    <>
    <div id="rootDownloadable"></div>
    <div id="notification"></div>
    </>
  )
}

export default Tour