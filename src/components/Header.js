import React from 'react'

function Header() {
return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand fs-4 fw-semibold" href="/">FoodDelivery.lk</a>
            <button type="button" className="btn btn-dark"><a href='/contact' class='text-decoration-none text-light'>Contact us</a></button>
        </div>
        </nav>
    </div>
)
}

export default Header;
