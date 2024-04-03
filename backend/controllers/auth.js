const login = async (req, res) => {
    res.send('User Login')
}

const register = async (req, res) => {
    res.send('User register')
}

const logout = async (req, res) => {
    res.send('User logout')
}

module.exports = {
    login,
    register,
    logout
}