import { useEffect, useState } from "react";
import styles from "../styles/Gallery.module.scss";
import GalleryCard from "./GalleryCard";
import Selector from "./Selector";

import { usePromiseTracker } from 'react-promise-tracker';
import Loader from "./Loader";

const Gallery = ({ idsList, departments }) => {
    const [currentDepartment, setCurrentDepartment] = useState(19); //id: 19 --- Photographs
    const [currentIDsList, setCurrentIDsList] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const { promiseInProgress } = usePromiseTracker();

    useEffect(() => {

        const limit = 6;

        const setRandomIDsList = () => {
            let ids = [];
            if (idsList && idsList[currentDepartment]) {
                for (let i = 0; i < limit; i++) {
                    let randomIndex = Math.floor(Math.random() * idsList[currentDepartment].length)
                    ids.push(idsList[currentDepartment][randomIndex]);
                }
                setCurrentIDsList(ids);
            }
        }

        if (!currentIDsList.length || refresh) {
            setRandomIDsList();
            setRefresh(false);
        }

    }, [currentDepartment, idsList, refresh, currentIDsList])

    const handleRefresh = () => {
        setRefresh(true);
    }

    const handleSetNewDepartment = (newDep) => {
        setCurrentDepartment(newDep);
        setRefresh(true);
    }

    return (

        <div className={styles.main}>
            {
                promiseInProgress
                    ? <Loader />
                    : <>
                        <Selector
                            departments={departments}
                            selected={currentDepartment}
                            setDepartment={handleSetNewDepartment}
                            setRefresh={handleRefresh}
                        />

                        <div className={styles.gallery}>
                            {
                                currentIDsList.map((id, i) => <GalleryCard id={id} key={i} />)
                            }
                        </div>
                    </>
            }
        </div>
    );
}

export default Gallery;