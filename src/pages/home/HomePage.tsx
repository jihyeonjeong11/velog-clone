import React from 'react';
import MainTemplate from '../../components/main/MainTemplate';
import Header from '../../components/header/Header';


export type HomePageProps = {};

function HomePage(props: HomePageProps) {
  return (
    <MainTemplate>
      <Header />
      <div><p>Homepage</p></div>
    </MainTemplate>
  );
}

export default HomePage;
