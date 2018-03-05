let main = document.getElementById('main');
let pallet = document.getElementById('pallet');

let spray = 'White';

let colorArr = ['DeepPink', 'HotPink', 'LightPink', 'MediumVioletRed', 'PaleVioletRed', 'Crimson', 'DarkRed', 'FireBrick', 'IndianRed', 'LightCoral', 'Coral', 'DarkOrange', 'Orange', 'OrangeRed', 'Tomato', 'Yellow', 'LemonChiffon', 'Khaki', 'PapayaWhip', 'Moccasin', 'RosyBrown', 'SandyBrown', 'SaddleBrown', 'Wheat', 'Peru', 'Green', 'SpringGreen', 'SeaGreen', 'MediumSpringGreen', 'LimeGreen', 'Chartreuse', 'CadetBlue', 'Cyan', 'LightCyan', 'Teal', 'Blue', 'DeepSkyBlue', 'DodgerBlue', 'DarkBlue', 'RoyalBlue', 'Purple', 'MediumOrchid', 'DarkOrchid', 'MediumPurple', 'Indigo', 'Grey', 'WhiteSmoke', 'Silver', 'White', 'Black']

// for(let i=0; i<50; i++){
//     let divs = document.createElement('div');
//     divs.classList.add('row');

//     for(let j=0; j<80; j++){
//         let boxes = document.createElement('div');
//         boxes.classList.add('box');
//         divs.appendChild(boxes)
//         boxes.addEventListener('click', function(){
//             boxes.style.backgroundColor = spray;
//         })
//     }
//     main.appendChild(divs)
// }

// for(let k=0; k<1; k++){
//     let divs2 = document.createElement('div');
//     divs2.classList.add('color-row');

//     for(let l=0; l<colorArr.length; l++){
//         let boxes2 = document.createElement('div');
//         boxes2.classList.add('color-box');
//         divs2.appendChild(boxes2).style.backgroundColor = colorArr[l]
//         boxes2.addEventListener('click', function(){
//             spray = colorArr[l];
//         })
//     }
//     pallet.appendChild(divs2)
// }

function isDescendant(parent, child) {
    var node = child.parentNode;
    while (node != null) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

let isPainting = false;

main.addEventListener('mousedown', (event) => {
    isPainting = true;
    if(isDescendant(main, event.target)){
        event.target.style.backgroundColor = spray;
    } 
})
main.addEventListener('mouseup', (event) => {
    isPainting = false;
})

for(let i=0; i<50; i++){
    let divs = document.createElement('div');
    divs.classList.add('row');

    for(let j=0; j<80; j++){
        let boxes = document.createElement('div');
        boxes.classList.add('box');
        divs.appendChild(boxes)
        main.appendChild(divs)
        boxes.addEventListener('mouseenter', (event) => {
            if(isPainting === true){
                event.target.style.backgroundColor = spray;
            }
        })
    }
}


for(let k=0; k<1; k++){
    let divs2 = document.createElement('div');
    divs2.classList.add('color-row');

    for(let l=0; l<colorArr.length; l++){
        let boxes2 = document.createElement('div');
        boxes2.classList.add('color-box');
        divs2.appendChild(boxes2).style.backgroundColor = colorArr[l]
        boxes2.addEventListener('click', function(){
            spray = colorArr[l];
        })
    }
    pallet.appendChild(divs2)
}
