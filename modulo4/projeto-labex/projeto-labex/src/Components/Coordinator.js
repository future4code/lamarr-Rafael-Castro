export const goToAdminHomePage = (navigate) => {
    navigate('/admin/trips/list')
}

export const goToApplicationFormPage = (navigate) => {
    navigate('/trips/application')
}

export const goToCreateTripPage = (navigate) => {
    navigate('/admin/trips/create')
}

export const goToHomePage = (navigate) => {
    navigate('/')
}

export const goToLoginPage = (navigate) => {
    navigate('/login')
}

export const goToTripDetailsPage = (navigate) => {
    navigate('/admin/trips/:id')
}

export const goToTripsListpage = (navigate) => {
    navigate('/trips/list')
}

export const goToBack = (navigate) => {
    navigate(-1)
}
