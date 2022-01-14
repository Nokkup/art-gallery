import { useState, useEffect } from "react";
import { fetchDepartments, fetchImagesListByDepartment } from "./api/api";
import { getDefaultCategory } from "./helpers";
import styles from "./App.module.scss";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
    const [departments, setDepartments] = useState([]);
    const [listIDsByCategory, setlistIDsByCategory] = useState({});

    useEffect(() => {
        async function fetchData() {
            const departments = await fetchDepartments();
            const defaultCategory = getDefaultCategory(departments);
            const imageIDs = await fetchImagesListByDepartment(
                defaultCategory.departmentId
            );

            setDepartments(departments);
            setlistIDsByCategory({ [defaultCategory.departmentId]: imageIDs });
        }

        fetchData();
    }, []);

    return (
        <div className={styles.wrapper}>
            <Header />
            <Gallery idsList={listIDsByCategory} departments={departments} />
            <Footer />
        </div>
    );
};

export default App;
