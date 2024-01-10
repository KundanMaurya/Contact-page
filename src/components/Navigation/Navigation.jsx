import styles from "./Navigation.module.css";

// here we use css property for key values



function Navigation (){
  console.log(styles);
  return(
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
      <img src="/images/brand_logo.png" alt="brand logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navigation;