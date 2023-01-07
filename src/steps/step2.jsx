import React, { useState } from 'react'

function Step2() {
  const [data, setData] = useState()
  const [upper, setUpper] = useState(false)

  function handleData({ target: { value } }) {
    setData(value)
  }

  function handleText() {
    setData(upper ? data.toLowerCase() : data.toUpperCase())
    setUpper(!upper)
  }

  return (
    <main>
      <h1>Buscador infinity!</h1>
      <label
        htmlFor="input"
      >
        Preencha com os dados de pesquisa
      </label>
      <input
        id="input"
        type="text"
        placeholder="informe aqui"
        onChange={handleData}
      />
      <p>{data}</p>
      <button type='button' onClick={handleText}>alterar</button>
    </main>
  )
}

export default Step2