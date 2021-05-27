/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
<<<<<<< HEAD
    function myFunction() {
=======
  function myFunction() {
>>>>>>> e234ce618bcab04a05a2a05bccfb23a5c89c7496
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
<<<<<<< HEAD
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
=======
  window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
>>>>>>> e234ce618bcab04a05a2a05bccfb23a5c89c7496
        var i;
            for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

<<<<<<< HEAD
  //Code for tabs
  const content = document.querySelector(".js-content");
  const gymContent = document.querySelector(".js-gymContent");
  const hemmaContent = document.querySelector(".js-hemmaContent");
=======
  // Code for tabs  
  const content = document.querySelector(".js-content");
  const gymContent = document.querySelector(".js-gymContent");
  const hemmaContent = document.querySelector(".js-hemmaContent");
  
  // Tabs within js-content
>>>>>>> e234ce618bcab04a05a2a05bccfb23a5c89c7496
  const benVideos = document.querySelector(".js-benVideos");
  const bröstVideos = document.querySelector(".js-bröstVideos");
  const axelVideos = document.querySelector(".js-axelVideos");
  const ryggVideos = document.querySelector(".js-ryggVideos");
  const armVideos = document.querySelector(".js-armVideos");
  const absVideos = document.querySelector(".js-absVideos");
<<<<<<< HEAD
  
  hemmaContent.style.display = "none";
  
  function changeTab(tab) {
     if (tab === "hemma") {
      hemmaContent.style.display = "block";
      gymContent.style.display = "none";
    } else {
      hemmaContent.style.display = "none";
      gymContent.style.display = "block";
    };
  } 

  // const gymVideos = document.querySelectorAll('.js-gymVideo');
=======

  //Tabs for faq
  hemmaContent.style.display = "none";
  content.style.display = "none";

  function changeTab(tab) {
    
    if (tab === null) {
        hemmaContent.style.display = "none";
        gymContent.style.display = "none";
        content.style.display = "none";
      } else if (tab === "hemma") {
        hemmaContent.style.display = "block";
        gymContent.style.display = "none";
        content.style.display = "none";
      } else {
        hemmaContent.style.display = "none";
        gymContent.style.display = "block";
        content.style.display = "block";
        benVideos.style.display = "flex";
        bröstVideos.style.display = "none";
        axelVideos.style.display = "none";
        ryggVideos.style.display = "none";
        armVideos.style.display = "none";
        absVideos.style.display = "none";
      }
  } 

  

>>>>>>> e234ce618bcab04a05a2a05bccfb23a5c89c7496
  const videoLists = document.querySelectorAll('.js-videoList');

  function changeGymTab(tab) {
    
    
    switch (tab) {
      case 'ben':
        videoLists.forEach(list => list.style.display = 'none');
        benVideos.style.display = 'flex';
      break;
      case 'bröst':
        videoLists.forEach(list => list.style.display = 'none');
        bröstVideos.style.display = 'flex';
      break;
      case 'axlar':
        videoLists.forEach(list => list.style.display = 'none');
        axelVideos.style.display = 'flex';
      break;
      case 'rygg':
        videoLists.forEach(list => list.style.display = 'none');
        ryggVideos.style.display = 'flex';
      break;
<<<<<<< HEAD
      case 'armar':
=======
    case 'armar':
>>>>>>> e234ce618bcab04a05a2a05bccfb23a5c89c7496
        videoLists.forEach(list => list.style.display = 'none');
        armVideos.style.display = 'flex';
      break;
      case 'abs':
        videoLists.forEach(list => list.style.display = 'none');
        absVideos.style.display = 'flex';
      break;
        default:
        console.log('Sorry');
    }
  }

<<<<<<< HEAD
=======
  
const faqBtn = document.querySelectorAll('.js-faq')

function openFaqTab(tab) {
  if (tab === 'betalning') {
    window.location = 'faq/betalning.html'
  }
}
  





>>>>>>> e234ce618bcab04a05a2a05bccfb23a5c89c7496




  


