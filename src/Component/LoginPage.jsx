import React, { useState } from 'react';
import './LoginPage.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast, {Toaster} from 'react-hot-toast';


export default function LoginPage() {

  const [showdata , setShowData] = useState(false)
  const [submittedData, setSubmittedData] = useState(null);

  const [name,setName]=useState("");
  const [email, setEmail] = useState('');
  const [phone , setPhone] = useState("");
  const [pass , setPass ] = useState("");
  const [conf , setConf] = useState("");
  const [count , setCount] = useState(0);
  const [eye, setEye] = useState(false);


  let increment=()=>{
    setCount(count + 1)
  }

  let decrement=()=>{
    setCount(count - 1)
  }


  let handlesubmit = (event) => {
    event.preventDefault();
  
    if (pass === conf) {
      setSubmittedData({
        name,
        email,
        phone,
        pass,
      });
  
      setName('');
      setEmail('');
      setPass('');
      setConf('');
      setPhone('');
  
      toast.success('Data saved successfully');
      setShowData(true);
    } else {
      toast.error('Password and confirm password must be the same');
    }
  };
  
 
  return (
    <div>
      <h1>Login Page</h1>
       <Toaster />
      <form onSubmit={handlesubmit}>
      <div>
        <div>
          <label>Name</label>
        <input name='name' value={name} onChange={(e) => setName(e.target.value)} type="text" pattern="[A-Za-z ]+" required
         onInvalid={e => e.target.setCustomValidity('Enter User Name Here in alphabets')}
         onInput={e => e.target.setCustomValidity('')}/>
        </div>
        <div>
          <label>Email</label>
          <input name='uemail' value={email} onChange={(e) => setEmail(e.target.value)} type="email" pattern=".+@.+" required 
          onInvalid={e => e.target.setCustomValidity('Enter correct email here')}
          onInput={e => e.target.setCustomValidity('')}
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input name='uphone' value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" pattern="\d{10}" required
          onInvalid={e => e.target.setCustomValidity('Enter only 10 digits of the mobile number')}
          onInput={e => e.target.setCustomValidity('')}
          />
        </div>
        <div>
          <label>Password</label>
          <input name='upass' value={pass} onChange={(e) => setPass(e.target.value)} type={eye ? 'text' : 'password'} />
          {eye ? <FaEyeSlash className='eyebutton' onClick={()=>setEye(!eye)} /> : <FaEye className='eyebutton' onClick={()=>setEye(!eye)} />}
        </div>
        <div>
          <label>Confirm Password</label>
          <input name='uconf' value={conf} onChange={(e) => setConf(e.target.value)} type={eye ? 'text' : 'password'} />
          {eye ? <FaEyeSlash className='eyebutton' onClick={()=>setEye(!eye)} /> : <FaEye className='eyebutton' onClick={()=>setEye(!eye)} />}
        </div>
        <div className='button'>
          <button type='submit'>Submit</button>
        </div>
      </div>
      </form>

      <div>
        <h2>{count}</h2>
        <button className='increment' onClick={increment}>Increment</button>
        <button className='decrement' onClick={decrement}>Decrement</button>
      </div>

      <hr />
      <hr />
      
      {showdata && submittedData && (
            <div>
              <div>Name you have entered is {submittedData.name}</div>
              <div>Email you have entered is {submittedData.email}</div>
              <div>Phone number you have entered is {submittedData.phone}</div>
              <div>Password you have entered is {"*".repeat(submittedData.pass.length)}</div>
            </div>
          )}
      
      


    </div>
  )
}
