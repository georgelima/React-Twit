import React from 'react';

const Box = ({ show }) => {

  if (show) {
    return (
      <div className="container">
        <div className="col-xs-2 col-xs-offset-9">
          <div className="box">
            <h4>Você possui conta?</h4>

            <input type="text" placeholder="Celular, email ou  nome de usuário" />
            <input type="password" placeholder="Senha" />

            <div className="row">
              <div className="col-xs-5">
                <label>
                  <input type="checkbox" />
                  Lembrar-me
                </label>
              </div>
              <div className="col-xs-7">
                <a href="#">Esqueceu sua senha?</a>
              </div>
            </div>

            <button type="submit" className="signin-btn">Entrar</button>
            <hr/>
            <h6>Novo no twitter?</h6>
            <button className="signup-btn" type="submit">Inscreva-se</button>
          </div>
        </div>
      </div>
    )
  } else {
    return null;
  }
};

Box.propTypes = {
  show: React.PropTypes.bool.isRequired
}

export default Box;
