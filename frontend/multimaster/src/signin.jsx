import Header1 from "./header1";
import { useNavigate } from 'react-router-dom';
import React  ,{useState}from "react";






 


function Signin(){
     const [formData, setFormData] = useState({  email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://the-multimaster.onrender.com/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
    setMessage(data.message);
    // if (data.token) {
    //   localStorage.setItem('token', data.token);
    // }
        navigate("/main"); 
      

    } catch (err) {
      navigate("/signin");
    // setMessage('Something went wrong.');
    }
  };


    return(
        <>
    <Header1/>
    <section className="bg-[url('E:\\my projects\\TheMultiMaster\\frontend\\multimaster\\public\\kidsmath.jpg')] w-[100%] h-[100%] object-cover" >
        
        {/* <img src="../kidsmath.jpg" alt="hero-image" className='w-[100%] h-[100%] object-cover'/> */}
        <div className="h-[400px] w-[400px] m-auto">
            <h1>Sign in</h1>
            <form onSubmit={handleSubmit}>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="enter your email" name="email" onChange={handleChange} required/>
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={handleChange} required/>
                <label for="floatingPassword">Password</label>
              </div>
           <div class="forgot">
            <button class="loginbutton" id="button1" type="submit">Sign in</button>
            {message && <p>{message}</p>}
            <a href=" /signup">Forgot Password?</a>
            
           </div>
        </form>
        </div>
        
         

    </section>
   
    </>
    );

}

export default Signin;
