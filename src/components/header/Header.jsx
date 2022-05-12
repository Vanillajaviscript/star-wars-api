import styles from "./header.module.css"

const Header = () => {
    return (
        <div className={styles.div}>
            <h1>STAR WARS STARSHIPS</h1>
        </div>
    )
}
console.log(Header())
export default Header;