import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import ProjectHeader from '../components/header/ProjectHeader'
import About from '../components/projects/About'

export default function Project(props) {
    const [loading, setLoading] = useState(true)
    const [project, setProject] = useState([])

    useEffect(() => {
        db.collection("Projects").doc(props.match.params.projectId).get().then((snapshot) => {
            setProject(snapshot.data())
            setLoading(false)
        })
    }, [props.match.params.projectId])

    return (
        <>
            <ProjectHeader />
            
            <About project={project}/>
        </>
    )
}
