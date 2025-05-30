import bcrypt from 'bcrypt'


export const convertirPassword = async (password) => {

    let hash = await bcrypt.hash(password,2)
    return hash
}   

export const validarPassword = (hashPassword, password) => {

    return bcrypt.compare(password, hashPassword)
}