const slider = document.querySelector('.slider');
const numOfPreviews = document.querySelector('.card_top_view span');
const subscriptionPrice = document.querySelector('.card_top_price span');

slider.addEventListener("input", updateRange);

function updateRange(e) {
    const sliderValue = document.querySelector('.slider').value;
    const sliderBackgroung = document.querySelector(".card_top_range .slider");
    let rangePercentage = (100 * sliderValue) / 4; 

    switch (sliderValue) {
        case "0" :
            numOfPreviews.innerHTML = "10 K";
            subscriptionPrice.innerHTML = "$8.00";
            break;
            case "1" :
                numOfPreviews.innerHTML = "50 K";
                subscriptionPrice.innerHTML = "$12.00";
                break;
                case "2" :
                    numOfPreviews.innerHTML = "100 K";
                    subscriptionPrice.innerHTML = "$16.00";
                    break;
                    case "3" :
                        numOfPreviews.innerHTML = "500 K";
                        subscriptionPrice.innerHTML = "$24.00";
                        break;
                        case "4" :
                            numOfPreviews.innerHTML = "1 M";
                            subscriptionPrice.innerHTML = "$36.00";
                            break;
                            default:
                                console.log("error");
    }
    
    sliderBackgroung.style.background = `linear-gradient(90deg,#a5f3eb ${rangePercentage}%, #eaeefb 0%)`;
    
}