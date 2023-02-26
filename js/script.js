const suvShow = document.querySelectorAll('.suv');
const sedanShow = document.querySelectorAll('.sedan');
const hatchbackShow = document.querySelectorAll('.hatchback');


function filter(){
    const radioFilter = document.getElementsByName('filterRadioOptions');

    for(let i=0; i<radioFilter.length; i++){
        let choice = radioFilter[i];
        
        if(choice.checked){
            var selectedChoice = choice.value
        }
    }

    //clean up the classlist before I add extra class
    function cleanUp(){
        suvShow.classList.remove('hide');
        suvShow.classList.remove('show');
        sedanShow.classList.remove('hide');
        sedanShow.classList.remove('show');
        hatchbackShow.classList.remove('hide');
        hatchbackShow.classList.remove('show');
    }
    
    // cleanUp();
        alert(selectedChoice);
        
    switch (selectedChoice) {
        case 'suv':
                suvShow.classList.add('show');
                sedanShow.classList.add('hide');
                hatchbackShow.classList.add('hide');
            break;
        case 'sedan':
                sedanShow.classList.add('show');
                suvShow.classList.add('hide');
                hatchbackShow.classList.add('hide');
            break;
        case 'hatchback':
            hatchbackShow.classList.add('show');
            suvShow.classList.add('hide');
            sedanShow.classList.add('hide');
            break;
        case 'all':
            cleanUp();
            break;
        default:
            break;
    }
    
}
