import { useState, useEffect } from 'react'

import { auth } from '../services/firebaseConnection'
import { onAuthStateChanged } from 'firebase/auth'

function Private({ children }){
  const [loading, setLoading] = useState(true)
  const [signed, setSigned] = useState(false)

  useEffect(() => {

  }, [])

  return children
}

export default Private