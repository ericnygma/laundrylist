
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js"
import { getFirestore,
        collection,
        doc,
        deleteDoc,
        addDoc,
        getDoc,
        getDocs, updateDoc,
        setDoc, query,
        orderBy, onSnapshot, where, serverTimestamp
        } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js"

 const firebaseApp = initializeApp({
    apiKey: "AIzaSyC3Ij4reGVts5e2D6HAYOhpCJgdd76teHM",
    authDomain: "listapproot.firebaseapp.com",
    projectId: "listapproot",
    storageBucket: "listapproot.appspot.com",
    messagingSenderId: "398474013698",
    appId: "1:398474013698:web:a332fd275f59da2a2b8b1b"
  });

const db = getFirestore();
const docRef = collection(db, "doditing");
const q = query(docRef);


const addBtn = document.querySelector('#addBtn');
const addTask = document.querySelector('#addTask');
const activeTask = document.querySelector('#activeTask');
const completedarea = document.querySelector('#completedArea')


// *  GETS TODAYS DATE * //
const d = new Date();
const dt = d.toDateString() + " " + d.toLocaleTimeString();
    var p = document.createElement('p');
    p.innerHTML = "Requested: " + dt;
    document.querySelector('.dateTime').appendChild(p);


// * GET ALL DOC IN COLLECTION *//
const querySnapshot = await getDocs(docRef)
querySnapshot.forEach((doc) => {
  // console.log(doc.id, "=> ", doc.data()); confirm information in doc
})




// * GET LIVE UPDATES FROM FIREBASE * //
const listening = onSnapshot(q, (querySnapshot) => {
  activeTask.innerHTML = " ";
  completedarea.innerHTML =" ";
  querySnapshot.forEach((doc) => {
    var listen = doc.data();
    var id = doc.id;
    var title = doc.data().title;
    var note = doc.data().note;
    var created = doc.data().created;
    var completed = doc.data().completed;

    createTaskCard(title, note, completed, id);
    // console.log('this is? ' + title +""+ id); 
    // confirm doc id
  })
})


// * CREATE NEW TASK AND SEND TO FIREBASE * //
addBtn.addEventListener('click', function(){
  var title = addTask.value;
  if(title === ""){
    alert("Please enter a task");
  }else{
    setDoc(doc(docRef), {
    title: title, 
    note: "",
    completed: false,
    created: serverTimestamp()
  })
}
  addTask.value = "";
})

// * THIS FUNCTION CREATE A CARD TO HOLD THE TASK * //
function createTaskCard(title, note, completed, id, created){
  var card = document.createElement('div');
      card.classList.add("card");
      card.setAttribute("id", id);

  var form = document.createElement('div');
      form.classList.add("form-box");

  var checkbox = document.createElement('input');
      checkbox.classList.add("checkbox");
      checkbox.setAttribute("type", "checkbox");
      checkbox.checked = completed;
        
  var label = document.createElement('textarea');
      label.classList.add("topCard", "taskTitle");
      label.setAttribute("readonly", true);
      label.value = title;

  var trash = document.createElement('i');
      trash.classList.add("bi", "bi-trash");
      trash.setAttribute('id', id);

  var trashBtn = document.createElement('button');
      trashBtn.classList.add("trashBtn", "endBtn");   
      trashBtn.appendChild(trash);

  var pencil = document.createElement('i');
      pencil.classList.add("bi", "bi-pencil-square");
  
  var pencilBtn = document.createElement('button');
      pencilBtn.classList.add("pencilBtn", "endBtn");   
      pencilBtn.appendChild(pencil);
      
  var hidden = document.createElement('div');
      hidden.classList.add("hidden");

  var changeNote = document.createElement('textarea');
      changeNote.classList.add("noteArea");    
      changeNote.setAttribute("placeholder", "Add a note: ");
      changeNote.value = note;

  var saveBtn = document.createElement('button');
      saveBtn.classList.add("saveBtn"); 
      saveBtn.setAttribute('id', id);   
      saveBtn.innerText = "Save";    

      

// * MOVES TASKS TO ACTIVE OR COMPLETED AREA * //
if(completed === false && checkbox.checked === false){
  activeTask.appendChild(card);
}else {
  completedarea.appendChild(card);
}

card.appendChild(form); 
card.appendChild(hidden);
     
form.appendChild(checkbox);
form.appendChild(label);
form.appendChild(pencilBtn);
form.appendChild(trashBtn);


hidden.appendChild(changeNote);
hidden.appendChild(saveBtn); 

 //* ADD CLICK EVENT LISTENER TO LABEL TO SHOW HIDDEN *//
 pencil.addEventListener('click', (e) => {
  e.stopPropagation();
  if (label.hasAttribute("readonly")) {
    hidden.style.display = "block";
    label.removeAttribute("readonly");
} else {
    hidden.style.display = "none";
    label.setAttribute("readonly", true);
}
});

// * CHECKBOX UPDATES COMPLETED IN FIREBASE * //
checkbox.addEventListener('click', () => {
  const idObj = doc(docRef, id); // IMPORTANT HAS TO BE AN OBJECT
  if (checkbox.checked === false){
    updateDoc(idObj, {
      completed: false
    });
  } else {
    updateDoc(idObj, {
      completed: true,
      completedDate: serverTimestamp()
    });
  }
})


//* DELETES TASK FROM FIRESBASE *//
trash.addEventListener('click', (e) => {
  e.stopPropagation();
  deleteDoc(doc(docRef, id));    
});

//* CLICK UPDATE TITLE AND NOTES *//
saveBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const idObj = doc(docRef, id); // IMPORTANT HAS TO BE AN OBJECT
  updateDoc(idObj, {
    title: label.value,
    note: changeNote.value,
    lastUpdated: serverTimestamp()
 })
})
};

// PWA PURPOSE //

// PWA INSTALLATION
let deferredPrompt;
const pwaBtn = document.querySelector('.add-button');
// pwaBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  pwaBtn.style.display = 'block';

  pwaBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    pwaBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});
