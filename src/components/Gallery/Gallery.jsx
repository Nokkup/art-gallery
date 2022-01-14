import { useEffect, useState } from "react";
import styles from "./Gallery.module.scss";
import GalleryCard from "./GalleryCard";
import GallerySelector from "./GallerySelector";
import { getDefaultCategory } from "../../helpers";
import { fetchImagesListByDepartment } from "../../api/api";
import WithLoader from "../Loader/WithLoader";

const Gallery = ({ idsList, departments }) => {
    const [currentDepartment, setCurrentDepartment] = useState(null);
    const [currentIDsList, setCurrentIDsList] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const defaultDepartment = getDefaultCategory(departments);
        setCurrentDepartment(defaultDepartment?.departmentId);
    }, [departments]);

    useEffect(() => {
        const setRandomImagesList = () => {
            const imagesOnPage = 6;
            const ids = [];
            if (idsList && idsList[currentDepartment]) {
                for (let i = 0; i < imagesOnPage; i++) {
                    const randomIndex = Math.floor(
                        Math.random() * idsList[currentDepartment].length
                    );
                    ids.push(idsList[currentDepartment][randomIndex]);
                }
                setCurrentIDsList(ids);
            }
        };

        if (!currentIDsList.length || refresh) {
            setRandomImagesList();
            setRefresh(false);
        }
    }, [currentDepartment, idsList, refresh, currentIDsList]);

    const handleRefresh = () => {
        setRefresh(true);
    };

    const handleSetNewDepartment = async (newDepartment) => {
        setIsLoading(true);
        setCurrentDepartment(newDepartment);
        if (!idsList[newDepartment]) {
            const imageIDs = await fetchImagesListByDepartment(newDepartment);
            idsList[newDepartment] = imageIDs;
        }
        setRefresh(true);
        setIsLoading(false);
    };

    return (
        <div className={styles.main}>
            <WithLoader isLoading={!currentDepartment}>
                <GallerySelector
                    departments={departments}
                    selected={currentDepartment}
                    setDepartment={handleSetNewDepartment}
                    setRefresh={handleRefresh}
                />
                <WithLoader isLoading={isLoading}>
                    <div className={styles.gallery}>
                        {currentIDsList.map((id, i) => (
                            <GalleryCard id={id} key={i} />
                        ))}
                    </div>
                </WithLoader>
            </WithLoader>
        </div>
    );
};

export default Gallery;
