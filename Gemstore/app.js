(function() {
  var app = angular.module('gemStore', []);

  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(imageNumber){
      this.current = imageNumber || 0;
    };
  });

  

  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller("ReviewController", function(){

    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };

  });

  app.directive("productDescriptions", function() {
    return {
      restrict: 'E',
      templateUrl: "product-description.html"
    };
  });

  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "product-reviews.html"
    };
  });

  app.directive("productSpecs", function() {
    return {
      restrict:"A",
      templateUrl: "product-specs.html"
    };
  });

  app.directive("productTabs", function() {
    return {
      restrict: "E",
      templateUrl: "product-tabs.html",
      controller: function() {
        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: "tab"
    };
  });

  var gems = [
    {
        id:1,
      name: 'Rolex AS12',
      description: "The model A1738811/BD44/173A belongs to the the Colt series, from the housed of Breitling. This watch is multi-functional. It has a silver toned dial encased in a stainless steel case of 44mm. The hour markers are luminescent, and engraved on the dial itself. At the 12 o’clock position, the Arabic numeral is used to indicate the hour, which breaks the monotony of the indices and provides easy readability of time. The unidirectional rotatable bezel is crafted from stainless steel, and features hour markers on it along with 4 riders. Premium quality black toned leather has been used in crafting the strap of this watch, which has white stitch detail on it to add to the sophisticated look of this watch. The combination of black and white, which has been used in this particular timepiece, makes it suitable for all occasions.",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
        "images/watch1.jpg",
        "images/watch11.jpg",
        "images/watch12.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "Watch is pretty good!",
        author: "rex@vtsl.in"
      }, {
        stars: 4,
        body: "Its a Good watch",
        author: "sanjeev @vtsl.in"
      }]
    }, {
        id:2,
      name: 'Rolex AS125',
      description: "The Ronde Solo de Cartier model number W6701005 for women, is a wristwatch made of stainless steel. With a perfectly round steel case of 36 mm, it boasts a thickness of merely 6.51 mm for a sleek and minimalistic appearance. The inimitable crown is beaded intricately along its diameter, and imbedded with Cartier’s trademark blue synthetic spinel. Silvered and opaline, the dial sports hourly markings in the form of bold black Roman numerals. Typical to the line, a rail-track located inside the markings denotes minute divisions of time. An element of modern outlook is added to the piece by numbering on the rail-track done in Arabic numerals. Sapphire crystal casing on the ensemble effectively protects it from scratches. The steel bracelet consists of alternating linkages of brushed and polished metal, adding a dimension of intrigue to the watch, and can be fastened to the wrist by means of a hidden folding clasp.",
      shine: 9,
      price: 22.90,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
        "images/watch2.jpg",
        "images/watch21.jpg",
        "images/watch22.jpg"
      ],
      reviews: [{
        stars: 3,
        body: "Its a Good watch",
        author: "Sanjeev@vtsl.in"
      }, {
        stars: 4,
        body: "Could have been more better!",
        author: "rex@vtsl.in"
      }]
      }, {
          id:3,
        name: 'Rolex AS962',
        description: "The Ingenieur novelty lies in capturing succinctly the essence of that which it emulates. IWC famously partnered with Mercedes AMG in year 2005 and brought forth two titanium cased models creatively emulating race-car styles. The 2013 Ingenieur watch collection showers more affection on the Mercedes AMG Petronas F1 collaboration. The watch exudes performance efficiency, energy conservation and sporty appeal. Materials such as ceramic, titanium and carbon commonly used in Formula One have been incorporated in this collection to showcase their strong bond. An ideal example of this is the Ingenieur Automatic Carbon Performance Ceramic which has been styled primarily from material typically used in motor racing.",
        shine: 70,
        price: 1100,
        rarity: 2,
        color: '#000',
        faces: 6,
        images: [
          "images/watch3.jpg",
          "images/watch31.jpg",
          "images/watch32.jpg"
        ],
        reviews: [{
          stars: 5,
          body: "Its awesome",
          author: "Shwetha@vtsl.in"
        }, {
          stars: 4,
          body: "Its a Good watch",
          author: "Sanjeev@vtsl.in"
        }, {
          stars: 4,
          body: "Nice Watch",
          author: "rex@vtsl.in"
        }]
    }
  ];
})();