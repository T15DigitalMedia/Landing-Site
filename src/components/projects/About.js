import React from 'react'

export default function About(props) {
    const project = props.project

    return (
        <section className="section bg-light" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="mt-3">
                            {/* <img src={HeadShot} alt="" className="img-fluid mx-auto d-block img-thumbnail"/> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mt-3">
                            <h2>{project.name}</h2>
                            <h4 className="mt-4">
                                <a href={project.url} className="text-custom font-weight-bold" target="_blank" rel="noreferrer" >{project.url}</a>
                            </h4>
                            <p className="text-muted mt-4">
                                {project.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
