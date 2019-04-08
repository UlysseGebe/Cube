let degX = 0, degY = 0;
document.addEventListener("keydown", function(event) {
    let axisY = document.querySelector('.cube-3d .y-axis') , axisX = document.querySelector('.cube-3d .x-axis');
    if (event.which == 39 || event.which == 37){
        if (event.which == 39){/* ArrowRight */
            degX -= 1;
        }
        if (event.which == 37){/* ArrowLeft */ 
            degX += 1;
        }
        axisX.style.transform = 'rotateY('+ degX%360 +'deg)';
    }
    if (event.which == 38 || event.which == 40){
        if (event.which == 38){/* ArrowUp */
            degY -= 1;
        }
        if (event.which == 40){/* ArrowDown */ 
            degY += 1;
        }
        axisY.style.transform = 'rotateX('+ degY%360 +'deg)';
    }
    if (event.which == 68 || event.which == 81){
        if (event.which == 68){/* D */
            degX -= 10;
        }
        if (event.which == 81){/* Q */ 
            degX += 10;
        }
        axisX.style.transform = 'rotateY('+ degX%360 +'deg)';
    }
    if (event.which == 90 || event.which == 83){
        if (event.which == 90){/* Z */
            degY -= 10;
        }
        if (event.which == 83){/* S */ 
            degY += 10;
        }
        axisY.style.transform = 'rotateX('+ degY%360 +'deg)';
    }
});