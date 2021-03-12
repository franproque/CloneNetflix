import React, {useState} from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
export default ({title, items})=>{
    const [scrollX,setScrollX]= useState(0);
    let tamanhoList = (items.results.length *150);
    console.log(tamanhoList)
    const handleLeftArrow = ()=>{
        let x=scrollX+ Math.round(window.innerWidth/2);
        if(x> 0){
            x=0
        }
        setScrollX(x);
    }

    const handleRightArrow = () =>{
        let x=scrollX- Math.round(window.innerWidth/2);
        if(window.innerWidth-(items.results.length*150)>x){
            x=window.innerWidth-(items.results.length*150)-60
        }
            setScrollX(x);
        
       
        console.log(scrollX)
    }
    return (
        <div className="movieRow">
          <h2>{title}</h2>
          <div className="movieRow--left" onClick={handleLeftArrow}>
              <NavigateBeforeIcon  style={{fontSize:50}}/>

          </div>

          <div className="movieRow--right" onClick={handleRightArrow}>
              <NavigateNextIcon  style={{fontSize:50}}/>

          </div>
        <div className="movieRow--listarea">
        <div className="movieRow--list" style={{
            width:tamanhoList,
            marginLeft:scrollX
        }}>

        {items.results.length > 0 && items.results.map((item,key)=>(
               <div className="movieRow--item" key={key}>
               <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.orinal_title} />
                </div>
            ))}
        </div>
      
           
        </div>
        </div>
    );
}