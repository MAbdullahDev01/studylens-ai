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

export async function fetchStudySessions() {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/sessions`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch study sessions");
  }

  return await res.json();
}
