$(document).ready(function () {
  var database = firebase.database();
  // connectionsRef references a specific location in our database.
  // All of our connections will be stored in this directory.
  var connectionsRef = database.ref("/connection");
  // '.info/connected' is a special location provided by Firebase that is updated
  // every time the client's connection state changes.
  // '.info/connected' is a boolean value, true if the client is connected and false if they are not.
  var connectedRef = database.ref(".info/connected");
  // When the client's connection state changes...
  connectedRef.on("value", function (snap) {
    // If they are connected..
    if (snap.val()) {
      // Add user to the connections list.
      var con = connectionsRef.push(true);
      // Remove user from the connection list when they disconnect.
      con.onDisconnect().remove();
    }
  });
  // When first loaded or when the connections list changes...
  connectionsRef.on("value", function (snap) {
    // Display the viewer count in the html.
    // The number of online users is the number of children in the connections list.
    $("#connected-viewers").text(snap.numChildren());
  });

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return false;
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: 'https://www.youtube.com/watch?v=oHg5SJYRHA0',
    // Privacy policy url.
    privacyPolicyUrl: 'https://www.youtube.com/watch?v=oHg5SJYRHA0'
  };
  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      writeUserData(user.uid, user.displayName, user.email, user.photoURL);

    } else {
      
    }
  });



  function writeUserData(userId, name, email, imageUrl) {

    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture: imageUrl
    });

    var userPhoto = $('<img>');
    userPhoto.attr('src', imageUrl);
    userPhoto.attr('class', 'userimg');

    $('#userImage').append(userPhoto);
  }

  $('#signOut').on("click", function () {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
      location.reload();
    }).catch(function (error) {
      // An error happened.
    });
  });
});