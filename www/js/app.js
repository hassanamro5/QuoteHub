

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
   var cellTitle = row.insertCell(3);
   var cellCompany = row.insertCell(4);
   var cellMessage = row.insertCell(5);


  //  document.body.innerHTML = document.body.innerHTML.replace('undefined', 'hi');


       
// creates a random class name for the table


const Random = 

Math.floor(Math.random() * 999);

console.log(Random);

// End Generate Random Variable







// End random number


   cellId.appendChild(document.createTextNode(childData.phone));
   cellName.appendChild(document.createTextNode(childData.name));
   cellEmail.appendChild(document.createTextNode (childData.email));
   cellTitle.appendChild(document.createTextNode (childData.title));
   cellCompany.appendChild(document.createTextNode (childData.company));
   cellMessage.appendChild(document.createTextNode (childData.message));
   






 

   


   rowIndex = rowIndex + 1;
    });




  });

  console.log(9);


  var x = new MutationObserver(function (e) {
    if (e[0].removedNodes) Email.send({
      Host : "dchavours@gmail.com",
      Username : "username",
      Password : "password",
      To : 'rambochavours@gmail.com',
      From : "KW Graphics Server",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  ); 
    

  });
  

   
  // count the number of times a function has been called then create a for each loop. 

  

//   Email.send({
//     Host : "smtp.yourisp.com",
//     Username : "username",
//     Password : "password",
//     To : 'them@website.com',
//     From : "you@isp.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    console.log(mutations, observer);
    // ...
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
  subtree: true,
  attributes: true
  //...
});


