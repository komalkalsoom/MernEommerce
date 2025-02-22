import bcrypt from 'bcryptjs';

// hash password at the time of register
export const hashePassword = async (password) => {
try {

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password,saltRounds);
    return hashedPassword;
    
} catch (error) {
    console.log(error);
}
}


// compare password at the time of register
export const comparePassword = async (password,hashedPassword) => {
    return bcrypt.compare(password,hashedPassword);
}