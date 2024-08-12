import { useContext, useState } from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'

import { FiSettings, FiUpload } from 'react-icons/fi'
import avatar from '../../assets/avatar.png'
import { AuthContext } from '../../contexts/auth'

import './profile.css'

export default function Profile(){

  const { user } = useContext(AuthContext)
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl)

  return(
    <div>
      <Header/>

      <div className='content' >
        <Title name='Minha conta' >
          <FiSettings size={25} />
        </Title>

        <div className='container' >

          <form className='form-profile' >
            <label className='label-avatar' >
              <span>
                <FiUpload color='#FFF' size={25}/>
              </span>

              <input type='file' accept='image/*' /> <br/>
              {avatarUrl === null ? (
                <img src={avatar} alt='Foto de Perfil' width={250} height={250} />
              ) : (
                <img src={avatarUrl} alt='Foto de Perfil' width={250} height={250}/>
              )}

            </label>
          </form>

        </div>

      </div>
      <h1>Página Perfil</h1>
    </div>
  )
}