import React, { useState } from 'react'

export const Githubprofile = () => {
  const [username, setUsername] = useState('')
  const [profile, setProfile] = useState([])
  const GetProfile = async () => {
    try {
      let res = await fetch(`https://api.github.com/users/${username}`)
      let data = await res.json()
      console.log(data)
      setProfile([data])
      //   console.log(profile)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      <input
        type='text'
        name='username'
        id=''
        autoComplete='off'
        placeholder='Please Enter your Github username'
        value={username}
        onChange={e => setUsername(e.target.value)}
        className='w-1/2 h-10 text-center border rounded-md mb-2'
      />
      <button
        className='border h-10 w-20 hover:bg-red-500 rounded-md font-bold'
        onClick={GetProfile}
      >
        Search
      </button>
      <div>
        {profile.map(
          ({
            avatar_url,
            id,
            bio,
            public_repos,
            followers,
            following,
            html_url
          },i) => {
            return (
              <>
                <div key={i}>
                  <div>
                    <img
                      src={avatar_url}
                      alt=''
                      className='m-auto h-56 mb-2 '
                    />
                    <div className='mb-2'>
                      <h4>{bio}</h4>
                    </div>
                  </div>
                  <div className='grid grid-cols-4 gap-2 ml-48'>
                    <div className='border h-14'>
                      <p>Repository</p>
                      <p>{public_repos}</p>
                    </div>
                    <div className='border h-14'>
                      <p>followers</p>
                      <p>{followers}</p>
                    </div>
                    <div className='border h-14'>
                      <p>following</p>
                      <p>{following}</p>
                    </div>
                  </div>
                  <div></div>
                </div>
              </>
            )
          }
        )}
      </div>
    </>
  )
}
