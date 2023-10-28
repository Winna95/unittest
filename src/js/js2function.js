export function createImgForAvatar(avatar) {
    if(avatar) {
        return `<img
                            src="${avatar}"
                            alt="profile picture"
                            class="img-fluid rounded-circle mt-5 object-fit-cover user-img"
                    />`
    } else {
        return `<i class="fa-regular fa-image"></i>`;
    }
}


export async function registerNewUser (name, email, password, profileImgUrl) {
    if(!name) {
        throw new Error("Name is requiered to register a new user");
    }
    if(!email) {
        throw new Error("Email is requiered to register a new user");
    }
    if(!password) {
        throw new Error("Password is requiered to register a new user");
    }

    const requestBody = {
        name: name,
        email: email,
        password: password,
        avatar: profileImgUrl
    };
    const url = "/social/auth/register";
    const fetchOptions = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(requestBody)
    }
    try {
        const response = await fetch(url, fetchOptions);

        const data = await response.json();

        if(data.errors && data.errors.length > 0) {
            return data.errors.map(error => error.message);
        }
        return [];
    } catch(error) {
        console.error(error);
    }


}


export function findNumber(numbers, fromEnd) {
    if(numbers.length === 0) {
        throw new Error("need to pass in at least one number");
    }
    if(fromEnd) {
        return numbers [numbers.length - 1]
    } else {
        return numbers [0]
    }
}