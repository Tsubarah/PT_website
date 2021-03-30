/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
    function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
            for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  //Code for tabs
  const content = document.querySelector(".js-content");
  const gymContent = document.querySelector(".js-gymContent");
  const hemmaContent = document.querySelector(".js-hemmaContent");
  
  //Tabs within js-content
  const benVideos = document.querySelector(".js-benVideos");
  const bröstVideos = document.querySelector(".js-bröstVideos");
  const axelVideos = document.querySelector(".js-axelVideos");
  const ryggVideos = document.querySelector(".js-ryggVideos");
  const armVideos = document.querySelector(".js-armVideos");
  const absVideos = document.querySelector(".js-absVideos");

  
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

  

  // const gymVideos = document.querySelectorAll('.js-gymVideo');
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
      case 'armar':
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





  


