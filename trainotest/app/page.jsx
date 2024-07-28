"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
    const [id, setId] = useState("");

    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (id === "") {
            return;
        }
        router.push(`/profile/${id}/form`);
    };

    const handleSetId = (event) => {
        setId(event.target.value);
    };

    return (
        <main className={styles.main}>
            <h1>Skriv in ett ID</h1>
            <span>ex 175</span>
            <p>Tryck sedan på "Go!" knappen.</p>
            <form onSubmit={handleSubmit}>
                <input className={styles.input} type="number" id="id" name="id" value={id} onChange={handleSetId} />
                <button type="submit">Go!</button>
            </form>
        </main>
    );
}
