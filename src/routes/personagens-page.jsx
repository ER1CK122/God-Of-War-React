import React from 'react';

import Header from "../template/header";
import Footer from "../template/footer";
import Personagens from '../components/personagens';


export default function PersonagensPage() {
  return(
    <>
      <Header/>
      <Personagens/>
      <Footer/>
    </>
  );       
}
