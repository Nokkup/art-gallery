import { useState, useEffect } from "react";
import { trackPromise } from 'react-promise-tracker';
import axios from "axios";
import API from "./api/api";
import styles from "./styles/App.module.scss";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";

const App = () => {
  const [departments, setDepartments] = useState([]);
  const [listIDsByCategory, setlistIDsByCategory] = useState({});
  const [isError, setIsError] = useState(false);

  useEffect(() => {

    let ids = {};
    let promises = [];

    trackPromise(
      API.get(`/departments`)
        .then(res => {
          setDepartments(res.data.departments);
          return res.data.departments;
        })
        .then(res => {
          res.forEach(el => {
            promises.push(API.get("/search", {
              params:
              {
                departmentId: el.departmentId,
                hasImages: true,
                q: "art"
              }
            }))
          })
          trackPromise(
            axios.all(promises)
              .then(res => {
                res.forEach(el => ids[el.config.params.departmentId] = el.data.objectIDs);
                setlistIDsByCategory(ids);
              })
          )
        })
    )
      .catch(() => {
        setIsError(true);
      })

  }, [])

  return (
    <div className={styles.wrapper}>
      <Header />
      {
        isError
          ? <Error />
          : <Gallery idsList={listIDsByCategory} departments={departments} />
      }
      <Footer />
    </div>
  );
}

export default App;
