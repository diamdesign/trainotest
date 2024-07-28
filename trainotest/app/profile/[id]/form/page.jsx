"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./page.css";

export default function Form({ params }) {
    const [userinfo, setUserinfo] = useState([]);
    const [loading, setLoading] = useState(true);

    const id = params.id;

    useEffect(() => {
        console.log("ID:", id);
        const fetchUserInfo = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://traino.nu/php/testgetuser.php?id=${id}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setUserinfo(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserInfo();
    }, [id]);

    return (
        <>
            {loading ? (
                <div>Laddar...</div>
            ) : (
                <div>
                    {userinfo && userinfo.firstname && (
                        <div className="userinfo">
                            <div className="thumbnail">
                                <Image src={userinfo.thumbnail} width="100" height="100" alt="" />
                            </div>
                            <div className="name">{`${userinfo.firstname} ${userinfo.lastname}`}</div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}
