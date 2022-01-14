export function getDefaultCategory(departments) {
    let defaultCategory = departments.filter(
        (item) => item.displayName === "European Paintings"
    )[0];
    if (!defaultCategory && departments.length) {
        defaultCategory = departments[0];
    }
    return defaultCategory;
}
