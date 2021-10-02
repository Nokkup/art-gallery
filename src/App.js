import { useState, useEffect } from "react";
import { trackPromise } from 'react-promise-tracker';
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

    trackPromise(
    API.get(`/departments`)
        .then(res => {
            setDepartments(res.data.departments);
            return res.data.departments;
        })
        .then(res => {
            let defaultCategoryId = 0;

            res.forEach(el => {
                if(el.displayName === "Photographs"){
                    defaultCategoryId = el.departmentId;
                }
            })

            API.get("/search", { params: { departmentId: defaultCategoryId, hasImages: true, q: "art"}})
                .then(res => {
                    ids[res.config.params.departmentId] = res.data.objectIDs;
                    setlistIDsByCategory(ids);
                })
            
            const otherRes = res.filter(el => el.departmentId !== defaultCategoryId);

            const loadOtherRes = otherRes => {
                otherRes.forEach(el => {
                    API.get("/search", { params: { departmentId: el.departmentId, hasImages: true, q: "art"}})
                    .then(res => {
                        ids[res.config.params.departmentId] = res.data.objectIDs;
                        setlistIDsByCategory(ids);
                    })
                })
            }

            setTimeout(loadOtherRes, 3000, otherRes);
        }))
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
