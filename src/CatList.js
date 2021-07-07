// write your CatList component here
import React from "react";


 export const CatList = (props) =>  {
    // debugger
 
        return (
            <div>
                {props.catPics.map(catPic=><img src={catPic.url} alt='A Cat Pic'/>)}
            </div>
        );

}
