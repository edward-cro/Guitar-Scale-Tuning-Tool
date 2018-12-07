var placeholdeR = document.getElementsByTagName("select");
var targetS = document.getElementsByTagName("p");


function submissioN() {
  var submitS = [];
  var placE = [];

  for(a = 0; a <= 5; a++){
    submitS[a] = placeholdeR[a].value;
    placE[a] = targetS[a].textContent;
  }

  for(i = 0; i <= 5; i++){
    var noteS = ["A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab"];
    for(j = 0; j <= noteS.length; j++){
      if (submitS[i] == noteS[0]){
        targetS[i].textContent = noteS.slice(1, noteS.length)+ "," + noteS[0] + " ||||";
      }
      else if(submitS[i] == noteS[11]){
        targetS[i].textContent = noteS.slice(0, noteS.length) + " ||||";
      }
      else if(submitS[i] == noteS[j]){
        targetS[i].textContent = noteS.slice(j + 1, noteS.length) + "," + noteS.slice(0, j + 1) + " ||||";
      };
    };
  };

  for(y = 0; y <=5; y++){
    var holD = targetS[y].textContent;
    var regex = /,/gi;
    holD =  holD.replace(regex," ||");
    targetS[y].textContent = holD + holD;
  };
}
