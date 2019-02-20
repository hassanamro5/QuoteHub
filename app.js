

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
  var databaseRef = firebase.database().ref('users/');
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

   cellId.appendChild(document.createTextNode(childKey));
   cellName.appendChild(document.createTextNode(childData.user_name));
   cellEmail.appendChild(document.createTextNode (childData.email));
   cellCompany.appendChild(document.createTextNode (childData.company));


   
   rowIndex = rowIndex + 1;
    });
  });
   
  function save_user(){
   var user_name = document.getElementById('user_name').value;
  
   var uid = firebase.database().ref().child('users').push().key;
   var email = firebase.database().ref().child('email').push().key;
   var company = firebase.database().ref().child('company').push().key;
   
   var data = {
    user_id: uid,
    user_name: user_name,
    email: email,
    company: company
   }
   
   var updates = {};
   updates['/users/' + uid] = data;
   firebase.database().ref().update(updates);

   
   alert('The user is created successfully!');
   reload_page();
  }
  
  function update_user(){
   var user_name = document.getElementById('user_name').value;
   var user_id = document.getElementById('user_id').value;
   var email = document.getElementById('email').value;
   var company = document.getElementById('company').value;


   var data = {
    email: email,
    user_id: user_id,
    user_name: user_name,
    company: company
   }
   
   var updates = {};
   updates['/users/' + user_id] = data;
   firebase.database().ref().update(updates);
   
   alert('The user is updated successfully!');
   
   reload_page();
  }
  
  function delete_user(){
   var user_id = document.getElementById('user_id').value;
  
   firebase.database().ref().child('/users/' + user_id).remove();
   alert('The user is deleted successfully!');
   reload_page();
  }
  
  function reload_page(){
   window.location.reload();
  }
  
  


  

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
  var databaseRef = firebase.database().ref('users/');
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

   cellId.appendChild(document.createTextNode(childKey));
   cellName.appendChild(document.createTextNode(childData.user_name));
   cellEmail.appendChild(document.createTextNode (childData.email));
   cellCompany.appendChild(document.createTextNode (childData.company));


   
   rowIndex = rowIndex + 1;
    });
  });
   
  function save_user(){
   var user_name = document.getElementById('user_name').value;
  
   var uid = firebase.database().ref().child('users').push().key;
   var email = firebase.database().ref().child('email').push().key;
   var company = firebase.database().ref().child('company').push().key;
   
   var data = {
    user_id: uid,
    user_name: user_name,
    email: email,
    company: company
   }
   
   var updates = {};
   updates['/users/' + uid] = data;
   firebase.database().ref().update(updates);

   
   alert('The user is created successfully!');
   reload_page();
  }
  
  function update_user(){
   var user_name = document.getElementById('user_name').value;
   var user_id = document.getElementById('user_id').value;
   var email = document.getElementById('email').value;
   var company = document.getElementById('company').value;


   var data = {
    email: email,
    user_id: user_id,
    user_name: user_name,
    company: company
   }
   
   var updates = {};
   updates['/users/' + user_id] = data;
   firebase.database().ref().update(updates);
   
   alert('The user is updated successfully!');
   
   reload_page();
  }
  
  function delete_user(){
   var user_id = document.getElementById('user_id').value;
  
   firebase.database().ref().child('/users/' + user_id).remove();
   alert('The user is deleted successfully!');
   reload_page();
  }
  
  function reload_page(){
   window.location.reload();
  }
  
  


  