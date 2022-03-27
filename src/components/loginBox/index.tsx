import styles from "./styles.module.scss";
import { VscGithubInverted } from "react-icons/vsc";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";

export function LoginBox() {
    
    const {signInUrl} = useContext(AuthContext);
 
    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href={signInUrl} className={styles.loginWithGithub}>
                <VscGithubInverted size={24}/>
                Login com Github
            </a>
        </div>
    ) 
}