import React from 'react'
import { AppInput, AppButton, AppCheckList } from '../src/components/index';

function App() {
  return (
    <div>
      <AppInput placeholder="Pesquisa"/>
      <AppButton value="Adicionar" variant="contained" color="primary"/>
      <AppCheckList/>
    </div>
  );
}

export default App
