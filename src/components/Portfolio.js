import React, { useEffect, useState } from "react";
import { db } from "../firebase";

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjectsFromFirebase = [];
    const subscriber = db.collection("Projects").onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        getProjectsFromFirebase.push({ ...doc.data(), key: doc.id });
      });

      setProjects(getProjectsFromFirebase);
      setLoading(false);
    });
    return () => subscriber();
  }, []);

  return (
    <section className="section text-center" id="portfolio">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Recent Work</h2>
              <p>
                For more information, send an{" "}
                <a
                  href="mailt:jtinker@t15digitalmedia.ca"
                  className="text-custom"
                >
                  email
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="row mt-4 work-filter"
          style={{ position: "relative", height: "446.376px" }}
        >
          {loading ? (
            <h2>Loading Projects</h2>
          ) : (
            <>
              {projects.length > 0 ? (
                projects.map(project => (
                  <div className="col-lg-4 work_item" key={project.key}>
                    <a href={`${project.url}`} target="_blank" rel="noreferrer">
                      <div className="work_box">
                        <div className="work_img">
                          <img
                            src="images/works/1.jpg"
                            className="img-fluid mx-auto d-block rounded"
                            alt="work-img"
                          />
                        </div>
                        <div className="work_detail">
                          <h4 className="mb-2">{project.name}</h4>
                          <p className="mb-0">{project.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))
              ) : (
                <h2>No Projects</h2>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
