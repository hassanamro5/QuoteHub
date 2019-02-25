

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCiNBQ6_V7a2V7wpvigxFP3MsZgdT3fvNk",
    authDomain: "kw-graphics-server.firebaseapp.com",
    databaseURL: "https://kw-graphics-server.firebaseio.com",
    projectId: "kw-graphics-server",
    storageBucket: "kw-graphics-server.appspot.com",
    messagingSenderId: "334742471890"
  };
  firebase.initializeApp(config);


  var tblUsers = document.getElementById('tbl_users_list');
  var databaseRef = firebase.database().ref('messages/');
  var rowIndex = 1;
  
  databaseRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
   var childKey = childSnapshot.key;
   var childData = childSnapshot.val();
   
   var row = tblUsers.insertRow(rowIndex);
   var cellId = row.insertCell(0);
   var cellName = row.insertCell(1);
   var cellEmail = row.insertCell(2);
   var cellCompany = row.insertCell(3);
   var cellMessage = row.insertCell(4);

       
  //  alert(str.link( URL ));
 





   cellId.appendChild(document.createTextNode(childData.phone));
   cellName.appendChild(document.createTextNode(childData.name));
   cellEmail.appendChild(document.createTextNode (childData.email));
   cellCompany.appendChild(document.createTextNode (childData.company));
   cellMessage.appendChild( document.createElement ("p"));

















   






   
   document.getElementsByTagName("p")[0].setAttribute("class", "democlass"); 

   $( ".democlass" ).html( "<span class='btn'><b>View Message</b></span>" );



   $( ".btn" ).click(function() {    
    $(".modal").toggleClass( "modal-visible");
  });

  // append modal with text.

  $( ".message" ).append(childData.message);
  $( ".product-name" ).append(childData.title);
  








   // Start Modal Code


   // Use the app context to input data.
  





   // now H1 Demo Class exists



   
   // if childData.message is null return link to a modal to view. if else, do nothing


   


   rowIndex = rowIndex + 1;
    });
  });

  
   
  