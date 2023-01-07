function Step1() {
  const texto = 'parágrafo inserido com react'
  const attrs = {
    id: 'main-text',
    className: 'text-center',
    style: { color: 'blue' },
    children: 'Olá React na infinity',
  }

  return (
    <main>
      <h1>Buscador infinity!</h1>
      <p className="text-center">{texto}</p>
      <label htmlFor="input">
        Input label
      </label>
      <input type="text" id="input" placeholder="preencher com o buscador" />
      <p {...attrs}></p>
    </main>
  )
}

export default Step1