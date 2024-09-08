function myChangeBackgroundColor(){
    const screenWidth = window.innerWidth;

    if( screenWidth >= 1337){
        document.documentElement.style.backgroundColor = '#fffb703';
    }else if(screenWidth<1337 && screenWidth>=505){
        document.documentElement.style.backgroundColor = '#d90429';
    }else if(screenWidth < 505){
        document.documentElement.style.backgroundColor = '#003049';
    }
}
window.addEventListener('resize', myChangeBackgroundColor);
myChangeBackgroundColor();