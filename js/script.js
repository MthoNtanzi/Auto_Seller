// Create variables to hold the value of car classes
const suvShow = document.querySelectorAll('div.suv');
const sedanShow = document.querySelectorAll('div.sedan');
const hatchbackShow = document.querySelectorAll('div.hatchback');

// create variables to hold the brand types
const audiBrand = document.querySelector('.audi');
const bmwBrand = document.querySelector('.bmw');
const mercedesBrand = document.querySelector('.mercedes');
const volvoBrand = document.querySelector('.volvo');
const vwBrand = document.querySelector('.vw');


const carSelection = document.querySelector('#carSelect');
carSelection.addEventListener('change',()=>{
    console.log(carSelection.value);
    switch (carSelection.value) {
        case 'audi':
            if(audiBrand.classList.contains('hide')){
                audiBrand.classList.remove('hide');
            }
            bmwBrand.classList.add('hide');
            mercedesBrand.classList.add('hide');
            volvoBrand.classList.add('hide');
            vwBrand.classList.add('hide');
            break;
        case 'bmw':
            if(bmwBrand.classList.contains('hide')){
                bmwBrand.classList.remove('hide');
            }
            audiBrand.classList.add('hide');
            mercedesBrand.classList.add('hide');
            volvoBrand.classList.add('hide');
            vwBrand.classList.add('hide');
            break;
        case 'mercedes':
            if(mercedesBrand.classList.contains('hide')){
                mercedesBrand.classList.remove('hide');
            }
            audiBrand.classList.add('hide');
            bmwBrand.classList.add('hide');
            volvoBrand.classList.add('hide');
            vwBrand.classList.add('hide');
            break;
        case 'volvo':
            if(volvoBrand.classList.contains('hide')){
                volvoBrand.classList.remove('hide');
            }
            audiBrand.classList.add('hide');
            bmwBrand.classList.add('hide');
            mercedesBrand.classList.add('hide');
            vwBrand.classList.add('hide');
            break;
        case 'vw':
            if(vwBrand.classList.contains('hide')){
                vwBrand.classList.remove('hide');
            }
            audiBrand.classList.add('hide');
            bmwBrand.classList.add('hide');
            mercedesBrand.classList.add('hide');
            volvoBrand.classList.add('hide');
            break;
        default:
            audiBrand.classList.remove('hide');
            bmwBrand.classList.remove('hide');
            mercedesBrand.classList.remove('hide');
            volvoBrand.classList.remove('hide');
            vwBrand.classList.remove('hide');
            break;
    }

});

//Show the chosen field in the page and also clean up the classlist before I add extra class
function filterCars(carType){
    if(carType=='suv'){
        for(let i=0;i<sedanShow.length;i++){
            sedanShow[i].classList.add('hide');
        }
        for(let i=0;i<hatchbackShow.length;i++){
            hatchbackShow[i].classList.add('hide');
        }
        if(suvShow[0].classList.contains('hide')){
            for(let i=0;i<suvShow.length;i++){
                suvShow[i].classList.remove('hide');
            }
        }
    
    }else if(carType=='hatchback'){
        for(let i=0;i<suvShow.length;i++){
            suvShow[i].classList.add('hide');
        }
        for(let i=0;i<sedanShow.length;i++){
            sedanShow[i].classList.add('hide');
        }
        if(hatchbackShow[0].classList.contains('hide')){
            for(let i=0;i<hatchbackShow.length;i++){
                hatchbackShow[i].classList.remove('hide');
            }
        }
    }else if(carType=='sedan'){
        for(let i=0;i<suvShow.length;i++){
            suvShow[i].classList.add('hide');
        }
        for(let i=0;i<hatchbackShow.length;i++){
            hatchbackShow[i].classList.add('hide');
        }
        if(sedanShow[0].classList.contains('hide')){
            for(let i=0;i<sedanShow.length;i++){
                sedanShow[i].classList.remove('hide');
            }
        }
    }else if(carType=='all'){
        for(let i=0;i<hatchbackShow.length;i++){
            hatchbackShow[i].classList.remove('hide');
        }
        for(let i=0;i<sedanShow.length;i++){
            sedanShow[i].classList.remove('hide');
        }
        for(let i=0;i<suvShow.length;i++){
            suvShow[i].classList.remove('hide');
        }
    }
}


// filter by using radio buttons to get the type of 
let radios = document.forms["radioFilter"].elements["filterRadioOptions"];
for(let i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function() {

        const radioFilter = document.getElementsByName('filterRadioOptions');

        for(let i=0; i<radioFilter.length; i++){
            let choice = radioFilter[i];
            
            if(choice.checked){
                var selectedChoice = choice.value
            }
        }

        switch (selectedChoice) {
            case 'suv':
                filterCars('suv');
                break;
            case 'sedan':
                filterCars('sedan');
                break;
            case 'hatchback':
                filterCars('hatchback');
                break;
            case 'all':
                filterCars('all');
                break;
            default:
                break;
        }
    }
}


