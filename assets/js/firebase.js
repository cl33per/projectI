  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBY-fVtfeQ-DtQ1hSfOlTxkiADY1F_kpTI",
      authDomain: "projecti-14fca.firebaseapp.com",
      databaseURL: "https://projecti-14fca.firebaseio.com",
      projectId: "projecti-14fca",
      storageBucket: "",
      messagingSenderId: "974777051414",
      appId: "1:974777051414:web:dc69440b519ce43c92c837"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var provider = new firebase.auth.GoogleAuthProvider();