import axios from 'axios'
import React, { useState } from 'react'

function Step3() {
  const [id, setId] = useState(0)
  const [photo, setPhoto] = useState()
  const BASEURL = 'https://jsonplaceholder.typicode.com'

  async function handlePost() {
    const { data = [], status } = await axios.get(`${BASEURL}/photos`, { params: { id: id } })
    status === 200 ? setPhoto(data[0]) : setPhoto(null)
  }

  return (
    <main>
      <h1>Fotos</h1>
      <input
        type="number"
        step={1}
        min={1}
        value={id}
        onChange={({ target: { value } }) => setId(value)}
      />
      <button type='button' onClick={handlePost}>
        pesquisar fotos
      </button>

      {photo && <a href={photo.url} target='_blank' rel="noreferrer"><img src={photo.thumbnailUrl} alt={photo.title} /></a>}

    </main>
  )
}

export default Step3