import styles from "../styles/Selector.module.scss";


const Selector = ({ departments, selected, setDepartment, setRefresh }) => {
    return (
        <div className={styles.selector}>
            <select
                className={styles.selector__select}
                value={selected}
                onChange={e => setDepartment(e.target.value)}
                tabIndex={2}
            >
                {
                    departments.map((el, i) => <option key={i} value={el.departmentId}>{el.displayName}</option>)
                }
            </select>
            <button className={styles.selector__button} onClick={setRefresh} tabIndex={1}>Refresh</button>
        </div>
    )

}

export default Selector;