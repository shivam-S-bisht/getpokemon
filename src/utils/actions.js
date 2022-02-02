import axios from "axios";

export async function getPrevNextPokemon(link) {
    return axios
        .get(link)
        .then((res) => {
            if (res.status < 300 && res.status >= 200) {
                return res.data;
            }
            return { error: true, errorMessage: "Server Error" };
        })
        .catch((e) => {
            return { error: true, errorMessage: e };
        });
}

export async function getAllPokemon(offset, limit) {
    return axios
        .get(
            `${process.env.REACT_APP_API_BASE_URL}/?offset=${offset}&limit=${limit}`
        )
        .then((res) => {
            if (res.status < 300 && res.status >= 200) {
                return res.data;
            }
            return { error: true, errorMessage: "Server Error" };
        })
        .catch((e) => {
            return { error: true, errorMessage: e };
        });
}

export async function getPokemonWithId(id) {
    return axios
        .get(`${process.env.REACT_APP_API_BASE_URL}/${id}`)
        .then((res) => {
            if (res) {
                return res.data;
            }
            return { error: true, errorMessage: "Server Error" };
        })
        .catch((e) => {
            return { error: true, errorMessage: e };
        });
}
