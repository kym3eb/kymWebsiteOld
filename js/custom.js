//to do: finish sizing images and adjust locations/naming so that they make sense
// look into breaking the page into chunks instead of having multiple different html pages
// TODO: move data into an object or something rather than replacing all of this html
// TODO: 


/*                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 masonry-item"> 
                  <div class="box-masonry"><a href="#" title="" class="box-masonry-image with-hover-overlay"><img src="img/portfolio/bullseye.jpg" alt="" class="img-responsive"></a>
                    <div class="box-masonry-hover-text-header"> 
                      <h4> <a href="#">Bullseye</a></h4>
                      <div class="box-masonry-desription">
                        <p>Four-tier pistachio lemon wedding cake, based on the recipe from Momofuku Milk Bar</p>
                      </div>
                    </div>
                  </div>
                </div>

                */

$(function() {
  var model = {
    heading: "Kym Smith",
    tag: "My personal portfolio.",
    copyright: "&copy;2016 Kym Smith",
    social: [
      { 
        type: "facebook",
        url: "https://www.facebook.com/kymsmithmusic/"
      },
      {
        type: "twitter",
        url: "https://twitter.com/kymsmithmusic"
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/kymsmithmusic/"
      },
      {
        type: "email",
        url: "mailto:kym.smith@gmail.com"
      },
      {
        type: "apple",
        music: true,
        url: "https://itunes.apple.com/us/album/beauty-queens-broken-dreams/id611734803?uo=4"
      },
      {
        type: "bandcamp",
        music: true,
        url: "https://kymsmith.bandcamp.com/"
      },
      {
        type: "amazon",
        music: true,
        url: "http://www.amazon.com/Beauty-Queens-Broken-Dreams-Explicit/dp/B00BO1UDA6/ref=sr_1_1?s=music&ie=UTF8&qid=1363142574&sr=1-1&keywords=kym+smith"
      },
      {
        type: "spotify",
        music: true,
        url: "https://embed.spotify.com/?uri=spotify:album:5rOCmFZBvgiV1FEx2DtygR"
      }
    ],
    sideBarMenuItem: [
      {
        item: "Home",
        itemUrl: "index.html"
      },
      {
        item: "About",
        itemUrl: "about.html"
      },
      {
        item: "Contact",
        itemUrl: "contact.html"
      }
    ]
  };

  var controller = {
    init: function() {
      viewSideBar.init();
    },
    getSocialContent: function() {
      var socialContent = "";
      for (var i=0; i < model.social.length; i++) {
        if (!model.social[i].music) {
          if (model.social[i].type=="email") {
            socialContent += "<a href='" + model.social[i].url + "' data-animate-hover='pulse' class='" + model.social[i].type + "'><i class='fa fa-envelope'></i></a>";
          } else {
            socialContent += "<a href='" + model.social[i].url + "' data-animate-hover='pulse' class='external " + model.social[i].type + "'><i class='fa fa-" + model.social[i].type + "'></i></a>";
          }
        }
      }
      return socialContent;
    },
    getSocialMusicContent: function() {
      var socialMusicContent = "";
      for (var i=0; i < model.social.length; i++) {
        if (model.social[i].music) {
          socialMusicContent += "<a href='" + model.social[i].url + "' data-animate-hover='pulse' class='external " + model.social[i].type + "'><i class='fa fa-" + model.social[i].type + "'></i></a>";
        }
      }
      return socialMusicContent;
    },
    getSideBarContent: function() {
      var sideBarContent = "";
      for (var i=0; i < model.sideBarMenuItem.length; i++) {
        sideBarContent += "<li><a href='" + model.sideBarMenuItem[i].itemUrl + "''>" + model.sideBarMenuItem[i].item + "</a></li>";
      }
      return sideBarContent;     

    },
    getField: function(fieldName) {
      return model[fieldName];
    }
  };

  var viewSideBar = {
    init: function() {
      $('.sidebar-heading').text(controller.getField("heading"));
      $('.sidebar-tag').text(controller.getField("tag"));
      $('.social').html(controller.getSocialContent);
      $('.social--music').html(controller.getSocialMusicContent);
      $('.copyright').html(controller.getField("copyright"));
      $('.sidebar-menu').html(controller.getSideBarContent);
      viewSideBar.render();
    },
    render: function() {
      $('.sidebar-menu a').each(function(){
        if ($(this).attr("href") === window.location.pathname.split('/').pop()) {
          $(this).parent().addClass("active");
        }
      });
    }
  };

controller.init();
});