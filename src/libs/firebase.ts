// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  set,
  get,
  update,
  remove,
  ref,
  child,
  onValue,
  push,
} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1bNo7UVZxFniE6uu0eJHqTU8Bc4n10rk",
  authDomain: "techbysj-app.firebaseapp.com",
  projectId: "techbysj-app",
  storageBucket: "techbysj-app.appspot.com",
  messagingSenderId: "964510738443",
  appId: "1:964510738443:web:e5cdba76c6e14d7699ff0e"
};



const app = initializeApp(firebaseConfig)

const db = getDatabase(app);
export {
  getDatabase,
  set,
  get,
  update,
  remove,
  ref,
  child,
  onValue,
  db
}

export async function saveData(table: string, data: any) {
  try {
    let dbRef = ref(db, table);
  let idRef = await push(dbRef)
  let id:any = idRef.toString().split('/').pop()
   await set(idRef, {...data, id})

  return  id
  } catch (error:any) {
    console.log({error:error.message})
    return false;
  }
}


export async function updateData(table: string, data: any, id: string | number) {
  // update(ref(db, `${table}/${id}`), data)
  //   .then(() => console.log(table + " Successfully created"))
  //   .catch((error) => {
  //     console.log("Something went wrong, check data and try again");
  //   });
  try {
    let result = await update(ref(db, `${table}/${id}`), data)

    console.log({ result })
    return true;
  } catch (error) {
    console.log({ error })
    return false;
  }


}

export async function deleteData(table: string, id: string | number) {

  try {
    let res = await remove(ref(db, `${table}/${id}`));
    console.log({ deleteRes: res })
    return true;
  } catch (error) {
    return false;
  }


}


export async function getDataById(table: string, id: number | string) {
  const path = `${table}/${id}`;
  return await getData(path);
}

export async function getData(table: string, cb: any = null) {
  try {
    const eventRef = ref(db, table);
    let snapshot = await get(eventRef);
    let data = await snapshot.val()
    return { data };
    // 
  } catch (error: any) {
    return { error: error.message }
  }
}
