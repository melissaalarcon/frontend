import React from "react";
import '../styles/components/pages/contactopage.css'

const ContactoPage = (props) => {
    return (
        <main className="h04">
            <div className="container-formulario text-center p-4">
                <div className="plantilla-contacto">
                    <h4>¿Te interesa contratar nuestros servicios?</h4>
                    <h5>Dejanos tu información para ponernos en contacto.</h5>

                <form class="row g-3">
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Nombre</label>
                        <input type="email" class="form-control" id="inputEmail4"/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Apellido</label>
                        <input type="password" class="form-control" id="inputPassword4"/>
                    </div>
                    <div class="col-md-4">
                        <label for="inputPassword4" class="form-label">Número de teléfono</label>
                        <input type="password" class="form-control" id="inputNumber4" placeholder="+ Código de área"/>
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="form-label">Localidad</label>
                        <select id="inputState" class="form-select">
                            <option selected>Elegí...</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <label for="inputCity" class="form-label">Provincia</label>
                        <select id="inputState" class="form-select">
                            <option selected>Elegí...</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Email</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="@gmail.com"/>
                    </div>
                    <div class="col-12">
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck"/>
                        <label class="form-check-label" for="gridCheck"> Es de mi preferencia que se contacten conmigo por vía telefónica. </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-outline-light">Enviar</button></div>
                </form>
                </div>

                <div class="info-contacto">
                    <h4>VIAL GONETT</h4>
                    <ul class="empresa">
                        <li><i class="fa fa-mobile">+54 9 11 3626-6745</i></li>
                        <li><i class="fa fa-phone">2053-9783</i></li>
                        <li><i class="fa fa-envelope">vialgonett@gmail.com</i></li>
                    </ul>
                </div>

            </div>
        </main>
    );
}

export default ContactoPage;