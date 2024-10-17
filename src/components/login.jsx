import { useState } from 'react'

const Login = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [chips, setChips] = useState(false);
  const [request, setRequest] = useState('')
  const [terms, setTerms] = useState(false)
  const handleSubmit = () => alert(email);

  return(
    <form onSubmit={handleSubmit}>
      <div>
        Name:
        <input type="email" value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <div>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div>
        With chips?
        <select value={chips} onChange={(e) => setChips(e.target.value)} name="chips" id="chips">

          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>
      <div>
        Special requests:
        <textarea value={request} onChange={(e) => setRequest(e.target.value)}/>
      </div>
      <div>
        <input type="checkbox" value={terms} onChange={(e) => setTerms(e.target.value)}/>
      </div>
    <button type="submit">Submit</button>
</form>
    // <div>
    //   <h1>Login</h1>
    //   <div>
    //     <div>
    //       <label htmlFor="email">Email</label>
    //       <input id="email" type="text" placeholder="Email"/>
    //     </div>
    //     <div>
    //       <label htmlFor="password">Password</label>
    //       <input id="password" type="password" placeholder="Password"/>
    //     </div>
        
    //   </div>
    // </div>
  )
}

export default Login;