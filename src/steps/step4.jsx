import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Step4() {
  const [posts, setPosts] = useState([])
  const BASEURL = 'https://jsonplaceholder.typicode.com'

  useEffect(() => {
    (async function () {
      const { data = [], status } = await axios.get(`${BASEURL}/posts`)
      status === 200 ? setPosts(data) : setPosts([])
    })()
  }, [])

  return (
    <main>
      <h1>Posts</h1>

      {posts.map((el, ix) => {
        return (
          <div key={ix} className='my-4 border-bottom p-3'>
            <h1>{ix + 1}. {el.title}</h1>
            <p>{el.body}</p>
          </div>
        )
      })}

    </main>
  )
}

export default Step4