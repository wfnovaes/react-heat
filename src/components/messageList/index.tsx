import styles from "./styles.module.scss";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

type Message = {
    id: string,
    text: string,
    user: {
        name: string,
        avatar_url: string
    }
}

export function MessageList() {

    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        api.get<Message[]>("messages").then(response => {
            setMessages(response.data)
        });
    }, [])

    return (
        <div className={styles.messageListWrapper}>
            <div>
                <strong>zoOta messanger</strong>
                <strong>2022</strong>       
            </div>

            <ul className={styles.messageList}>
                {messages.map(menssage => {
                    return (
                        <li key={menssage.id} className={styles.message}>
                            <p className={styles.messageContent}>{menssage.text}</p>
                            <div className={styles.messageUser}>
                                <div className={styles.userImage}>
                                    <img src={menssage.user.avatar_url} alt={menssage.user.name} />
                                </div>
                                <span>{menssage.user.name}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}