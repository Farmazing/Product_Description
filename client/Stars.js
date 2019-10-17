import React from 'react';


const Stars = (props) => {

    var number = Math.floor(props.stars)
    var decimal = props.stars - number;
    var array = [0,0,0,0,0]

    for (var i = 0; i < number; i++) {
        array[i] = 1;
    }
    if (0 <= decimal && decimal <= .2 )  {
        array[number] = 0;
    }
    if (.3 <= decimal && decimal <= .7 )  {
        array[number] = .5;
    }
    if (.7 <= decimal && decimal <= .9 )  {
        array[number] = 1;
    }
    //console.log(array);

    return (
        <div>
            {array.map (stars=> (
                (stars === 1) 
                ? <span className="fa fa-star checked"></span> 
                : (stars === .5 
                    ? <span className="fa fa-star-half-empty checked"></span>
                    : <span className="fa fa-star-o checked"></span>
                )
            ))}
            num {props.stars} num
        </div>
    )
}

export default Stars;
