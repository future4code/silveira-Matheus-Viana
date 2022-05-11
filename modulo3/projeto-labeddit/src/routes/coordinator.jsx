export const goToLogin = (navigate) => {
    navigate("/");
}

export const goBack = (navigate) => {
    navigate(-1)
}

export const goToSignUp = (navigate) => {
    navigate("/signup");
}

export const goToFeed = (navigate) => {
    navigate("/posts");
}

export const goToPostDetails = (navigate, id) => {
    navigate(`/posts/${id}`);
}