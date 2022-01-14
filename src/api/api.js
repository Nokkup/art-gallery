import axios from "axios";

const API_URL = "https://collectionapi.metmuseum.org/public/collection/v1";

const ApiRequest = axios.create({
    baseURL: API_URL,
    responseType: "json",
});

export async function fetchDepartments() {
    const data = await ApiRequest.get("/departments");
    const departments = data.status === 200 ? data.data.departments : [];
    return departments;
}

export async function fetchImagesListByDepartment(departmentId) {
    const data = await ApiRequest.get("/search", {
        params: {
            departmentId,
            hasImages: true,
            q: "art",
        },
    });
    const idsList = data.status === 200 ? data.data.objectIDs : [];
    return idsList;
}

export async function fetchImageInfo(imageId) {
    const data = await ApiRequest.get(`/objects/${imageId}`);
    if (data.status !== 200) {
        return {};
    }
    const information = {
        imageSmallSize: data.data.primaryImageSmall,
        imageFullSize: data.data.primaryImage,
        author: data.data.artistDisplayName || "unknown",
        title: data.data.title || "unknown",
        wiki: data.data.artistWikidata_URL,
        tags: data.data.tags?.map((el) => el.term) || [],
    };

    if (data.data.objectBeginDate !== data.data.objectEndDate) {
        information.years = `${data.data.objectBeginDate} — ${data.data.objectEndDate}`;
    } else {
        information.years = data.data.objectBeginDate;
    }
    information.years = information.years || "undated";

    return information;
}
