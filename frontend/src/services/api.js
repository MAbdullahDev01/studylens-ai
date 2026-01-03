export async function submitStudySession(data) {
    const res = await fetch(
        `${import.meta.env.VITE_API_URL}/sessions`,
        {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(data),
        }
    );

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit session")
    }

    return await res.json();
}