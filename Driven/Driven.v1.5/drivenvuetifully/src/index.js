// import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app'
import { 
    getFirestore, 
    collection, 
    getDocs,
    addDoc 
} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAZwp_UMu1CPtnHPaCJ79MsIxAeuDbXQyA",
    authDomain: "driver-65656.firebaseapp.com",
    projectId: "driver-65656",
    storageBucket: "driver-65656.appspot.com",
    messagingSenderId: "386249458737",
    appId: "1:386249458737:web:d85640fef97665970cc110"
});  

const db = getFirestore(firebaseApp);   
const auth = getAuth(firebaseApp);

const clients = collection(db, 'clients');
const drivers = collection(db, 'drivers');
const trips = collection(db, 'trips');

// const mySnapshot = await getDocs(clients);

export { db, addDoc, auth, clients, drivers, trips, getDocs}


//DETECT AUTH STATE CHANGE