const suvShow = document.querySelector('div.suv');
const sedanShow = document.querySelector('div.sedan');
const hatchbackShow = document.querySelector('div.hatchback');

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
            bmwBrand.classList.add('hide');
            mercedesBrand.classList.add('hide');
            volvoBrand.classList.add('hide');
            vwBrand.classList.add('hide');
            break;
        case 'bmw':
            audiBrand.classList.add('hide');
            mercedesBrand.classList.add('hide');
            volvoBrand.classList.add('hide');
            vwBrand.classList.add('hide');
            break;
        case 'mercedes':
            audiBrand.classList.add('hide');
            bmwBrand.classList.add('hide');
            volvoBrand.classList.add('hide');
            vwBrand.classList.add('hide');
            break;
        case 'volvo':
            audiBrand.classList.add('hide');
            bmwBrand.classList.add('hide');
            mercedesBrand.classList.add('hide');
            vwBrand.classList.add('hide');
            break;
        case 'vw':
            audiBrand.classList.add('hide');
            bmwBrand.classList.add('hide');
            mercedesBrand.classList.add('hide');
            volvoBrand.classList.add('hide');
        default:
            break;
    }

});

//clean up the classlist before I add extra class
function cleanUp(){
    suvShow.classList.remove('hide');
    sedanShow.classList.remove('hide');
    hatchbackShow.classList.remove('hide');
}


// filter by using radio buttons to get the type of 
let radios = document.forms["radioFilter"].elements["filterRadioOptions"];
for(let i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function() {
        console.log("Hide Classes")

        const radioFilter = document.getElementsByName('filterRadioOptions');

        for(let i=0; i<radioFilter.length; i++){
            let choice = radioFilter[i];
            
            if(choice.checked){
                var selectedChoice = choice.value
            }
        }

        
        alert(selectedChoice);
            
        switch (selectedChoice) {
            case 'suv':
                    cleanUp();
                    sedanShow.classList.add('hide');
                    hatchbackShow.classList.add('hide');
                break;
            case 'sedan':
                cleanUp();
                    suvShow.classList.add('hide');
                    hatchbackShow.classList.add('hide');
                break;
            case 'hatchback':
                cleanUp()
                suvShow.classList.add('hide');
                sedanShow.classList.add('hide');
                break;
            case 'all':
                cleanUp();
                break;
            default:
                break;
        }

        /* if(selectedChoice=='suv'){
            cleanUp();
            sedanShow.classList.add('hide');
            hatchbackShow.classList.add('hide');
        }else if(selectedChoice=='hatchback'){
            cleanUp();
            suvShow.classList.add('hide');
            sedanShow.classList.add('hide');
        }else if(selectedChoice=='sedan'){
            cleanUp();
            suvShow.classList.add('hide');
            hatchbackShow.classList.add('hide');
        }else{
            cleanUp();
        } */
    }
}


