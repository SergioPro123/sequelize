const authenticateUserWithemail = (user) => {
    return new Promise((resolve, reject) => {
        try {
            Usiario.findOne({
                where: {
                    user_email: user.userName, // user email
                },
            }).then(async (response) => {
                if (!response) {
                    resolve(false);
                } else {
                    if (
                        !response.dataValues.password ||
                        !(await response.validPassword(user.password, response.dataValues.password))
                    ) {
                        resolve(false);
                    } else {
                        resolve(response.dataValues);
                    }
                }
            });
        } catch (error) {
            const response = {
                status: 500,
                data: {},
                error: {
                    message: 'user match failed',
                },
            };
            reject(response);
        }
    });
};
