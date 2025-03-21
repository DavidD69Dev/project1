/* CARTE VERSION MOBILE - en cours de travail...
                    // L'id du container, par exemple <div id="map"></div>
                    var mapID = 'map';
                    
                    // Plan IGN avec une transparence de 80%
                    var PlanIGN = L.tileLayer('https://data.geopf.fr/wmts?'+
                        '&REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&TILEMATRIXSET=PM'+
                        '&LAYER={ignLayer}&STYLE={style}&FORMAT={format}'+
                        '&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}',
                        {
                            ignLayer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2',
                            style: 'normal',
                            format: 'image/png',
                            service: 'WMTS',
                            opacity: 0.8,
                            attribution: 'Carte © IGN/Geoplateforme'
                    });
                    
                    // Photographies aériennes en-dessous de Plan IGN
                    let OrthoIGN = L.tileLayer('https://data.geopf.fr/wmts?'+
                        '&REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&TILEMATRIXSET=PM'+
                        '&LAYER={ignLayer}&STYLE={style}&FORMAT={format}'+
                        '&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}',
                        {
                            ignLayer: 'ORTHOIMAGERY.ORTHOPHOTOS',
                            style: 'normal',
                            format: 'image/jpeg',
                            service: 'WMTS'
                    });
                    // Ma carte
                    let myMap = L.map(mapID, {
                        center: [45.75036994086184, 4.828724700166397],
                        zoom: 25,
                        layers: [OrthoIGN,PlanIGN]
                    })
*/




const thumbnail=document.querySelector(".thumbnail")
const thumbnailPopup=document.querySelector(".thumbnail-popup")

thumbnail.addEventListener("click", () => {
    const screenWidth = window.innerWidth;
    if(screenWidth<=800){
        if(thumbnail.style.display==="flex"){
            thumbnail.style.display="none";
            thumbnailPopup.style.display="flex"
    }else if(screenWidth>800){
        if(thumbnail.style.display==="flex")
            thumbnailPopup.style.display="none";
        }
    else{thumbnail.style.display="flex"}
        }  
    }
)

const cancel=document.querySelector("#cancel")

cancel.addEventListener("click", () =>{
    if (thumbnailPopup.style.display==="flex"){
        thumbnailPopup.style.display="none";
        thumbnail.style.display="flex"
    }else{thumbnail.style.display="flex"}
    }
)