import React from 'react'
import { AppInput, AppButton } from '../src/components/index';

function App() {
  return (
    <div>
      <AppInput placeholder="Pesquisa"/>
      <AppButton value="Adicionar" variant="contained" color="primary"/>
    </div>
  );
}

export default App
