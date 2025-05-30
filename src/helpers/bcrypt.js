import bcrypt from 'bcrypt'


export const convertirPassword = (password) => {

    return bcrypt.hash(password)
}

export const validarPassword = (hashPassword, password) => {

    return bcrypt.compare(password, hashPassword)
}