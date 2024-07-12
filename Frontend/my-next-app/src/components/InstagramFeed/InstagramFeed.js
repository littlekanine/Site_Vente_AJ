"use client"

import React, { useState, useEffect } from "react";
import styles from "./instagramFeed.module.scss";

const accessToken = "VOTRE_ACCESS_TOKEN";

// Endpoint pour récupérer les publications d'un utilisateur
const endpoint = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${accessToken}`;

// Fonction pour récupérer les données depuis l'API Instagram
async function fetchInstagramPosts() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des publications Instagram");
        }
        const data = await response.json();
        return data.data; // Retourne les données des publications
    } catch (error) {
        console.error("Erreur:", error);
        return []; // En cas d'erreur, retourne un tableau vide
    }
}

const InstagramFeed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchInstagramPosts().then((postsData) => {
            setPosts(postsData);
        });
    }, []);

    return (
        <div className="instagram-feed">
            {posts.map((post) => (
                <div key={post.id} className="instagram-post">
                    <img src={post.media_url} alt={post.caption} />
                    <p>{post.caption}</p>
                    <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                        Voir sur Instagram
                    </a>
                </div>
            ))}
        </div>
    );
};

export default InstagramFeed;
