$(document).ready(function() { 
  var generator = new Vue({
    el: '#view',
    data: {
      sections  : $('#view section'),
      index     : 0,
      character : {
        name     : '',
        title    : '',
        age      : '',
        gender   : '',
        location : '',
        env      : [],
        image    : '',
        am       : {
          first  : '',
          second : '',
          third  : '',
        },
        ev       : {
          first  : '',
          second : '',
          third  : '',
        },
        si       : {
          first  : '',
          second : '',
          third  : '',
        },
        en       : {
          time : '',
          mind : '',
          goal : {
            first  : '',
            second : '',
          },
        }
      },
      product : {
        name  : '',
        type  : '',
        env   : '',
        data  : '',
        image : '',
      }
    },
    computed: {
      sectionTitle: function () {
        var section = $(this.sections)[this.index];
        var sectionTitle = $(section).data('title');

        return sectionTitle;
      }
    },
    // watch: {
    //   index: function() {
    //     this.visibilitySet();
    //   },
    // },
    methods: {
      // page turner
      pageTurn: function(value) {
        if (value === '+') {
          // check if there is next page
          if (this.index < this.sections.length - 1) {
            this.index++;
          }
        } else if (value === '-') {
          // check if there is last page
          if (this.index > 0) {
            this.index--;
          }
        } else {
          // check if value is within range
          if (value >= 0 && value <= this.sections.length - 1) {
            this.index = value;
          }
        }

        var compressedCharacter = JSON.stringify(this.character);
        var compressedProduct = JSON.stringify(this.product);
        
        console.log(compressedCharacter + compressedProduct);
        
        localStorage.setItem("character", compressedCharacter);
        localStorage.setItem("product", compressedProduct);
      },
      readImg: function(e) {
        var input = e.target
        var targetField = e.target.name;
        
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          
          reader.addEventListener("load", function(e) {
            generator[targetField]['image'] = e.target.result;
          });

          reader.readAsDataURL(input.files[0]);
        }
      },
    },
    mounted: function() {
      // fetch projects
      this.$nextTick(function() {
       // this.visibilitySet();
      });
    },
    updated: function() {
    },
  });

});
