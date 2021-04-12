import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HeaderCard from '../../components/HeaderCard';
import MainCard from '../../components/MainCard';
import Navbar from '../../components/Navbar';
import TwoButtons from '../../components/TwoButtons';

function Home() {

    return (
        <>
            <Navbar />
            <HeaderCard />
            <TwoButtons />
            <MainCard />
        </>
    );
}

export default Home;