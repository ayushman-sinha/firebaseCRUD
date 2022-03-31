import {useEffect,useState} from 'react'
import {db} from './firebase-config';
import {collection,doc,getDocs,addDoc,updateDoc,deleteDoc} from 'firebase/firestore'
import { async } from '@firebase/util';

const App = () => {
  const [user,setUser]=useState([]);
  const[namenew,setName]=useState('');
  const [agenew,setAge]=useState('');
  const userCol=collection(db,'users')
  const updateUser=async(id,age)=>{
    const userDoc=doc(db,'users',id);
    await updateDoc(userDoc,{age:age+1});
  }
  const deleteUser=async(id)=>{
    const userDoc=doc(db,'users',id);
    await deleteDoc(userDoc);
  }
  const handleChange=async()=>{
    console.log(namenew,agenew);
   await addDoc(userCol,{name:namenew,age:agenew});
  }
  useEffect(()=>{
    const getUser= async()=>{
     const data=await getDocs(userCol);
     console.log(data.docs)
     setUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
    getUser();
  },[])
  return (
    <div>
      <p><input type='text' placeholder='Name..' onChange={(e)=>{setName(e.target.value)}}></input></p>
      <p><input type='number' placeholder='Age..' onChange={(e)=>{setAge(e.target.value)}}></input></p>
      <button type='button' onClick={(e)=>handleChange()}>Click</button>
      <p></p>
        <div>
          {user.map((m)=>{
           return (<div> <ul>
             <h1><li>Name : {m.name}</li></h1>
             <h2>Age : {m.age}</h2>
            </ul>
            <div><button type='button' onClick={(e)=>updateUser(m.id,parseInt(m.age))}>Increase Age</button>
            <button type='button' onClick={(e)=>deleteUser(m.id)}>Delete</button>
            </div></div>)
          })}
        </div>
      
    </div>
  )
}

export default App