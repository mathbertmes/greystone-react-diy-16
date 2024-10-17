import { useState } from 'react'
import Welcome from "./welcome";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => alert(username);

  return(
    <>
    <Welcome title={"Login"} description={""}/>
    <div className="w-full flex items-center justify-center">
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col max-w-80 mb-2">
        <label className="text-lg mb-1" htmlFor="">Username:</label>
        <input className='border p-2 rounded-md border-black' type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div className="flex flex-col max-w-80">
        <label className="text-lg mb-1">Password:</label>
        <input className='border border-black p-2 rounded-md' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
     
    <button className="w-80 px-4 py-2 mt-4 text-white rounded-md bg-green-600"type="submit">Submit</button>
    
</form>
</div>
</>
  )
}

export default Login;