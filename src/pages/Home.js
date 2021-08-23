import React from 'react'
import Header from '../components/header/Header'
import About from '../components/About'
import Portfolio from '../components/Portfolio'

export default function Home() {
    return (
        <>
            <Header />
            <section className="section header-bg-img h-100vh" id="home">
                <div className="bg-overlay w-100"></div>
                <div className="header-table">
                    <div className="header-table-center">
                        <div className="container position-relative z-index">
                            <div className="row justify-content-center">
                                <div className="col-lg-12">
                                    <div className="text-center header-content mx-auto">
                                        <h1 className="header-name text-white text-capitalize mb-0">T15 Digital Media</h1>
                                        <p className="text-white mx-auto header-desc mt-4">Turning dreams into reality.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
                <div className="scroll_down">
                    <a href="#about" className="scroll">
                        <i className="text-white"></i>
                    </a>
                </div>
            </section>

            <About />
            <Portfolio />
        </>
    )
}
