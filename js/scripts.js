window.addEventListener('DOMContentLoaded', event => {

    
  $(
      $(".nav-link").on("click", (e)=>{
          console.log(this)
          $(".nav-link").removeClass("active")
          $(e.target).addClass("active")
      })
  )

});

