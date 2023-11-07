

import './style.css'

function App() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-form-title">log in</span>

            <div className="wrap-input">
              <input className='input' type="email"/>
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <br></br>

            <div className="wrap-input">
              <input className="input" type="password" />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <br></br>

            <div className="container-login-form-btn"></div>
            <button className="login-form-btn">login</button>

            <div className="text-center">
              <span className="txt1">Não possui conta?</span>
              <a className="txt2" href="#">Criar conta.</a>
            </div>

          </form>
      </div>
    </div>
</div>
  );
}

export default App;
