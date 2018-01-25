  const current = document.querySelector('#current');
  const imgs = document.querySelectorAll('.imgs img');
  const opacity = 0.6;


    //Set first img opacity
    imgs[0].style.opacity = opacity;


    imgs.forEach(img =>
    img.addEventListener('click', imgClick));

    function imgClick(e) {
      //reset opacity
      imgs.forEach(img => (img.style.opacity = 1));
      //Change current image to src of clicked image
      current.src = e.target.src;



      // change opacity of clicked image1
      e.target.style.opacity = opacity;


      //add fade in class
      current.classlist.add("fade-in");

      //remove fade in class
      setTimeout(() => current.classlist.remove("fade-in"), 500);

    }
