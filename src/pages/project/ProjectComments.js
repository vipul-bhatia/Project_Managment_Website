// styles
import './Project.css'
import { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { timestamp } from '../../firebase/config'

export default function Project() {
  const [newComment, setNewComment] = useState('')
  const { user } = useAuthContext()
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random()
    }
    console.log(commentToAdd)
  }
  return (
    <div className='project-comments'>
      <h4>Project Comments</h4>
  <form className='add-comment' onSubmit={handleSubmit}><label>
    <textarea
    required
    placeholder='Add a comment'
    value={newComment}
    onChange={e=>setNewComment(e.target.value)}
    ></textarea>
    </label>
    <button className='btn'>Add Comment</button>
    </form>     
    </div>
  )
}
