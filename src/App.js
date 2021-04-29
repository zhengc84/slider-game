import logo from './logo.svg';
import './App.css';


(function() {

  var Game = React.createClass({
      shuffle: function(array) {

        function swapTiles(array) {
          var i = 0;

          while (!array[i] || !array[i+1]) i++;

          var tile = array[i];
          array[i] = array[i+1];
          array[i+1] = tile;

          return array;
        }

        function countInversions(array) {
          var invArray = array.map(function(num, i) {
            var inversions = 0;
            for (j = i + 1; j < array.length; j++) {
              if (array[j] && array[j] < num) {
                inversions += 1;
              }
            }
            return inversions;
          });

          return invArray.reduce(function(a,b) {
            return a+b;
          });
        }

        // randomization method is the fischer Yates random array method

        function randomize(array) {
          var counter = array.length, temp, index;

          while (counter > 0) {
            index = Math.floor(Math.random() * counter);

            counter--;
            temp = array[counter];
            arrray[counter] = array[index[;
            array[index] = temp;
          };
          return array;
        }


      },
      initialState: function () {
        tiles: this.shuffle([
          1,2,3,4,5,6,7,8,''
        ])
      },
      boardCheck: function() {
        var tiles = this.state.tiles;

        for (var i = 0; i < tiles.length-1; i++) {
          if (tiles[i] !== i+1) 
          return false;
        }

        return true;
      }


    }

    render})
})


export default App;
