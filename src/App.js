import React, { useState, useEffect, useRef } from "react";
import * as S from './Styles/globalStyle';
import Api from './Components/Api.js'

export default function App() {
  return (
    <section>
      <S.GlobalStyle />
      <div>
        <Api />
      </div>
    </section>
  );
}