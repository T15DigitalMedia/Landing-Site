import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'

export default function Projects() {

    const [loading, setLoading] = useState(true)
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const getProjectsFromFirebase = []
        const subscriber = db
            .collection("Projects")
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    getProjectsFromFirebase.push({...doc.data(), key: doc.id})
                })

                setProjects(getProjectsFromFirebase)
                setLoading(false)
            })
        return () => subscriber()
    }, [])

    return (
        <div>
            <h1>Projects</h1>
            {loading ?
                <h2>Loading Projects</h2>
            :
                <>
                    {projects.length > 0 ? (
                        projects.map((project) => 
                        <div key={project.key}>
                            <span>Title:</span> {project.name}
                            <span>Description:</span> {project.description}
                        </div>
                    )
                    ) : <h2>No Projects</h2>}
                </>
            }
        </div>
    )
}
