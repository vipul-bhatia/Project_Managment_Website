// styles
import './Create.css'
import { useState } from 'react'
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'
import { useHistory } from 'react-router-dom'
export default function Create() {
  const history = useHistory()
  const {addDocument ,response} = useFirestore('posts')
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const { user } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const createdBy = {
      displayName: user.displayName,
      id: user.uid,
      photoURL: user.photoURL
    }

    const post = {
      name,
      details,
      createdBy: createdBy,
    }
    await addDocument(post)
   if(!response.error){
      history.push('/')
   }
  }
  return (
    <div className='create-form'>
      <h2 className='page-title'>Create a new project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Post Name: </span>
          <input
          required
          type='text'
          value={name}
          onChange={e=>setName(e.target.value)}
          />
        </label>
        <label>
          <span>Post Details: </span>
          <textarea
          required
          value={details}
          onChange={e=>setDetails(e.target.value)}
          />
        </label>
        <button className='btn'>Add Post</button>
      </form>
    </div>
  )
}
