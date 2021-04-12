import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HeaderCard from '../../components/HeaderCard';
import Navbar from '../../components/Navbar';

function Home() {

    return (
        <>
            <Navbar />
            <HeaderCard />

        </>
    );
}

export default Home;