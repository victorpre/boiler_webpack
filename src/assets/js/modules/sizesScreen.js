export const deviceSize = screenSize();


function screenSize() {
  let sizeW = $(window).width();
  let sizeH = $(window).height();
  let sizes = [sizeW, sizeH];
  
  return sizes;
};  