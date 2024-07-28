"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./page.css";

export default function Form({ params }) {
    const [userinfo, setUserinfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({ title: "", type: "Tränare", description: "", truefalse: false });

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

    const handleTitleInput = (event) => {
        setFormData((prevFormData) => {
            const newFormData = {
                ...prevFormData,
                title: event.target.value,
            };
            console.log("FormData:", newFormData);
            return newFormData;
        });
    };

    const handleTypeSelect = (event) => {
        setFormData((prevFormData) => {
            const newFormData = {
                ...prevFormData,
                type: event.target.value,
            };
            console.log("FormData:", newFormData);
            return newFormData;
        });
    };

    const handleTextArea = (event) => {
        setFormData((prevFormData) => {
            const newFormData = {
                ...prevFormData,
                description: event.target.value,
            };
            console.log("FormData:", newFormData);
            return newFormData;
        });
    };

    const handleCheckbox = (event) => {
        setFormData((prevFormData) => {
            const newFormData = {
                ...prevFormData,
                truefalse: event.target.checked,
            };
            console.log("FormData:", newFormData);
            return newFormData;
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formData.title === "" || formData.description === "") {
            alert("Du måste fylla i alla fält");
            return;
        }

        console.log("Submiting form...");

        const saveFormObject = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://traino.nu/test/saveform.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const data = await response.json();
                console.log("Saved", data);
            } catch (error) {
                console.error("Error saving form data:", error);
            } finally {
                setLoading(false);
            }
        };

        saveFormObject();
    };

    return (
        <>
            {loading ? (
                <div>Laddar...</div>
            ) : (
                <div id="main">
                    <div className="box">
                        {userinfo && userinfo.firstname && (
                            <div className="userinfo">
                                <div className="thumbnail">
                                    <Image src={userinfo.thumbnail} width="100" height="100" alt="" />
                                </div>
                                <div className="userdetails">
                                    <div className="name">{`${userinfo.firstname} ${userinfo.lastname}`}</div>
                                    <div className="age">{userinfo.age}år</div>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label htmlFor="title">Titel</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleTitleInput}
                                />
                            </div>

                            <div className="input-group">
                                <label htmlFor="type">Typ</label>
                                <select id="type" name="type" value={formData.type} onChange={handleTypeSelect}>
                                    <option value="Tränare">Tränare</option>
                                    <option value="Trainee">Trainee</option>
                                </select>
                            </div>

                            <div className="input-group">
                                <label htmlFor="description">Beskrivning</label>
                                <textarea
                                    name="description"
                                    id="description"
                                    value={formData.description}
                                    onChange={handleTextArea}
                                ></textarea>
                            </div>

                            <div className="checkbox-group">
                                <label htmlFor="truefalse">
                                    <input
                                        type="checkbox"
                                        name="truefalse"
                                        id="truefalse"
                                        value={formData.truefalse}
                                        onChange={handleCheckbox}
                                    />
                                    <span className="customcheckbox"></span>
                                    True/False
                                </label>
                            </div>

                            <button type="submit">Skicka</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
